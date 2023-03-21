import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { GetExternalFlights } from '../../../state/flights.actions';
import { Alert } from '../../../../domain/alert.model';
import { FlightsState } from '../../../state/flights.state';
import { JourneyModel, JourneyViewModel } from 'src/app/shared/interface/journey.model';


@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss'],
})
export class PrincipalPageComponent implements OnInit {
  public isCollapsed = false;
  model!: NgbDateStruct;
  flightsForm!: FormGroup;
  alerts: Array<Alert> = []
  flights!:JourneyViewModel;
  actualFlights!: Array<JourneyModel>
  constructor(private readonly store: Store, private readonly fb: FormBuilder){
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.flightsForm = this.fb.group({
      origin:['', [Validators.maxLength(3), Validators.required]],
      destination:['',[Validators.maxLength(3), Validators.required]],
      maxNumberOfFlights:[0]
    });
  }

  changeToUpperCase(formControlName: string){
    this.flightsForm.controls[formControlName].setValue( this.flightsForm.controls[formControlName].value.toUpperCase());
  }

  validSameValuesForm(){
    if(this.flightsForm.controls['origin'].value === this.flightsForm.controls['destination'].value){
      return false;
    }
    return true;
  }

  searchFlights(){
    this.actualFlights = []
    if(this.flightsForm.valid && this.validSameValuesForm()){
      this.store.dispatch(new GetExternalFlights(this.flightsForm.value)).subscribe((response)=>{
        if(response){
           this.store.select(FlightsState.loadFlights).subscribe((response: JourneyViewModel)=>{
            this.flights = response;
            this.actualFlights.push(this.flights.flightArray);
            this.actualFlights = this.actualFlights.flat();
           })
        }
      })
    }
    if(!this.validSameValuesForm() && this.alerts.length === 0){
      this.reset();
    }
  }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

  reset() {
		this.alerts = [
      {
        type: 'danger',
        message: 'Los campos origen y destino no pueden ser iguales',
      }
    ];
	}

}
