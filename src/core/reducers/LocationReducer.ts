import {LocationActions} from "../actions/LocationActions";
import {ActionTypes} from "../ultils/Constant";
import {Action} from "@ngrx/store";
/**
 * Created by haconglinh on 12/9/16.
 */

// export interface EchoesVideos extends Array<GoogleApiYouTubeSearchResource>{};

const initialState = {

};

export function LocationReducer(state = initialState, action: Action) {
  switch(action.type) {
    // case ActionTypes.CHANGE_TAGET_LOCATION:
    //   return [...state, Object.assign({}, action.payload, { id: nextId++ })];

    // case BirthdayActions.UPDATE_BIRTHDAY:
    //   return state.map(birthday => {
    //     return birthday.id === action.payload.id ? Object.assign({}, birthday, action.payload) : birthday;
    //   });
    // case BirthdayActions.DELETE_BIRTHDAY:
    //   return state.filter(birthday => birthday.id !== action.payload.id);

    default:
      return state;
  };
}
