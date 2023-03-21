import { Flight } from './../../../../shared/interface/flight.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IFlightsRepository } from '../../application/repository/IFlights.repository';
import { HttpService } from 'src/app/shared/services/http.service';
import { ResponseJourneyModel } from '../../domain/flights-list.model';
import { FlightsSearchModel } from '../../domain/flights-search.model';

@Injectable()
export class FlightsRepository extends IFlightsRepository {
  constructor(private readonly http: HttpService) {
    super();
  }

  getExternalFlights(payload: FlightsSearchModel): Observable<ResponseJourneyModel> {
    return this.http.get<any>(`get_round_trip_journeys/${payload.origin}/${payload.destination}/${payload.maxNumberOfFlights}`);
  }
}
