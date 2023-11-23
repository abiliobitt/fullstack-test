export type CustomerAddress = {
    id: string,
    city: string,
    zipcode: string,
    state: string,
    streetName: string,
    streetNumber: number,
    complement: string,
    referencePoint: string
}

export type CustomerType = {
    id: string,
    name: string,
    lastName: string,
    cpf: string,
    address: CustomerAddress[];
    isClubMember?: boolean;
}

export type CustomerCreationType = {
    name: string,
    lastName: string,
    cpf: string,
    isClubMember?: boolean;
    address: {
        state: string,
        city: string,
        streetName: string,
        streetNumber: number,
        complement?: string,
        referencePoint?: string
        zipcode: string,
    }
}