export default interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
}

export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;

}

export interface IGeo {
    lat: string;
    lng: string;
}