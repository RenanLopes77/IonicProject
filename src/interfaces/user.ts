export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress;
    phone: string;
    website: string;
    company: company;
}

export class Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export class Geo {
    lat: number;
    lng: number;
}

export class company { 
    name: string;
    catchPhrase: string;
    bs: string;
}