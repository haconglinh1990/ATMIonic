import {Result, Location} from "../models/API";
/**
 * Created by haconglinh on 12/8/16.
 */

export interface AppState {
  resultLocations: Result[];
  tagetLocation?: Result;
}
