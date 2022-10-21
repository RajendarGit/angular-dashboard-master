import { WidgetsComponent } from './containers/widgets/widgets.component';
import { PostsComponent } from './containers/posts/posts.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'widgets', component: WidgetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
