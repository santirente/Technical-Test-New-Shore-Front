import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { IFlightsRepository } from '../repository/IFlights.repository';
import { ResponseJourneyModel } from '../../domain/flights-list.model';
import { FlightsSearchModel } from '../../domain/flights-search.model';
import { UseCase } from 'src/app/shared/use-case';


@Injectable()
export class GetExternalFlightsUseCase implements UseCase<FlightsSearchModel,ResponseJourneyModel> {
  constructor(private readonly repository: IFlightsRepository) {}
  execute(payload:FlightsSearchModel): Observable<ResponseJourneyModel> {
    return this.repository.getExternalFlights(payload);
  }
}
