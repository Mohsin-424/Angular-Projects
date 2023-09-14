import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../models/booking';

@Component({
  selector: 'ngx-booking-modal',
  templateUrl: './booking-modal.component.html',
  styleUrls: ['./booking-modal.component.scss']
})
export class BookingModalComponent implements OnInit {
  @Input() booking: Booking;

  constructor() { }

  ngOnInit(): void {
    console.log(this.booking)
  }

}
