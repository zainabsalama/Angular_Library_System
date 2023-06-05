import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'book',
  loadChildren: () => import('./book/book.module').then(m => m.BookModule)
  },


];

@NgModule({
  declarations: [],
  imports: [
   CommonModule, RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
