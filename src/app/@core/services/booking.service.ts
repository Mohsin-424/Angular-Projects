import { Injectable } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { backgroundColors, Booking } from '../../shared/models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }
  events: any[] = [];
  bookings = [
    {
      title: 'V1',
      start: '2023-04-24T00:00:00',
      end: '2023-04-26T00:00:00',
      extendedProps: {
        status: 'in-progress',
        vanId: 1,
      },
      backgroundColor: '#E0AA45',
    },

    {
      title: 'V2',
      start: '2023-04-24T00:00:00',
      end: '2023-04-27T00:00:00',
      extendedProps: {
        status: 'verified',
        vanId: 2
      },
      backgroundColor: '#C92F55',
    },
    {
      title: 'V3',
      start: '2023-04-25T00:00:00',
      end: '2023-04-28T00:00:00',
      extendedProps: {
        status: '',
        vanId: 3,
      },
      // backgroundColor: '#dc4dff',
    },
  ]
  allBookings(){
    if(localStorage.getItem('all-bookings')) {
      console.log(JSON.parse(localStorage.getItem('all-bookings')));
      
      const data: any[] = JSON.parse(localStorage.getItem('all-bookings'));
    
      // casting events out of bookings data
      console.log(data)
      data.forEach((item: Booking) => {
        const event = {
          title: item.title,
          start: item.startDate,
          end: item.endDate,
          extendedProps: {
            status: item.status,
            vanId: item.vanId
          },
          backgroundColor: backgroundColors[item.status],
        }
        this.events.push(event);
      })
      console.log(data)
    }
    return this.events;
  }

  bookingExists(startDate: Date, endDate: Date){
    const vansAvailable: any[] = [1,2,3];
    const overlaps = this.bookings.some(booking => {
      if (endDate <= new Date(booking.start) || startDate >= new Date(booking.end)) {
        // return false;
      }
      else {
        if (vansAvailable.includes(booking.extendedProps.vanId)) {
          vansAvailable.splice(vansAvailable.indexOf(booking.extendedProps.vanId), 1);
         }
        
      }
      // return true;
    });
    return vansAvailable
    //return overlaps;

  }
  setColor(status: string) {
    
  }
}
