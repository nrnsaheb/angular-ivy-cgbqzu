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
// import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { RegFormComponent } from './reg-form/reg-form.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from './env';
import { SearchPipe } from './search.pipe';
import { AngularFirestore } from '@angular/fire/compat/firestore/firestore';
import { FirestoreModule } from '@angular/fire/firestore/public_api';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    // PaginationModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    RegFormComponent,
    LoginComponent,
    SearchPipe,
  ],
  bootstrap: [AppComponent],
  providers: [ProductsService, AuthGuardGuard],
})
export class AppModule {}
