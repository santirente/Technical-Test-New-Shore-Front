import { JourneyModel } from "src/app/shared/interface/journey.model";

export interface ResponseJourneyModel {
  result : JourneyModel,
  success:boolean,
  message:string
}
