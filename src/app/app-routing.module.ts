import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewCarsComponent } from './pages/new-cars/new-cars.component';
import { BuyComponent } from './pages/buy/buy.component';
import { PreorderComponent } from './pages/preorder/preorder.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'new-cars',component:NewCarsComponent},
  {path:'buy',component:BuyComponent},
  {path:'about',component:AboutComponent},
  {path:'preorder',component:PreorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
