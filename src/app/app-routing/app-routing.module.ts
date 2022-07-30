import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { RegFormComponent } from '../reg-form/reg-form.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  { path: 'register', component: RegFormComponent },
  { path: 'products', component: ProductsComponent },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
