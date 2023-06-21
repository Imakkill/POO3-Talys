import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        console.log("Encontrando o refri")
        this.getCargo()
    }
    getCargo(): void {
        console.log("Seu refrigerante está a caminho")
    }
}