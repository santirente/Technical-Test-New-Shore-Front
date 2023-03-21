import { Transport } from "./transport.model";

export interface Flight {
  transport: Transport,
  origin: string,
  destination: string,
  price: DoubleRange
}
