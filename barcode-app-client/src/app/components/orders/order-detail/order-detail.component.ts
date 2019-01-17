import { Component, OnInit, Input } from '@angular/core';
import { OrderDetailModel } from 'src/app/models/OrderDetailModel';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html'
})
export class OrderDetailComponent implements OnInit {
  
  @Input() orderDetail: OrderDetailModel;
  constructor() { }

  ngOnInit() {
  }

}