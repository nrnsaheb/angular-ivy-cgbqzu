import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private readonly service: ProductsService) {}
  title: string = 'This is the product section';
  products: any;
  // textValue: Event;
  ngOnInit() {
    this.service.getProducts().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        console.log(err + 'this is err');
      }
    );
  }
}
