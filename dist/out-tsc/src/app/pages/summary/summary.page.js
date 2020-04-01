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
var SummaryPage = /** @class */ (function () {
    function SummaryPage() {
        this.appBuckets = [
            {
                id: 1,
                text: 'Grocery',
                value: 55.21,
            },
            {
                id: 2,
                text: 'Rent',
                value: 55.21,
            },
            {
                id: 1,
                text: 'Fun',
                value: 55.21,
            },
        ];
    }
    SummaryPage.prototype.ngOnInit = function () {
    };
    SummaryPage.prototype.addBucket = function () {
        var item = {
            "id": 4,
            "text": "New Item",
            "value": 34
        };
        this.appBuckets.push(item);
    };
    SummaryPage = __decorate([
        Component({
            selector: 'app-summary',
            templateUrl: './summary.page.html',
            styleUrls: ['./summary.page.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], SummaryPage);
    return SummaryPage;
}());
export { SummaryPage };
//# sourceMappingURL=summary.page.js.map