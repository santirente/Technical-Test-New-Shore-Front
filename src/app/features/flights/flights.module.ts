import { GetExternalFlightsUseCase } from './application/usecase/getExternalFlights.usecase';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalPageComponent } from './infraestructure/ui/components/principal/principal-page.component';
import { FlightsRoutingModule } from './flights-routing.module';
import { NgbAccordionModule, NgbAlertModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { FlightsState } from './infraestructure/state/flights.state';
import { IFlightsRepository } from './application/repository/IFlights.repository';
import { FlightsRepository } from './infraestructure/repository/fligths.repository';
import { HttpService } from 'src/app/shared/services/http.service';



@NgModule({
  declarations: [PrincipalPageComponent],
  imports: [
    CommonModule,
    FlightsRoutingModule,
    SharedModule,
    NgbCarouselModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbAlertModule,
    NgxsModule.forFeature([FlightsState]),
    NgbAlertModule,
    NgbAccordionModule
  ],
  providers: [
    {
        provide: IFlightsRepository,
        useClass: FlightsRepository,
    },
    GetExternalFlightsUseCase,
    HttpService,
    FormBuilder
],
})
export class FlightsModule { }
