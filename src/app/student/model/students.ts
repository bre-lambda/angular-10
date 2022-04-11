export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  address?: Address;
}
export interface Address {
  country: string;
  city: string;
  zipCode: string;
}
