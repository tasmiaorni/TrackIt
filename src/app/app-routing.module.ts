import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-accounts', loadChildren: './pages/home-accounts/home-accounts.module#HomeAccountsPageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'summary', loadChildren: './pages/summary/summary.module#SummaryPageModule' },
  { path: 'grocery', loadChildren: './pages/grocery/grocery.module#GroceryPageModule' },
  { path: 'rent-car', loadChildren: './pages/rent-car/rent-car.module#RentCarPageModule' },
  { path: 'insurance', loadChildren: './pages/insurance/insurance.module#InsurancePageModule' },
  { path: 'health', loadChildren: './pages/health/health.module#HealthPageModule' },
  { path: 'fun', loadChildren: './pages/fun/fun.module#FunPageModule' },
  { path: 'other', loadChildren: './pages/other/other.module#OtherPageModule' },
  { path: 'dog', loadChildren: './pages/dog/dog.module#DogPageModule' },
  { path: 'reminder', loadChildren: './pages/reminder/reminder.module#ReminderPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
