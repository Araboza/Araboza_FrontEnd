import { call, put, takeLatest } from "redux-saga/effects";
import { PostLogin } from "../api/postLogin";
import { getUser } from "../../modules/user";
import { putLogout } from "../api/putLogout";
import { get_user } from "../../modules/myInfo";

const LOGIN = "user/LOGIN";
const LOGOUT_USER = "user/LOGOUT_USER";

function* postToken(action) {
  try {
    const user = yield call(PostLogin, action.token);
    yield put(getUser());
    yield put(get_user(user));
  } catch (e) {
    console.log(e);
  }
}

function* PutLogout() {
  yield call(putLogout);
}

export default function* userSaga() {
  yield takeLatest(LOGIN, postToken);
  yield takeLatest(LOGOUT_USER, PutLogout);
}
