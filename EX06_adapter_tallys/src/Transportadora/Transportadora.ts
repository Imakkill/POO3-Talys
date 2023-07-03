import ITransportadoraTransport from "./ITransportadoraTransport";

export default class Transportadora implements ITransportadoraTransport{
    sendTransportadora(): void {
        console.log("Enviando pacote via Transportadora.")
    }
    receiveTransportadora(): void {
        console.log("Recebendo pacote via Transportadora.")
    }

}