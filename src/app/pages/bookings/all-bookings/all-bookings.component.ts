import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NbDialogService } from '@nebular/theme';
import { BookingService } from '../../../@core/services/booking.service';
import { BookingModalComponent } from '../../../shared/components/modal/booking-modal/booking-modal.component';
import { EventModalComponent } from '../../../shared/components/modal/event-modal/event-modal.component';
import { booking, Booking } from '../../../shared/models/booking';
import { CreateBookingComponent } from '../create-booking/create-booking.component';

@Component({
  selector: 'ngx-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.scss']
})
export class AllBookingsComponent implements OnInit {
  booking: Booking= booking;

  constructor(private dialogService: NbDialogService, private bookingService: BookingService) { }

  ngOnInit(): void {
    console.log('all-bookings')
  }
  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    displayEventTime: false,
    selectable: true,
    dateClick: (event: any) => {
      console.log(event.date)
      this.dialogService.open(EventModalComponent, {
        context: { startDate: event.date}
      }).onClose.subscribe( (result: Booking) => {
        this.createBooking(result)
      })
    },
    events: this.bookingService.allBookings(),
  };

  createBooking(booking: Booking) {
    if(this.booking){
      this.dialogService.open(BookingModalComponent, {
        context: { booking: booking},
        dialogClass: 'custom-dialog',
      })
    }
  }

}
