import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth-guard.service';
import { AdminComponent } from './admin.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EdituserComponent } from './edituser/edituser.component';
import { MainComponent } from './main/main.component';




const routes: Routes = [
  {
    path:'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [{
      path:'',
      children: [
        {path:'main', component: MainComponent},
        {path:'edit/:id', component: EditBookComponent},
        {path:'edituser/:id', component: EdituserComponent}
      ]
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
