import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../env';
@Injectable()
export class ProductsService {
  apiUrl = environment.apiUrl + 'products.json';
  apiUrl2 = environment.apiUrl2;
  constructor(private readonly http: HttpClient) {}
  getProducts() {
    return this.http.get(this.apiUrl);
  }
  getProducts2() {
    return this.http.get(this.apiUrl2);
  }
}
