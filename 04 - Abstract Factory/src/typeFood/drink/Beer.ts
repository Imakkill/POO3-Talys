import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        console.log("Escolhendo a breja")
        this.getCargo();
  
    }
    getCargo(): void {
        console.log("Sua breja está a caminho")
    }
}