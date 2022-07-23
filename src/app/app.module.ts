import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SharedModule } from './shared/shared.module';
import { ProductsService } from './services/products.service';
import { ProductsComponent } from './products/products.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, ProductsComponent],
  bootstrap: [AppComponent],
  providers: [ProductsService],
})
export class AppModule {}
