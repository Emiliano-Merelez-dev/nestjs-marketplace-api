export interface PayPalOrderStatusResponse {
  id: string;
  status: string;
  purchase_units?: {
    invoice_id?: string;
    custom_id?: string;
    amount: {
      value: string;
    };
  }[];
  invoice_id?: string;
  custom_id?: string;
  amount?: {
    value: string;
  };
  name?: string;
  message?: string;
}
