import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from './book.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forChild(routes)
  ]
})
export class AppBookModule {
}
