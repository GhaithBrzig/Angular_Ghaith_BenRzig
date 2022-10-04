import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list:Product[]
  public priceMax:number
  constructor() {
  }
  ngOnInit(): void {
    this.title = 'MyStore App'
    this.list = [
      {
        id: 15,
        name:'T-Shirt1',
        description: 'nice T-Shirt',
        price:1,
        nbrlike:2269,
        picture:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/divhtybtltxjtyhhq2i5/sportswear-club-t-shirt-X6GDTv.png',
        quantity:5
      },
      {
        id: 13,
        name:'T-Shirt2',
        description: 'nice T-Shirt',
        price:12,
        nbrlike:12,
        picture:'https://www.gutteridge.com/dw/image/v2/BDJZ_PRD/on/demandware.static/-/Sites-catalog-gutteridge-master/default/dwbbe28097/hi-res/TS14244GUY12_0120C_001.jpg?sw=1000&sh=1350&q=90&strip=false',
        quantity:0
      }
    ]
  }

  incrementLike(product:Product):void {
    let i = this.list.indexOf(product)
    if (i!=-1) {
      this.list[i].nbrlike++
    }
  }

  buyProduct(product:Product):void {
    let i = this.list.indexOf(product)
    if (i!=-1) {
      this.list[i].quantity--
    }
  }

}
