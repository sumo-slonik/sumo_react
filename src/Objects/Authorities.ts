import Club from "./Club";
import NationalTeam from "./NationalTeam";
import Any = jasmine.Any;

export default class Authorities {

    private _user: string;
    private _administeredClubs: Club[];
    private _roles: string;
    private _administeredNationalRepresentations: Any[];
    private _ageCategoriesTrainedByNationalCoach: Any[];
    private _trainedNationalTeam: NationalTeam[];


    constructor(user: string, administeredClubs: Club[], administeredNationalRepresentations: jasmine.Any[], ageCategoriesTrainedByNationalCoach: jasmine.Any[], trainedNationalRepresentations: NationalTeam[], roles: string) {
        this._user = user;
        this._administeredClubs = administeredClubs;
        this._administeredNationalRepresentations = administeredNationalRepresentations;
        this._ageCategoriesTrainedByNationalCoach = ageCategoriesTrainedByNationalCoach;
        this._trainedNationalTeam = trainedNationalRepresentations;
        this._roles = roles;
    }

    get user(): string {
        return this._user;
    }

    set user(value: string) {
        this._user = value;
    }

    get administeredClubs(): Club[] {
        return this._administeredClubs;
    }

    set administeredClubs(value: Club[]) {
        this._administeredClubs = value;
    }

    get administeredNationalRepresentations(): jasmine.Any[] {
        return this._administeredNationalRepresentations;
    }

    set administeredNationalRepresentations(value: jasmine.Any[]) {
        this._administeredNationalRepresentations = value;
    }

    get ageCategoriesTrainedByNationalCoach(): jasmine.Any[] {
        return this._ageCategoriesTrainedByNationalCoach;
    }

    set ageCategoriesTrainedByNationalCoach(value: jasmine.Any[]) {
        this._ageCategoriesTrainedByNationalCoach = value;
    }

    get trainedNationalTeam(): NationalTeam[] {
        return this._trainedNationalTeam;
    }

    set trainedNationalTeam(value: NationalTeam[]) {
        this._trainedNationalTeam = value;
    }

    get roles(): string {
        return this._roles;
    }

    set roles(value: string) {
        this._roles = value;
    }
}