
export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
}

export interface BarberInfo {
  name: string;
  bio: string;
  whatsapp: string;
  address: string;
}

export interface Booking {
  id: string;
  customerName: string;
  serviceId: string;
  dateTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
