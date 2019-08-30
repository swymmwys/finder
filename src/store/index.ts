import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { rootReducer } from "./reducers";
import { watchFindMate } from "./effects";

const sagaMiddleware = createSagaMiddleware();
const rootSaga = function*() {
  yield all([
    watchFindMate(),
  ]);
};

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
