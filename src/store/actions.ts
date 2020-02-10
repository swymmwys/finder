import { Dictionary, Gender } from './types';
import {createAction, ActionType} from "typesafe-actions";

export enum FinderActions {
  CHANGE_CONTENT = "finder/change-content",
  FIND_MATE = "finder/find-mate",
  FIND_MATE_PROGRESS = "finder/find-mate-progress",
  FIND_MATE_ERROR = "finder/find-mate-error",
}

export const FinderActionCreators = {
    changeContent: createAction(FinderActions.CHANGE_CONTENT, action => (content: Dictionary | null) => action(content)),
    findMate: createAction(FinderActions.FIND_MATE, action => (gender: Gender) => action(gender)),
    findMateProgress: createAction(FinderActions.FIND_MATE_PROGRESS, action => (progress: boolean) => action(progress)),
    findMateError: createAction(FinderActions.FIND_MATE_ERROR, action => (error: string) => action(error)),
};

export type FinderActionTypes = ActionType<typeof FinderActionCreators>;
