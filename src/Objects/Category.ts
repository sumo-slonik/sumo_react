export default class Category {
    private _category: string;
    private _ageCategory: string;
    private _gender: string;
    constructor(category: string, ageCategory: string, gender:string) {
        this._category = category;
        this._ageCategory = ageCategory;
        this._gender = gender;
    }

    get category(): string {
        return this._category;
    }

    set category(value: string) {
        this._category = value;
    }

    get ageCategory(): string {
        return this._ageCategory;
    }

    set ageCategory(value: string) {
        this._ageCategory = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }
}
