export default class Saunce {
    
    constructor(private _molho: string){}
    public get molho(): string {
        return this._molho;
    }
    public set molho(value: string) {
        this._molho = value;
    }
}