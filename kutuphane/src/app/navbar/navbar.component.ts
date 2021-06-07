import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from '../users/user.model';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:User;



  constructor(private uS:UserService)
  {
    this.getActiveUser();
  }

  getActiveUser():void{
    this.uS.getActiveUser().subscribe(u => this.user=u);
  }

  ngOnInit(): void {
  }



}
