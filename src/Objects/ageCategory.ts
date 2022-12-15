export default class AgeCategory {
    private _id:number
    private _name:string
    private _oldestCompetitorBirthYear:Date
    private _regin:{region:String}
    private _youngestCompetitorBirthYear:Date


    constructor(id: number, name: string, oldestCompetitorBirthYear: Date, regin: { region: String }, youngestCompetitorBirthYear: Date) {
        this._id = id;
        this._name = name;
        this._oldestCompetitorBirthYear = oldestCompetitorBirthYear;
        this._regin = regin;
        this._youngestCompetitorBirthYear = youngestCompetitorBirthYear;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get oldestCompetitorBirthYear(): Date {
        return this._oldestCompetitorBirthYear;
    }

    set oldestCompetitorBirthYear(value: Date) {
        this._oldestCompetitorBirthYear = value;
    }

    get regin(): { region: String } {
        return this._regin;
    }

    set regin(value: { region: String }) {
        this._regin = value;
    }

    get youngestCompetitorBirthYear(): Date {
        return this._youngestCompetitorBirthYear;
    }

    set youngestCompetitorBirthYear(value: Date) {
        this._youngestCompetitorBirthYear = value;
    }
}
