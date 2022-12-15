export default class Sex {
    private _sex: string;


    constructor(sex: string) {
        this._sex = sex;
    }

    get sex(): string {
        return this._sex;
    }

    set sex(value: string) {
        this._sex = value;
    }
}
