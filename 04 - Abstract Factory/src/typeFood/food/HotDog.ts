import IFood from "./interface/IFood"

export default class HotDog implements IFood{
    startDelivery(): void {
        console.log("Preparando o dogao")
        this.getCargo()

    }
    getCargo(): void {
        console.log("Seu cachorro-quente esta a caminho")
    }
}