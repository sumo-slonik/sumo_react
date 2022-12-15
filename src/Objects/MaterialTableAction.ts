export default class MaterialTableAction {
    private _tooltip: string;
    private _icon: string|any;
    private _onConlick: (event: any, data: any | any[]) => void;


    constructor(tooltip: string, icon: any, onConlick: (event: any, data: any) => void) {
        this._tooltip = tooltip;
        this._icon = icon;
        this._onConlick = onConlick;
    }


    get tooltip(): string {
        return this._tooltip;
    }

    set tooltip(value: string) {
        this._tooltip = value;
    }

    get icon(): any {
        return this._icon;
    }

    set icon(value: any) {
        this._icon = value;
    }

    get onConlick(): (event: any, data: any) => void {
        return this._onConlick;
    }

    set onConlick(value: (event: any, data: any) => void) {
        this._onConlick = value;
    }
}
