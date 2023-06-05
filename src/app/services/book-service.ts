import { Injectable } from "@angular/core";
import { Book } from "../_models/book";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl:string="https://localhost:7171/api/Book/";
  GetAll()
  {
    return this.http.get<Book[]>(this.baseurl)
  }
  Add(book:Book)
  {
     return this.http.post<Book>(this.baseurl,book)
  }
  DeleteById(id:number)
  {
    return this.http.delete(this.baseurl+id)
  }
  ShowById(id:number)
  {
   return this.http.get<Book>(this.baseurl+id)
  }
  
  
constructor(public http:HttpClient) { }
}
