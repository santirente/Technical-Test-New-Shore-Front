import { JourneyModel, JourneyViewModel } from './../../../../shared/interface/journey.model';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetExternalFlightsUseCase } from '../../application/usecase/getExternalFlights.usecase';
import { GetExternalFlights } from './flights.actions';
import { FlightsModel } from './flights.model';
import { FlightsSearchModel } from '../../domain/flights-search.model';
import { patch } from '@ngxs/store/operators';

@State<JourneyViewModel>({
  name: 'Flights',
  defaults: {
    flightArray:{
      flights:[],
      origin: '',
      destination: '',
      price: 0 as DoubleRange
    }
  }
})

@Injectable()
export class FlightsState {
  constructor(
    private readonly getExternalFlightsUseCase: GetExternalFlightsUseCase) { }

  @Selector()
  public static loadFlights(flightsArray: JourneyViewModel): JourneyViewModel {
    return flightsArray;
  }
  @Action(GetExternalFlights)
  signIn(ctx: StateContext<JourneyViewModel>, payload: {payload:FlightsSearchModel}): Observable<JourneyModel> {
    return this.getExternalFlightsUseCase.execute(payload.payload).pipe(
      tap((response: any) => {
        if (response.success) {
          ctx.setState(
            patch({
              flightArray:response.result
            })
          );
        }
      })
    );
  }
}
