import { call, put, takeLatest } from "redux-saga/effects";
import { PostToken } from "../api/postToken";
import { getUser } from "../../modules/user";
import { putLogout } from "../api/putLogout";

const LOGIN = "user/LOGIN";
const LOGOUT_USER = "user/LOGOUT_USER";

function* postToken(action) {
  yield call(PostToken, action.token);
  yield put(getUser());
}

function* PutLogout() {
  yield call(putLogout);
}

export default function* userSaga() {
  yield takeLatest(LOGIN, postToken);
  yield takeLatest(LOGOUT_USER, PutLogout);
}
