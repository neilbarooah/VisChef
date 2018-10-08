import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
    selector: 'cuisine-selection',
    templateUrl: "./cuisine-selection.html"
})
export class CuisineSelectionComponent implements OnInit {
    @Output() onSearch = new EventEmitter<string[]>();
    selectedCuisines: string[];

    ngOnInit() {
        this.selectedCuisines = [];
    }

    enter() {
        this.onSearch.emit(this.selectedCuisines);
    }
}
