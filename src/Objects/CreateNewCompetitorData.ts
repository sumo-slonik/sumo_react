import PersonalDetails from "./PersonalDetails";
import Category from "./Category";

export default class CreateNewCompetitorData {

    private _names: string;
    private _surname: string;
    private _gender: string;
    private _bornDate: Date;
    private _club: string;


    constructor(names: string, surname: string, gender: string, bornDate: Date, club: string) {
        this._names = names;
        this._surname = surname;
        this._gender = gender;
        this._bornDate = bornDate;
        this._club = club;
    }


    get names(): string {
        return this._names;
    }

    set names(value: string) {
        this._names = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get bornDate(): Date {
        return this._bornDate;
    }

    set bornDate(value: Date) {
        this._bornDate = value;
    }

    get club(): string {
        return this._club;
    }

    set club(value: string) {
        this._club = value;
    }
}