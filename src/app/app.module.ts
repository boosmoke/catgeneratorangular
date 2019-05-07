import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CatGenComponent } from './components/catGen/catGen.component';
import { CatItemComponent } from './components/cat-item/cat-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddCatComponent } from './components/add-cat/add-cat.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CatGenComponent,
    CatItemComponent,
    HeaderComponent,
    AddCatComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
