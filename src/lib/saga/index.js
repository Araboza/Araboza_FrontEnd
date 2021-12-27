import { all } from "redux-saga/effects";
import setPostsSaga from "./postsSaga";
import noticeSaga from "./noticeSaga";
import myInfoSaga from "./myInfoSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([setPostsSaga(), noticeSaga(), myInfoSaga(), userSaga()]);
}
