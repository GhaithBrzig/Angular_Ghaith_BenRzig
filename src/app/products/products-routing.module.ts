import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import {ListProductComponent} from "./list-product/list-product.component";
import {FormProductComponent} from "./form-product/form-product.component";
import {AdminProductComponent} from "./admin-product/admin-product.component";

const routes: Routes = [
  { path: '', component: ProductsComponent, children: [
      { path: '', component: ListProductComponent },
      { path: 'list', redirectTo:'', pathMatch:"full"},
      { path: 'new', component: FormProductComponent },
      { path: 'category/:category', component: ListProductComponent },
      { path: 'outofstock', component: AdminProductComponent },
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
