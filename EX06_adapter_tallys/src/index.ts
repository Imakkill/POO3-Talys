import Correios from "./Correios/Correios";
import ICorreiosTransport from "./Correios/ICorreiosTransport";
import Transportadora from "./Transportadora/Transportadora";
import TransportadoraAdapter from "./adapters/TransportadoraAdapter";

const transport : ICorreiosTransport = new Correios()
transport.sendCorreios()
transport.receiveCorreios()

const transport2 : ICorreiosTransport = new TransportadoraAdapter(new Transportadora)
transport2.sendCorreios()
transport2.receiveCorreios()
