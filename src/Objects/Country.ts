
export default class Country {
    private _id: number;
    private _country: string;

    constructor(name: string,id:number) {
        this._country = name;
        this._id=id;
    }


    get country(): string {
        return this._country;
    }

    set country(value: string) {
        this._country = value;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
}