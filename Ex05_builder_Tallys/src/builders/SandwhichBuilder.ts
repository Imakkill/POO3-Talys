import Sandwhich from "../products/Sandwhich";
import IBuilders from "./IBuilders";

export class SandwhichBuilder implements IBuilders{
    private sandwhich = new Sandwhich();

    reset(): void {
        this.sandwhich = new Sandwhich() 
    }
    getSandwhitch(): Sandwhich {
        const result: Sandwhich = this.sandwhich
        this.reset()
        return result
    }
    setSandwhitchType(sandwhitchType: any) {
        this.sandwhich.Sandwhichtype = value;
    }
    setBread(bread: any) {

    }
    setProtein(protein: any) {

    }
    setSalad(salad: any) {

    }
    addSauce(sauce: any) {

    }

}