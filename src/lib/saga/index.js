import { all } from "redux-saga/effects";
import setPostsSaga from "./postsSaga";
import noticeSaga from "./noticeSaga";
import myInfoSaga from "./myInfoSaga";

export default function* rootSaga() {
  yield all([setPostsSaga(), noticeSaga(), myInfoSaga()]);
}
