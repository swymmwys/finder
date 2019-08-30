import { FinderActions, FinderActionTypes } from "./actions";
import { combineReducers } from "redux";
import { State, Finder } from "./types";
import { createReducer } from "typesafe-actions";

const finderReducer = createReducer<Finder, FinderActionTypes>({
  findButtonAvailable: true,
  content: null,
  progress: false,
  error: ""
})
  .handleAction(FinderActions.CHANGE_CONTENT, (state, action) => ({
    ...state,
    content: action.payload,
  }))
  .handleAction(FinderActions.FIND_MATE_ERROR, (state, action) => ({
    ...state,
    error: action.payload
  }))
  .handleAction(FinderActions.FIND_MATE_PROGRESS, (state, action) => ({
    ...state,
    progress: action.payload,
    error: action.payload && state.error ? state.error : "",
    findButtonAvailable: !action.payload,
  }));

export const rootReducer = combineReducers<State>({
  finder: finderReducer
});
