import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './bookings/create-booking/create-booking.component';
import { AllBookingsComponent } from './bookings/all-bookings/all-bookings.component';
import { SliderComponent } from '../shared/components/slider/slider.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'booking-list',
      component: BookingsComponent,
    },
    {
      path: 'create-booking',
      component: CreateBookingComponent,
    },
    {
      path: 'all-bookings',
      component: AllBookingsComponent,
    },
    { path: 'slider', component: SliderComponent}
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
