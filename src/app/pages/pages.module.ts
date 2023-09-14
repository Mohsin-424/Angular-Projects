import { NgModule } from '@angular/core';
import { NbAlertModule, NbButtonModule, NbCalendarRangeModule, NbCardModule, NbDatepickerModule, NbDateTimePickerComponent, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbStepperModule, NbTimepickerModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { AuthModule } from './auth/auth.module';
import { BookingsComponent } from './bookings/bookings.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomCellComponent } from './bookings/custom-cell/custom-cell.component';
import { CreateBookingComponent } from './bookings/create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { AllBookingsComponent } from './bookings/all-bookings/all-bookings.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    FormsModule,
    NbLayoutModule,
    NbMenuModule,
    NbButtonModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbCalendarRangeModule,
    NbInputModule,
    NbIconModule,
    NbStepperModule,
    NbSelectModule,
    NbAlertModule,
    NbCardModule,
    Ng2SmartTableModule,
    MiscellaneousModule,
    FullCalendarModule,
    NbDialogModule.forRoot(),
  ],
  declarations: [
    PagesComponent,
    BookingsComponent,
    CustomCellComponent,
    CreateBookingComponent,
    AllBookingsComponent,
  ],
})
export class PagesModule {
}
