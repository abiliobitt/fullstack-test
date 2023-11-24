export class Customer {
    name: string;
    lastName: string;
    cpf: string;
    address: CustomerAddress;
    isClubMember?: boolean;
}

export interface CustomerAddress {
    _id?: string;
    city: string;
    zipcode: string;
    state: string;
    streetName: string;
    streetNumber: number;
    complement: string;
    referencePoint: string;
}