import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

export const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'/Home',pathMatch:'full'},
    { path: 'Home', component: HomeComponent },
    { path: 'Products', component: ProductListComponent },
    { path: 'Products/:pid', component: ProductDetailsComponent },
    { path: 'Order', component: OrderMasterComponent },
  ]},
  {path:'Login',component:LoginComponent},
  { path: '**', component: NotfoundComponent },
];
