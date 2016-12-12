/**
 * Created by haconglinh on 12/8/16.
 */

export const BASE_API: string = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
export const API_KEY: string = "AIzaSyAnsboAkwpEceSlixe4JrGKEOlhhWw1iTo";


export const ActionTypes = {
  UPDATE_CURRENT_LOCATION: 'UPDATE_CURRENT_LOCATION',
  UPDATE_RESULT_LOCATIONS: 'UPDATE_RESULT_LOCATIONS',
  UPDATE_RANGE_SEARCH: 'UPDATE_RANGE_SEARCH',
  CHANGE_TAGET_LOCATION: 'CHANGE_TAGET_LOCATION'
}
