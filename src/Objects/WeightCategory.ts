import AgeCategory from "./ageCategory";
import Sex from "./Sex";

export default class WeightCategory {
    private _id: number;
    private _ageCategory: AgeCategory;
    private _weightCategory: string;
    private _sex: Sex

    constructor(id: number, ageCategory: AgeCategory, weightCategory: string, sex: Sex) {
        this._id = id;
        this._ageCategory = ageCategory;
        this._weightCategory = weightCategory;
        this._sex = sex;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get ageCategory(): AgeCategory {
        return this._ageCategory;
    }

    set ageCategory(value: AgeCategory) {
        this._ageCategory = value;
    }

    get weightCategory(): string {
        return this._weightCategory;
    }

    set weightCategory(value: string) {
        this._weightCategory = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }
}
