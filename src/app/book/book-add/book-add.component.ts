import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/_models/book';
import { BookService } from 'src/app/services/book-service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})

export class BookAddComponent{
  newBook:Book=new Book(0,0,"",1);
  constructor(public bkService:BookService,public router:Router){}
  Add()
  {
   this.bkService.Add(this.newBook).subscribe(data=>{
    this.router.navigateByUrl("/book");
   })
  }
}
