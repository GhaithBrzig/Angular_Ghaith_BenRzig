import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {Product} from "../../core/model/product";

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
list: Product[]
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.list = this.productService.list.filter(product =>product.quantity==0)
  }
delete(p:Product) {
  let i = this.list.indexOf(p)
  this.list.splice(i,1);
}
}
