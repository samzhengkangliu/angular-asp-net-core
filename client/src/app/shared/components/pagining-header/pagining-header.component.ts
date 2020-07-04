import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagining-header',
  templateUrl: './pagining-header.component.html',
  styleUrls: ['./pagining-header.component.scss']
})
export class PaginingHeaderComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
