import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserListComponent } from './users/user-list/user-list.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import {RouterModule, Routes} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';


/*.In our AppModule, we then need to specify the component that will serve as the entry point component for our application.
In our app.module.ts file where we import the entry component (conventionally AppComponent) and supply it as the only item
in our bootstrap array inside the NgModule configuration object. eg. bootstrap[AppComponent]*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
