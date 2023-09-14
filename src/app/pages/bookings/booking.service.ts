import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Booking{
  id: number
  bookingTo: string;
  dateRange: string;
  payment: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  data = [
    {id: 1,bookingTo: 'Sahiwal', dateRange: 'Apr 12, 2023 08:00am - Apr 28, 2023 08:00pm', payment: 'PAID', status: 'PENDING'},
    {id: 2,bookingTo: 'Nankana', dateRange: 'Apr 12, 2023 09:00am - Apr 28, 2023 09:00pm', payment: 'VERIFIED', status: 'COMPLETE'}
  ]
  getBookings(): Observable<Booking[]>{
    return of(this.data)
  }

  constructor() { }
}
