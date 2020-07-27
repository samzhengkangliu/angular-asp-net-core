import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginingHeaderComponent } from './components/pagining-header/pagining-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';

@NgModule({
  declarations: [PaginingHeaderComponent, PagerComponent, OrderTotalsComponent],
  imports: [CommonModule, PaginationModule.forRoot(), CarouselModule.forRoot()],
  exports: [
    PaginationModule,
    PaginingHeaderComponent,
    PagerComponent,
    CarouselModule,
    OrderTotalsComponent,
  ],
})
export class SharedModule {}
