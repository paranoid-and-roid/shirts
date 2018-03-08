import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;

  constructor(service: ProductsService) {
    this.products = service.getProducts();
   }

  ngOnInit() {
  }

}
