import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';
import { BookingService } from './booking.service';

@Component({
  selector: 'ngx-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent {

  settings = {
    actions: false,
    hideSubHeader: true,
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      bookingTo: {
        title: 'Booking',
        type: 'string',
      },
      dateRange: {
        title: 'Start Date - End Date',
        type: 'Date'
      },
      payment: {
        title: 'Payment',
        type: 'string'
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private bookingService: BookingService) {
    // const data = this.service.getData();
    this.bookingService.getBookings().subscribe( data => {
      console.log(data);
      this.source.load(data);
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onRowSelect(event: any) {
    // Get the selected row data and access the ID property
    const id = event.data.id;
    // Logic for handling the selected row's ID
    console.log(id)
  }

}
