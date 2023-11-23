import axios from "axios";

export const getCustomers = async () => {
  const data = await axios.get('http://localhost:3000/customers/')
    .then(response => response.data)
    .catch(error => error);
  return data;
};