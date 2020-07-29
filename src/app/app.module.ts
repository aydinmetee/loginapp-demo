import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ButtonModule } from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { NavbarComponent } from './user/navbar/navbar.component';
import { CategoryComponent } from './user/category/category.component';
import { MainpageComponent } from './user/mainpage/mainpage.component';
import {TabMenuModule} from 'primeng/tabmenu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    NavbarComponent,
    CategoryComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
