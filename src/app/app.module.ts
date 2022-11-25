import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { ViewPostsComponent } from './view-posts/view-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    ViewPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
