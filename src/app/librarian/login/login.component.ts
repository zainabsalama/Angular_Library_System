import { Component } from '@angular/core';
import { Librarian } from 'src/app/_models/librarian';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 

model=new Librarian(1,"mazen",1234)

submitted = false;

onSubmit() { this.submitted = true; }
homePage()
{
  
}
newLibrarian() {
  this.model = new Librarian(0,"",0)
}
}
