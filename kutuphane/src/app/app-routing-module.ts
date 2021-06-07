import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { BookdetailComponent } from "./bookdetail/bookdetail.component";
import { BooklistComponent } from "./booklist/booklist.component";
import { LoginComponent } from "./login/login.component";
import { NotfoundComponent } from "./notfound/notfound.component";

const appRoutes: Routes = [

  { path: '', component: BookComponent },
  { path: 'home', component: BookComponent },
  {path: 'login', component:LoginComponent},
  { path:'booklist', component: BooklistComponent },
  { path: 'booklist/:id', component: BookdetailComponent },
  { path: '**', component: NotfoundComponent },
];




@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
