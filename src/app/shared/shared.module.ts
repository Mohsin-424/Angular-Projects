import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbAlertModule, NbButtonModule, NbCalendarRangeModule, NbCardModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbStepperModule, NbTimepickerModule } from '@nebular/theme';
import { AuthModule } from '../pages/auth/auth.module';
import { NewBookingComponent } from './components/new-booking/new-booking.component';
import { EventModalComponent } from './components/modal/event-modal/event-modal.component';
import { BookingModalComponent } from './components/modal/booking-modal/booking-modal.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
    declarations: [
    EventModalComponent,
    NewBookingComponent,
    BookingModalComponent,
    SliderComponent,

  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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

    // NbAlertModule,
    // DashboardModule,
    // ECommerceModule,
    // NbCardModule,
    // Ng2SmartTableModule,
    // MiscellaneousModule,
    // FullCalendarModule,
        NbDialogModule.forRoot(),
    ],
    exports: [],
})

export class SharedModule{}