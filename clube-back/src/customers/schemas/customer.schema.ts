import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
class CustomerAddress {
  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  zipcode: string;
  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  streetName: string;

  @Prop({ required: true })
  streetNumber: number;

  @Prop({ required: true })
  complement: string;
  
  @Prop({ required: true })
  referencePoint: string;
}
const CustomerAddressSchema = SchemaFactory.createForClass(CustomerAddress);

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  cpf: string;

  @Prop({ type: CustomerAddressSchema, required: true })
  address: CustomerAddress;

  @Prop()
  isClubMember?: boolean;
}



export const CustomerSchema = SchemaFactory.createForClass(Customer);