import IBuilders from "../builders/IBuilders";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import Saunce from "../components/Saunce";
import SandwhichType from "../products/SandwhichType";

export default class Director{
    constructor(private builder : IBuilders){}

    constructorDog(){
        this.builder.setSandwhitchType(SandwhichType.hotdog)
        this.builder.setBread(Bread.Banha)
        this.builder.setProtein(new Protein("Vina", 100))
        this.builder.setSalad(Salad.Pure)
        this.builder.addSauce(new Saunce("Ketchup"))
        this.builder.addSauce(new Saunce("Mostarda"))
        this.builder.addSauce(new Saunce("Mostarda"))
        this.builder.addSauce(new Saunce("Toogles"))

    }
    constructorXsalada(){
        this.builder.setSandwhitchType(SandwhichType.xsalada)
        this.builder.setBread(Bread.Brioche)
        this.builder.setProtein(new Protein("Hamburguer", 150))
        this.builder.setSalad(Salad.Alface_Tomate)
        this.builder.addSauce(new Saunce("Ketchup"))
        this.builder.addSauce(new Saunce("Mostarda"))
        this.builder.addSauce(new Saunce("Mostarda"))
        this.builder.addSauce(new Saunce("da casa"))
    }
}
