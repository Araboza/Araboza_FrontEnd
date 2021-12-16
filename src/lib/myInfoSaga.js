import { call, put, takeLatest } from "redux-saga/effects";
import { error, get_user } from "../modules/myInfo";
import { GetUser } from "./api/getUser";

const SET_USER = "myInfo/SET_USER";

function* setUser() {
  try {
    const res = yield call(GetUser);
    yield put(get_user(res));
  } catch (e) {
    yield put(error(e));
  }
}

export default function* myInfoSaga() {
  yield takeLatest(SET_USER, setUser);
}
