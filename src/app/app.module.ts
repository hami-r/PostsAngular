import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';

const myRoute:Routes = [
  {
    path:"",
    component: AddPostsComponent
  },
  {
    path:"view",
    component:ViewPostsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    ViewPostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
