import axios from "axios";
import { CustomerType } from "../../types/CustomerType";

export const getCustomers = (): Promise<CustomerType[]> => {
  const customers = axios
    .get('http://localhost:3000/customers/')
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('error', error)
    })
  return customers
}