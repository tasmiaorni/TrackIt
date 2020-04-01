var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var GroceryComponent = /** @class */ (function () {
    function GroceryComponent() {
    }
    GroceryComponent.prototype.ngOnInit = function () {
    };
    GroceryComponent = __decorate([
        Component({
            selector: 'app-grocery',
            templateUrl: './grocery.component.html',
            styleUrls: ['./grocery.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], GroceryComponent);
    return GroceryComponent;
}());
export { GroceryComponent };
//# sourceMappingURL=grocery.component.js.map