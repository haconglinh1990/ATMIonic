/**
 * Created by haconglinh on 12/8/16.
 */

import {Injectable} from "@angular/core";
import {Location} from "../models/API";
import {Action} from '@ngrx/store';
import {CHANGE_CURRENT_LOCATION, UPDATE_LOCATIONS} from "../Ultils/Constant";


@Injectable()
export class LocationActions {

  changeCurrentLocation(currentLocation: Location): Action{
    return {
      type: CHANGE_CURRENT_LOCATION,
      payload: currentLocation
    }
  }

  updateLocations(locations: Location[]): Action{
    return{
      type: UPDATE_LOCATIONS,
      payload: locations
    }
  }

}
