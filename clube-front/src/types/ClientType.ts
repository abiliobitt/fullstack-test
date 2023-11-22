export type ClientAddress = {
    id: string,
    city: string,
    zipcode: string,
    state: string,
    streetName: string,
    streetNumber: number,
    complement: string,
    referencePoint: string
}

export type ClientType = {
    id: string,
    name: string,
    lastName: string,
    cpf: string,
    address: ClientAddress[];
    isClubMember?: boolean;
}

export type ClientCreationType = {
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