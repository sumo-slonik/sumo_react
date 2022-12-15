import Country from "./Country";

export default class NationalTeam{
    private _id:number;
    private _country:Country;

    constructor(id: number, country: Country) {
        this._id = id;
        this._country = country;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get country(): Country {
        return this._country;
    }

    set country(value: Country) {
        this._country = value;
    }
}