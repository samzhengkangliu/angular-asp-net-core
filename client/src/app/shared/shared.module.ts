import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PaginingHeaderComponent } from './components/pagining-header/pagining-header.component';
import { PagerComponent } from './components/pager/pager.component';

@NgModule({
  declarations: [PaginingHeaderComponent, PagerComponent],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [PaginationModule, PaginingHeaderComponent, PagerComponent],
})
export class SharedModule {}
