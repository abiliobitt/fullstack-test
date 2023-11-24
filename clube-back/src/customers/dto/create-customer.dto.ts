import { CustomerAddress } from "../entities/customer.entity";

export class CreateCustomerDto {
    readonly  name: string;
    readonly  lastName: string;
    readonly  cpf: string;
    readonly  address: CustomerAddress;
    readonly  isClubMember?: boolean;
}
