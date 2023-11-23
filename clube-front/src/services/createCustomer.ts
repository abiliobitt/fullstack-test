import axios from "axios";
import { CustomerCreationType } from "../types/CustomerType";

export const createCustomer = async (customer: CustomerCreationType) => {
  const data = await axios.post('http://localhost:3000/customers/', customer)
    .then(response => response.data)
    .catch(error => error);
  return data;
};