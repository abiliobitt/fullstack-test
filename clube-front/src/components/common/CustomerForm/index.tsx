import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Alert, FormControlLabel, Checkbox, Button } from '@mui/material/';

import createUserSchema from "./schema";

import "./style.scss"
import { CustomerCreationType, CustomerType } from "../../../types/CustomerType";
import { createCustomer } from "../../../services/createCustomer";
import { useState } from "react";
import { updateCustomer } from "../../../services/updateCustomer";

type CustomerFormProps = {
  customerData?: CustomerCreationType | null;
  isCustomerUpdate?: boolean;
}

const CustomerForm = ({ customerData, isCustomerUpdate }: CustomerFormProps) => {
  const isEdit = () => {
    if (customerData) {
      return customerData
    } else {
      return {
        name: undefined,
        lastName: undefined,
        cpf: undefined,
        isClubMember: false,
        address: {
          state: undefined,
          city: undefined,
          streetName: undefined,
          streetNumber: undefined,
          complement: undefined,
          referencePoint: undefined,
        zipcode: undefined,
        }
      }
    }
  }
  const [created, setCreated] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerCreationType>({ resolver: yupResolver(createUserSchema), defaultValues: isEdit() });

  const handleCreateCustomer = (data: CustomerCreationType) => {
    createCustomer(data)
    .then(response => setCreated(true))
  }
  
  const handleUpdateCustomer = (data: CustomerType) => {
    updateCustomer(data)
    .then(response => setCreated(true))
  }
  const onSubmit = (data: CustomerCreationType|CustomerType) => {
    if (!isCustomerUpdate) {
      handleCreateCustomer(data as CustomerCreationType)
    }
    if(isCustomerUpdate) {
      handleUpdateCustomer(data as CustomerType)
    }
  };

  return (
    <>
      {console.log(errors)}
      {
        created ?
          <h1>Cliente criado</h1> :
          <form className="create-user-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              fullWidth
              id="name"
              label="Nome"
              variant="outlined"
              {...register("name")}
              name="name"
            />
            {errors.name && <Alert severity="error">{errors.name.message}</Alert>}

            <TextField
              fullWidth
              id="lastName"
              label="Sobrenome"
              variant="outlined"
              {...register("lastName")}
              name="lastName"
            />
            {errors.lastName && <Alert severity="error">{errors.lastName.message}</Alert>}

            <TextField
              fullWidth
              id="cpf"
              label="CPF"
              variant="outlined"
              {...register("cpf")}
              name="cpf"
            />
            {errors.cpf && <Alert severity="error">{errors.cpf.message}</Alert>}

            <Alert severity="info" icon={false}>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    {...register("isClubMember")}
                    name="isClubMember"
                  />
                }
                label="Deseja fazer parte do clube?"
              />
            </Alert>

            <TextField
              fullWidth
              id="address.state"
              label="Estado"
              variant="outlined"
              {...register("address.state")}
              name="address.state"
            />
            {errors.address?.state && <Alert severity="error">{errors.address?.state.message}</Alert>}

            <TextField
              fullWidth
              id="address.city"
              label="Cidade"
              variant="outlined"
              {...register("address.city")}
              name="address.city"
            />
            {errors.address?.city && <Alert severity="error">{errors.address?.city.message}</Alert>}

            <TextField
              fullWidth
              id="address.streetName"
              label="Endereço"
              variant="outlined"
              {...register("address.streetName")}
              name="address.streetName"
            />
            {errors.address?.streetName && <Alert severity="error">{errors.address?.streetName.message}</Alert>}

            <TextField
              fullWidth
              id="address.streetNumber"
              label="Número"
              variant="outlined"
              {...register("address.streetNumber")}
              name="address.streetNumber"
            />
            {errors.address?.streetNumber && <Alert severity="error">{errors.address?.streetNumber.message}</Alert>}

            <TextField
              fullWidth
              id="address.complement"
              label="Complemento"
              variant="outlined"
              {...register("address.complement")}
              name="address.complement"
            />
            {errors.address?.complement && <Alert severity="error">{errors.address?.complement.message}</Alert>}

            <TextField
              fullWidth
              id="address.referencePoint"
              label="Ponto de referência"
              variant="outlined"
              {...register("address.referencePoint")}
              name="address.referencePoint"
            />
            {errors.address?.referencePoint && <Alert severity="error">{errors.address?.referencePoint.message}</Alert>}

            <TextField
              fullWidth
              id="address.zipcode"
              label="CEP"
              variant="outlined"
              {...register("address.zipcode")}
              name="address.zipcode"
            />
            {errors.address?.zipcode && <Alert severity="error">{errors.address?.zipcode.message}</Alert>}
            <Button variant="contained" color="success" type="submit" className="full-width">
              Enviar
            </Button>
          </form>
      }
    </>
  );
};

export default CustomerForm;