import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private readonly service: ProductsService,
    private cdr: ChangeDetectorRef
  ) {}
  title: string = 'This is the product section';
  products: Array<any> = [];
  products2: any = [];

  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  // textValue: Event;
  ngOnInit() {
    this.service.getProducts().subscribe(
      (res: any) => {
        // console.log(res);
        this.products = res;
        console.log(this.products);
      },
      (err) => {
        console.log(err + 'this is err');
      }
    );
    this.service.getProducts2().subscribe(
      (res2: any) => {
        // console.log(res2.data);
        this.products2 = res2.data;
        // res2.data.forEach((element) => {
        //   // console.log(element);
        //   // this.products.unshift(element);
        // });
        // console.log(this.products);
        this.products.concat(this.products2);
        console.log(this.products);

        this.cdr.detectChanges();
      },
      (err) => {
        console.log(err + 'this is err');
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    // this.fetchPosts();
  }
}
