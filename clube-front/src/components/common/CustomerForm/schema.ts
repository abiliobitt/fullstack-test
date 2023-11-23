import * as yup from "yup";

const createUserSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    lastName: yup.string().required("Address is a required field"),
    cpf: yup.string().required("Address is a required field"),
    isClubMember: yup.bool(),
    address: yup.object().shape({
      state: yup.string().required("State is a required field"),
      city: yup.string().required("City is a required field"),
      streetName: yup.string().required("City is a required field"),
      streetNumber: yup.number().required("City is a required field"),
      complement: yup.string(),
      referencePoint: yup.string(),
      zipcode: yup
      .string()
      .required("Zipcode is a required field")
      .matches(/^\d{5}(?:[-\s]\d{3})?$/, "Invalid zipcode format"),
    }),
  });

export default createUserSchema;