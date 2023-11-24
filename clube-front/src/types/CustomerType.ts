export type CustomerType = {
    _id?: string,
    name: string,
    lastName: string,
    cpf: string,
    isClubMember?: boolean;
    address: {
        _id?: string,
        state: string,
        city: string,
        streetName: string,
        streetNumber: number,
        complement?: string,
        referencePoint?: string
        zipcode: string,
    }
}