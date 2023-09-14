import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../models/booking';

@Component({
  selector: 'ngx-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {

  @Input() booking: Booking;
  paymentMethod: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.booking);
  }
  submit(){
    console.log(this.booking);
    if(localStorage.getItem('all-bookings')){
      const bookings: any[] = JSON.parse(localStorage.getItem('all-bookings'));
      this.booking.id = bookings.length + 1;
      this.booking.status = 'booked';
      this.booking.title = 'Activity Booking'
      bookings.push(this.booking)
      localStorage.removeItem('all-bookings');
      localStorage.setItem('all-bookings', JSON.stringify(bookings))
    } else {
      const id = 1;
      this.booking.id = id;
      this.booking.status = 'booked';
      this.booking.title = 'Activity Booking'
      localStorage.setItem('all-bookings', JSON.stringify([this.booking]))
    }
  }

  selectedFile: File;
  imagePreviewUrl: string;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.showImagePreview();
  }

  showImagePreview() {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagePreviewUrl = event.target.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  onSubmit() {
    if(localStorage.getItem('all-bookings')){
      const bookings = JSON.parse(localStorage.getItem('all-bookings'));
      bookings[this.booking.id-1].status = 'completed';
      console.log(bookings)
      localStorage.removeItem('all-bookings');
      localStorage.setItem('all-bookings', JSON.stringify(bookings))
    }

    this.booking.status = 'completed'
    if (this.selectedFile) {
      // Perform file upload logic here
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      // You can make an HTTP request to upload the file using a service
      // For example, using Angular's HttpClient:
      // this.http.post('http://example.com/upload', formData).subscribe(
      //   response => {
      //     console.log('File uploaded successfully!', response);
      //   },
      //   error => {
      //     console.error('File upload failed:', error);
      //   }
      // );
    } else {
      // Handle case where no file is selected
      console.error('No file selected.');
   
    }
  }

}
