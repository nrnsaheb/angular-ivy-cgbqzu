import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { RegFormComponent } from '../reg-form/reg-form.component';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuardGuard } from '../auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegFormComponent },
  {path: 'products',component: ProductsComponent,canActivate: [AuthGuardGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
]; // sets up routes constant where you define your routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
