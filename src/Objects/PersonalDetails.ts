export default class PersonalDetails {
    private _names: string | null;
    private _surname: string | null;
    private _phoneNumber: string | null;
    private _emailAddress: string | null;
    private _profilePhoto: string | null;
    private _birthDate: string | null;
    private _gender: string | null;
    private _id: number | null;

    constructor(names: string | null, surname: string | null, phoneNumber: string | null, emailAdress: string | null, profilePhoto: string | null, birthDate: string | null, gender: string | null, id: number | null) {
        this._id = id;
        this._names = names;
        this._surname = surname;
        this._phoneNumber = phoneNumber;
        this._emailAddress = emailAdress;
        this._profilePhoto = profilePhoto;
        this._birthDate = birthDate;
        this._gender = gender;
    }


    get names(): string | null {
        return this._names;
    }

    set names(value: string | null) {
        this._names = value;
    }

    get surname(): string | null {
        return this._surname;
    }

    set surname(value: string | null) {
        this._surname = value;
    }

    get phoneNumber(): string | null {
        return this._phoneNumber;
    }

    set phoneNumber(value: string | null) {
        this._phoneNumber = value;
    }

    get emailAddress(): string | null {
        return this._emailAddress;
    }

    set emailAddress(value: string | null) {
        this._emailAddress = value;
    }

    get profilePhoto(): string | null {
        return this._profilePhoto;
    }

    set profilePhoto(value: string | null) {
        this._profilePhoto = value;
    }

    get birthDate(): string | null {
        return this._birthDate;
    }

    set birthDate(value: string | null) {
        this._birthDate = value;
    }

    get gender(): string | null {
        return this._gender;
    }

    set gender(value: string | null) {
        this._gender = value;
    }

    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }
}
