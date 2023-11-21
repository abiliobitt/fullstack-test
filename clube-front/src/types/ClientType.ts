type ClientAddress = {
    id: string,
    city: string,
    postCode: string,
    streetName: string,
    streetNumber: number,
    complement: string,
    referencePoint: string
}

export type ClientType = {
    id: string,
    name: string,
    lastName: string,
    cpf: number,
    address: ClientAddress[];
    isClubMember: boolean;
}
