import { Component, OnInit } from '@angular/core';

interface Booking{
  cnic: string;
  phoneNo: string;
  vanType: string;
  departureAddress: string;
  destinationAddress: string;
  passangers: number;
  startDateTime: Date;
  endDateTime: string;
}

@Component({
  selector: 'ngx-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = {
    cnic: null, 
    phoneNo: null, 
    vanType: null, 
    passangers: null, 
    departureAddress: null, 
    destinationAddress: null,
    startDateTime: null,
    endDateTime: null,
  };
  paymentMethod: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.booking);
  }
  submit(){
    console.log(this.booking);
    
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
