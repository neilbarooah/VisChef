var express = require('express');
var router = express.Router();
var request = require('request-promise');
var redis = require("redis").createClient();

router.put('/:userId/profile', (req, res, next) => {
  console.log("PUT /users/:userId/profile");
  try {
    var store = {
      "id": req.params.userId,
      "diet": req.body.diet,
      "intolerances": req.body.intolerances.join(","),
      "minProtein": req.body.protein_range.lower,
      "maxProtein": req.body.protein_range.upper,
      "minCarbs": req.body.carb_range.lower,
      "maxCarbs": req.body.carb_range.upper,
      "minFat": req.body.fat_range.lower,
      "maxFat": req.body.fat_range.upper,
      "minCalories": req.body.calorie_range.lower,
      "maxCalories": req.body.calorie_range.upper
    }
    redis.hmset(req.params.userId + ":profile", store, function(err, reply) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      if (reply == null) {
        return res.status(404).json({"message":"Couldn't find user profile"});
      }
    });
    store.intolerances = req.body.intolerances;
    return res.status(200).json(store);
  } catch (err) {
    console.log(err);
    return res.status(500).json({"message":"Internal server error"});
  }
});

router.get('/:userId/profile', (req, res, next) => {
  console.log("GET /users/:userId/profile");
  try {
    multi = redis.multi();
    var keys = ["diet", "intolerances", "minProtein", "maxProtein",
      "minCarbs", "maxCarbs", "minFat", "maxFat", "minCalories", "maxCalories"];
    var i = 0;
    for (i = 0; i < 10; i++) {
      multi.hmget(req.params.userId + ":profile", keys[i]);
    }
    multi.exec(function (err, reply) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      if (reply == null) {
        return res.status(404).json({"message":"Couldn't find user profile"});
      }
      var obj = {
        "id": req.params.userId,
        "diet": reply[0][0],
        "intolerances": reply[1][0], 
        "minProtein":  parseInt(reply[2][0], 10),
        "maxProtein":  parseInt(reply[3][0], 10),
        "minCarbs":  parseInt(reply[4][0], 10),
        "maxCarbs":  parseInt(reply[5][0], 10),
        "minFat":  parseInt(reply[6][0], 10),
        "maxFat":  parseInt(reply[7][0], 10),
        "minCalories":  parseInt(reply[8][0], 10),
        "maxCalories":  parseInt(reply[9][0], 10)
      }
      if (!obj.intolerances) {
        obj.intolerances = [];
      } else {
        obj.intolerances = obj.intolerances.split(",");
      }
      return res.status(200).json(obj);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({"message":"Internal server error"});
  }
});

router.post('/:userId/recipes', (req, res, next) => {
  console.log("POST /users/:userId/recipes");
  try {
    var store = {
      "id": String(req.body.id),
      "image": String(req.body.image),
      "imageType": String(req.body.imageType),
      "title": String(req.body.title)
    }
    redis.hmset(req.params.userId + ":recipe:" + req.body.id, store, function(err, reply) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      if (reply == null) {
        return res.status(404).json({"message":"Couldn't set user recipe attributes"});
      }
    });
    redis.hgetall(req.params.userId + ":recipes", function(err, keys) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      if (keys == null) {
        keys = { };
      }
      keys[req.body.id] = req.body.id;
      redis.hmset(req.params.userId + ":recipes", keys, function(err, reply) {
        if (err) {
          console.log(err);
          return res.status(500).json({"message":"DB error"});
        }
        if (reply == null) {
          return res.status(404).json({"message":"Couldn't set user recipes"});
        }
      });
    });
    return res.status(200).json({"message":"OK"});
  } catch (err) {
    console.log(err);
    return res.status(500).json({"message":"Internal server error"});
  }
});

router.get('/:userId/recipes', (req, res, next) => {
  console.log("GET /users/:userId/recipes");
  try {
    redis.hgetall(req.params.userId + ":recipes", function(err, obj) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      if (obj == null) {
        return res.status(404).json({"message":"No recipes for this user"});
      }
      multi = redis.multi();
      var k = 0;
      var recipes = Object.keys(obj);
      var keys = ["id", "image", "imageType", "title"];
      for (k = 0; k < recipes.length; k++) {
        var i = 0;
        for (i = 0; i < 4; i++) {
          multi.hmget(req.params.userId + ":recipe:" + recipes[k], keys[i]);
        }
      }
      multi.exec(function (err, reply) {
        if (err) {
          console.log(err);
          return res.status(500).json({"message":"DB error"});
        }
        if (reply == null) {
          return res.status(404).json({"message":"Couldn't find user profile"});
        }
        console.log(reply);
        var arr = [];
        while (reply.length >= 4) {
          var tmp = reply.splice(0, 4);
          arr.push({
            "userID": req.params.userId,
            "id": tmp[0][0],
            "image": tmp[1][0],
            "imageType": tmp[2][0], 
            "title":  tmp[3][0]
          });
        }
        console.log(arr);
        return res.status(200).json(arr);
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({"message":"Internal server error"});
  }
});

router.delete('/:userId/recipes/:recipeId', (req, res, next) => {
  console.log("DELETE /users/:userId/recipes/:recipeId");
  try {
    multi = redis.multi();
    multi.hdel(req.params.userId + ":recipes", req.params.recipeId);
    var keys = ["id", "image", "imageType", "title"];
    var i = 0;
    for (i = 0; i < 4; i++) {
        multi.hdel(req.params.userId + ":recipe:" + req.params.recipeId, keys[i]);
    }
    multi.exec(function (err, reply) {
      if (err) {
        console.log(err);
        return res.status(500).json({"message":"DB error"});
      }
      return res.status(200).json({"message":"OK"});
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({"message":"Internal server error"});
  }
});

module.exports = router;
