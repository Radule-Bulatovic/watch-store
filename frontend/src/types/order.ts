export interface OrderT {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  city: string;
  street: string;
  aptNumber: string;
  itemQuantity: ItemQuantity[];
}

export interface ItemQuantity {
  watch: number;
  quantity: number;
}
