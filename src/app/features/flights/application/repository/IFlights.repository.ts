import { Observable } from 'rxjs';
import { ResponseJourneyModel } from '../../domain/flights-list.model';
import { FlightsSearchModel } from '../../domain/flights-search.model';

export abstract class IFlightsRepository {
  abstract getExternalFlights(payload: FlightsSearchModel): Observable<ResponseJourneyModel>;
}
