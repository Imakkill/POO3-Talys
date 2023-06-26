import Bread from "../components/Bread"
import Protein from "../components/Protein"
import Salad from "../components/Salad"
import Saunce from "../components/Saunce"
import Sandwhich from "../products/Sandwhich"
import SandwhichType from "../products/SandwhichType"

export default interface IBuilders{
    reset(): void
    getSandwhitch(): Sandwhich;
    setSandwhitchType(sandwhichType: SandwhichType)
    setBread(Bread: Bread)
    setProtein(Protein: Protein)
    setSalad(salad: Salad)
    addSauce(sauce: Saunce)
}