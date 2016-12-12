/**
 * Created by haconglinh on 12/8/16.
 */

import {Injectable} from "@angular/core";
import {Location, Result} from "../models/API";
import {Action} from '@ngrx/store';
import {ActionTypes} from "../ultils/Constant";

@Injectable()
export class LocationActions {

  // static GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION';
  // getCurrentLocation(currentLocation: Location): Action{
  //   return {
  //     type: LocationActions.GET_CURRENT_LOCATION,
  //     payload: currentLocation
  //   }
  // }

  // static UPDATE_CURRENT_LOCATION = 'UPDATE_CURRENT_LOCATION';
  updateCurrentLocation(currentLocation: Location): Action{
    return {
      type: ActionTypes.UPDATE_CURRENT_LOCATION,
      payload: currentLocation
    }
  }

  // static GET_RESULT_LOCATIONS = 'GET_RESULT_LOCATIONS';
  // getResultLocations(resultLocations: Result[]): Action{
  //   return {
  //     type: LocationActions.GET_RESULT_LOCATIONS,
  //     payload: resultLocations
  //   }
  // }

  // static UPDATE_RESULT_LOCATIONS = 'UPDATE_RESULT_LOCATIONS';
  updateResultLocations(resultLocations: Result[]): Action{
    return {
      type: ActionTypes.UPDATE_RESULT_LOCATIONS,
      payload: resultLocations
    }
  }
  //
  // static GET_RANGE_SEARCH = 'GET_RANGE_SEARCH';
  // getRangeSearch(rangeSearch: number): Action{
  //   return{
  //     type: LocationActions.GET_RANGE_SEARCH,
  //     payload: rangeSearch
  //   }
  // }

  // static UPDATE_RANGE_SEARCH = 'UPDATE_RANGE_SEARCH';
  updateRangeSearch(rangeSearch: number): Action{
    return{
      type: ActionTypes.UPDATE_RANGE_SEARCH,
      payload: rangeSearch
    }
  }

  // static CHANGE_TAGET_LOCATION = 'CHANGE_TAGET_LOCATION';
  changeTagetLocation(resultLocations: Result): Action{
    return{
      type: ActionTypes.CHANGE_TAGET_LOCATION,
      payload: resultLocations
    }
  }

}
