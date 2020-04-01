var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PopmenuComponent } from './../../components/popmenu/popmenu.component';
import { HomeAccountsPage } from './HomeAccounts';
import { HomeResultsPage } from '../home-results/home-results.page';
var routes = [
    {
        path: '',
        component: HomeAccountsPage
    }
];
var HomeAccountsPageModule = /** @class */ (function () {
    function HomeAccountsPageModule() {
    }
    HomeAccountsPageModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HomeAccountsPage, PopmenuComponent, HomeResultsPage]
        })
    ], HomeAccountsPageModule);
    return HomeAccountsPageModule;
}());
export { HomeAccountsPageModule };
//# sourceMappingURL=home-accounts.module.js.map