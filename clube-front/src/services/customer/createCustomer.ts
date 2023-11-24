import axios from "axios";
import { CustomerType } from "../../types/CustomerType";

export const createCustomer = async (customer: CustomerType) => {
  const data = await axios.post('http://localhost:3000/customers/', customer)
    .then(response => response.data)
    .catch(error => error);
  return data;
};