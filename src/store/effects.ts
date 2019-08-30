import { getData } from "./../api";
import { takeLatest, call, put } from "redux-saga/effects";
import { FinderActionCreators, FinderActions } from "./actions";
import { Dictionary } from "./types";

export function* findMateEffect(action: ReturnType<typeof FinderActionCreators.findMate>): any {
  yield put(FinderActionCreators.findMateProgress(true));
  yield put(FinderActionCreators.changeContent(null));

  try {
    const content: Dictionary = yield call(getData, action.payload);
    yield put(FinderActionCreators.changeContent(content));
    yield put(FinderActionCreators.findMateProgress(false));
  } catch (exception) {
    yield put(
      FinderActionCreators.findMateError(
        "Error has occurred, please wait, we'll try it again."
      )
    );
    yield* findMateEffect(action);
  }
}

export function watchFindMate() {
  return takeLatest(FinderActions.FIND_MATE, findMateEffect);
}
