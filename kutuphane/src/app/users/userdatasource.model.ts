import { Observable, of } from 'rxjs';
import { User } from 'src/app/users/user.model';


export const Users:User[] = [
  new User(1,"mehmet","123456","Mehmet","Çınar",1),
  new User(2,"ali","123456","Ali Emre","Kürekçi",2),
  new User(3,"samet","123456","Samet","Şekerci",3),
  new User(4,"test","test","test","test",null)
];

export const ActiveUser:User=new User(0,"Misafir","","","",0);




