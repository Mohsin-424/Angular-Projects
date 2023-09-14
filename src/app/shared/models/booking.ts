export class Booking {
    id: number;
    title: string;
    cnic: string;
    phoneNo: string;
    vanId: number;
    passangers: number;
    departureAddress: string;
    destinationAddress: string;
    startDate: Date;
    endDate: Date; 
    status: string;
    backgroundColor: string;

}

export const booking = {
    id: null,
    title: null,
    cnic: null,
    phoneNo: null,
    vanId: null,
    passangers: null,
    departureAddress: null,
    destinationAddress: null,
    startDate: null,
    endDate: null,
    status: 'started',
    backgroundColor: null,
}

export const backgroundColors = {
    'started': '#3366ff',
    'booked': '#E0AA45' ,
    'completed':  '#C92F55',
}