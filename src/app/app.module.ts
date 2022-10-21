import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 

import { FrameComponent } from './components/frame/frame.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { PostsComponent } from './containers/posts/posts.component';
import { WidgetsComponent } from './containers/widgets/widgets.component';
import { CommonComponent } from './components/common/common.component';
import { WidgetListComponent } from './containers/widget-list/widget-list.component';


const UI_Modules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

const UI_Components = [
  AppComponent,
  FrameComponent,
  SidenavComponent
]

const UI_Containers = [
  DashboardComponent,
  PostsComponent,
  WidgetsComponent
]

@NgModule({
  declarations: [
    UI_Components,
    UI_Containers,
    CommonComponent,
    WidgetListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    UI_Modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
