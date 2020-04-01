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
var FunComponent = /** @class */ (function () {
    function FunComponent() {
    }
    FunComponent.prototype.ngOnInit = function () {
    };
    FunComponent = __decorate([
        Component({
            selector: 'app-fun',
            templateUrl: './fun.component.html',
            styleUrls: ['./fun.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], FunComponent);
    return FunComponent;
}());
export { FunComponent };
//# sourceMappingURL=fun.component.js.map