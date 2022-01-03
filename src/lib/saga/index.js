import { all } from "redux-saga/effects";
import setPostsSaga from "./postsSaga";
import myInfoSaga from "./myInfoSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([setPostsSaga(), myInfoSaga(), userSaga()]);
}
