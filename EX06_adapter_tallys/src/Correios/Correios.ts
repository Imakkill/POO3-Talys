import ICorreiosTransport from "./ICorreiosTransport";

export default class Correios implements ICorreiosTransport{
    sendCorreios(): void {
        console.log("Enviando pacote via correios.")
    }
    receiveCorreios(): void {
        
        console.log("Recebendo pacote via Correios.")
    }

}