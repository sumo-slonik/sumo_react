import Competitor from "./Competitor";
import WeightCategory from "./WeightCategory";
import NationalTeam from "./NationalTeam";

export default class NationalTeamMembershipOfCompetitor {
    private _id: number | null;
    private _nationalTeam: NationalTeam;
    private _competitor: Competitor;
    private _membershipStart: Date;
    private _membershipEnd: Date | null;
    private _category: WeightCategory;


    constructor(id: number | null, nationalTeam: NationalTeam, competitor: Competitor, membershipStart: Date, membershipEnd: Date | null, weightCategory: WeightCategory) {
        this._id = id;
        this._nationalTeam = nationalTeam;
        this._competitor = competitor;
        this._membershipStart = membershipStart;
        this._membershipEnd = membershipEnd;
        this._category = weightCategory;
    }


    get id(): number | null {
        return this._id;
    }

    set id(value: number | null) {
        this._id = value;
    }

    get nationalTeam(): NationalTeam {
        return this._nationalTeam;
    }

    set nationalTeam(value: NationalTeam) {
        this._nationalTeam = value;
    }

    get competitor(): Competitor {
        return this._competitor;
    }

    set competitor(value: Competitor) {
        this._competitor = value;
    }

    get membershipStart(): Date {
        return this._membershipStart;
    }

    set membershipStart(value: Date) {
        this._membershipStart = value;
    }

    get membershipEnd(): Date | null {
        return this._membershipEnd;
    }

    set membershipEnd(value: Date | null) {
        this._membershipEnd = value;
    }

    get category(): WeightCategory {
        return this._category;
    }

    set category(value: WeightCategory) {
        this._category = value;
    }
}