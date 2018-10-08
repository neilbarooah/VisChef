var express = require('express');
var router = express.Router();
var request = require('request-promise');
var redis = require("redis").createClient();
//router.use('/users', require('./users'));

router.post('/status', (req, res, next) => {
  res.status(200).json({});
});

router.post('/predictions', (req, res, next) => {
  console.log("POST /predictions");
  try {
    if (req.body.key == process.env.KEY) {
      if (!req.body.base64) {
        return next({
          code: 400,
          message: 'Missing Parameters'
        });
      }

      const Clarifai = require('clarifai');
      const clar = new Clarifai.App({
        apiKey: process.env.CLARIFAI
      });

      clar.models.predict(Clarifai.FOOD_MODEL, {base64: req.body.base64 }).then(
        function(response) {
           console.log("Returning predict outputs...");
           return res.status(200).json(response.outputs[0].data.concepts);
        },
        function(err) {
          console.log(err);
          return res.status(500).json({"message":"API client error"});
        }
      );
    } else {
      return res.status(401).json({"message":"Invalid Key"});
    }
  } catch (err) {
    console.log(err);
    next({
      code: 500,
      message: 'Internal Server Error'
    });
  }
});

router.post('/recipes', (req, res, next) => {
  console.log("POST /recipes");
  try {
    if (req.body.key == process.env.KEY) {
      if (!req.body.ingredients || !req.body.query || !req.body.userId) {
        return next({
          code: 400,
          message: 'Missing Parameters'
        });
      }

      multi = redis.multi();
      var keys = ["diet", "intolerances", "minProtein", "maxProtein",
        "minCarbs", "maxCarbs", "minFat", "maxFat", "minCalories", "maxCalories"];
      var i = 0;
      for (i = 0; i < 10; i++) {
        multi.hmget(req.body.userId + ":profile", keys[i]);
      }
      console.log("Grabbing profile info for " + req.body.userId + "...");
      multi.exec(function (err, reply) {
        if (err) {
          console.log(err);
          return res.status(500).json({"message":"DB error"});
        }
        if (reply == null) {
          return res.status(404).json({"message":"Couldn't find user profile"});
        }

        const options = {
          method: 'GET',
          uri: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex',
          qs: {
            includeIngredients: req.body.ingredients,
            query: req.body.query,
            ranking: 1,
            number: 50,
            instructionsRequired: true,
            diet: reply[0][0],
            intolerances: reply[1][0], 
            minProtein:  parseInt(reply[2][0], 10),
            maxProtein:  parseInt(reply[3][0], 10),
            minCarbs:  parseInt(reply[4][0], 10),
            maxCarbs:  parseInt(reply[5][0], 10),
            minFat:  parseInt(reply[6][0], 10),
            maxFat:  parseInt(reply[7][0], 10),
            minCalories:  parseInt(reply[8][0], 10),
            maxCalories:  parseInt(reply[9][0], 10)
          },
          headers: {
            "X-Mashape-Key": process.env.SPOON,
            "Accept": "application/json"
          }
        };

        if (!options.qs.intolerances) {
          options.qs.intolerances = [];
        } else {
          options.qs.intolerances = options.qs.intolerances.split(",");
        }

        console.log("Using these options:");
        console.log(options);
        request(options)
          .then(function (response) {
            console.log("Returning recipe outputs...");
            //console.log(response);
            var sortedResults = JSON.parse(response).results;
            sortedResults.sort(function(a, b) {
                return b.usedIngredientCount - a.usedIngredientCount;
            })
            return res.status(200).json(sortedResults);
          })
          .catch(function (err) {
            console.log(options);
            console.log(err);
            return res.status(500).json({"message":"API client error"});
          });
      });
    } else {
      return res.status(401).json({"message":"Invalid Key"});
    }
  } catch (err) {
    console.log(err);
    next({
      code: 500,
      message: 'Internal Server Error'
    });
  }
});

router.use((req, res, next) => {
  next({
    code: 404,
    message: 'Not found'
  });
});

router.use((err, req, res, next) => {
  const code = err.code || 500;
  const message = err.message;

  res.status(code).json({
    error: {
      code,
      message
    }
  });
});

module.exports = router;
