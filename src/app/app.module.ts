import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compontent/header/header.component';
import { AdminComponent } from './compontent/admin/admin.component';
import { UserComponent } from './compontent/user/user.component';
import { HomeComponent } from './compontent/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
 HeaderComponent,
 AdminComponent,
 UserComponent,
 HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
