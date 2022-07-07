export default class Category {
    private _category: string;
    private _ageCategory: string;

    constructor(category: string, ageCategory: string) {
        this._category = category;
        this._ageCategory = ageCategory;
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
}
