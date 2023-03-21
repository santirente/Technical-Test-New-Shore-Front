import { Flight } from './flight.model';
export interface JourneyModel {
  flights: Array<Flight>,
  origin: string,
  destination: string,
  price: DoubleRange
}


export interface JourneyViewModel {
  flightArray: JourneyModel
}
