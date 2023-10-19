import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // Default route, redirect to /books
  { path: 'books', component: BookListComponent }, // List of books
  { path: 'books/:id', component: BookDetailComponent }, // Book details by ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
