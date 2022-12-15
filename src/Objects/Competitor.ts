import PersonalDetails from "./PersonalDetails";
import Club from "./Club";

export default class Competitor {
    private _personalDetails: PersonalDetails;
    private _actualClub: Club | null;
    private _id: BigInteger | null;

    constructor(personalDetails: PersonalDetails, actualClub: Club | null, id: BigInteger|null) {
        this._personalDetails = personalDetails;
        this._actualClub = actualClub;
        this._id = id;
    }

    get id(): BigInteger | null {
        return this._id;
    }

    set id(value: BigInteger | null) {
        this._id = value;
    }

    get personalDetails(): PersonalDetails {
        return this._personalDetails;
    }

    set personalDetails(value: PersonalDetails) {
        this._personalDetails = value;
    }

    get actualClub(): Club | null {
        return this._actualClub;
    }

    set actualClub(value: Club | null) {
        this._actualClub = value;
    }
}
