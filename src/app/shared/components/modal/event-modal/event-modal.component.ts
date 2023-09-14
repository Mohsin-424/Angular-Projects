import { Component, Input, OnInit } from '@angular/core';
import { a } from '@fullcalendar/core/internal-common';
import { NbDialogRef } from '@nebular/theme';
import { BookingService } from '../../../../@core/services/booking.service';
import { booking, Booking } from '../../../models/booking';

@Component({
  selector: 'ngx-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.scss']
})
export class EventModalComponent implements OnInit {

  @Input() startDate: Date;
  public datesSelected: boolean = false;
  public bookingAvailable: boolean = false;
  public showAlert: boolean = false;
  public vansAvailable: any[];

  booking: Booking = booking;

  constructor(protected ref: NbDialogRef<EventModalComponent>, private bookingService: BookingService ) { }

  ngOnInit(): void {
    this.booking.startDate = this.startDate;
  }

  close(){
    this.ref.close();
  }

  onDateSelect(){
    this.datesSelected = true;
    // this.bookingAvailable = !this.bookingService.bookingExists(this.booking.startDate, this.booking.endDate);
    this.vansAvailable =  this.bookingService.bookingExists(this.booking.startDate, this.booking.endDate);

    this.showAlert = true;
    
  }
  
  submit(){
    this.ref.close(this.booking)
  }

}
