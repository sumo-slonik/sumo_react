import Category from "./Category";
import PersonalDetails from "./PersonalDetails";

export default class Fight {
    get round(): string {
        return this._round;
    }

    set round(value: string) {
        this._round = value;
    }
    private _personalDetailsI: PersonalDetails;
    private _personalDetailsII: PersonalDetails;
    private _category: Category;
    private _round: string
    private _firstWin: boolean;


    constructor(personalDetailsI: PersonalDetails, personalDetailsII: PersonalDetails, category: Category, firstWin: boolean,round:string) {
        this._personalDetailsI = personalDetailsI;
        this._personalDetailsII = personalDetailsII;
        this._category = category;
        this._firstWin = firstWin;
        this._round = round;
    }


    get personalDetailsI(): PersonalDetails {
        return this._personalDetailsI;
    }

    set personalDetailsI(value: PersonalDetails) {
        this._personalDetailsI = value;
    }

    get personalDetailsII(): PersonalDetails {
        return this._personalDetailsII;
    }

    set personalDetailsII(value: PersonalDetails) {
        this._personalDetailsII = value;
    }

    get category(): Category {
        return this._category;
    }

    set category(value: Category) {
        this._category = value;
    }

    get firstWin(): boolean {
        return this._firstWin;
    }

    set firstWin(value: boolean) {
        this._firstWin = value;
    }
}
