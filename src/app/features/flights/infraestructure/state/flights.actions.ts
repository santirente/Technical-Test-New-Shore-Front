import { FlightsSearchModel } from "../../domain/flights-search.model";

export class GetExternalFlights {
  static readonly type = '[Flights] Get External Flights';
  constructor(public payload: FlightsSearchModel){}
}
