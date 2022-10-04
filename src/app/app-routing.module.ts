import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {UserListComponent} from "./user-list/user-list.component";
import {ContactComponent} from "./contact/contact.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const ROUTES: Routes = [
  {path:'home', component:HomeComponent},
  {path:'product', component:ListProductComponent},
  {path:'user', component:UserListComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:NotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
