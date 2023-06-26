import Bread from "../components/Bread"
import Protein from "../components/Protein"
import Salad from "../components/Salad"
import Saunce from "../components/Saunce"
import SandwhichType from "./SandwhichType"

export default class Sandwhich{
    private _Sandwhichtype: SandwhichType
    public get Sandwhichtype(): SandwhichType {
        return this._Sandwhichtype
    }
    public set Sandwhichtype(value: SandwhichType) {
        this._Sandwhichtype = value
    }
    private _bread: Bread
    public get bread(): Bread {
        return this._bread
    }
    public set bread(value: Bread) {
        this._bread = value
    }
    private _protein: Protein
    public get protein(): Protein {
        return this._protein
    }
    public set protein(value: Protein) {
        this._protein = value
    }
    private _salada: Salad
    public get salada(): Salad {
        return this._salada
    }
    public set salada(value: Salad) {
        this._salada = value
    }
    private _saunce: Saunce[] = []
    public get saunce(): Saunce[] {
        return this._saunce
    }
    public set saunce(value: Saunce[]) {
        this._saunce = value
    }
    public addSauce(sauce : Saunce){
        this._saunce.push(sauce)
    }
}
