import ICorreiosTransport from "../Correios/ICorreiosTransport";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreiosTransport{
    
    constructor(private transportadora : Transportadora){
        console.log("Adaptando Transportadora em Correios!")
    }
    
    sendCorreios(): void {
        return this.transportadora.sendTransportadora()
        }
    receiveCorreios(): void {
        return this.transportadora.receiveTransportadora()
    }
}