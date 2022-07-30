import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    PaginationModule,
    NgxPaginationModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    RegFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ProductsService],
})
export class AppModule {}
