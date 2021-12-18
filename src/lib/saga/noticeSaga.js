import { call, put, takeLatest } from "redux-saga/effects";
import { get_notice, error } from "../../modules/notice";
import getNotice from "../api/getNotice";

const SET_NOTICE = "notice/SET_NOTICE";

function* setNotice(action) {
  const res = yield call(getNotice, action.userId);
  if (!res.error) {
    yield put(get_notice(res));
  } else {
    yield put(error(res.error));
  }
}

export default function* noticeSaga() {
  yield takeLatest(SET_NOTICE, setNotice);
}
