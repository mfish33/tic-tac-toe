import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardServiceComponent } from './board-service/board-service.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'play', component:BoardServiceComponent },
  { path:'**', redirectTo:'' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
