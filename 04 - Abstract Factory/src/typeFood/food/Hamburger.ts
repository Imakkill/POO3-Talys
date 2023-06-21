import IFood from "./interface/IFood"

export default class Hamburger implements IFood{
    startDelivery(): void {
        console.log("Preparando o hamburger")
        this.getCargo()
    }
    getCargo(): void {
        console.log("Seu hamburger esta a caminho")
    }
}