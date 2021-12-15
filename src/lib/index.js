import setPostsSaga from "./postsSaga";
import { all } from "redux-saga/effects";
import noticeSaga from "./noticeSaga";

export default function* rootSaga() {
  yield all([setPostsSaga(), noticeSaga()]);
}
