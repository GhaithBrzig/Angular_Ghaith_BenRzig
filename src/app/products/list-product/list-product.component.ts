import { Product } from '../../core/model/product';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StatsService} from "../../core/services/stats.service";
import {ProductService} from "../../core/services/product.service";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[];
  public all:Product[];
  public priceMax:number;
  public category: String;
  public stock: number;
  constructor(private route:ActivatedRoute, private statService:StatsService, private productService:ProductService) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    this.category=this.route.snapshot.params['category']
    this.all = this.productService.list
    this.route.params.subscribe(
      (params) =>{
        this.category = params['category']
        if (this.category!=null) {
          this.list = this.all.filter((product) =>product.category==this.category)
        } else {
          this.list= this.all
        }
      }
    )
  }


  incrementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrlike++
      //cnx to  backend side
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //cnx to  backend side
    }}

  outOfStock() {
  this.stock = this.statService.getCount(this.all,"quantity",0)
  }

}
