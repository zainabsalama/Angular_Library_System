import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowBook } from '../_models/borrow-book';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BorrowServiceModule { 
  baseurl:string="https://localhost:7171/api/Borrow/";
  GetAll()
  {
    return this.http.get<BorrowBook[]>(this.baseurl)
  }
  Add(bookedBorrow:BorrowBook)
  {
     return this.http.post<BorrowBook>(this.baseurl,bookedBorrow)
  }
  DeleteById(id:number)
  {
    return this.http.delete(this.baseurl+id)
  }
  Retreive(id:number)
  {
    return this.http.get<BorrowBook>(`${this.baseurl}Close/${id}`)
  }
  ShowById(id:number)
  {
   return this.http.get<BorrowBook>(this.baseurl+id)
  }
  
  
constructor(public http:HttpClient) { }
}
