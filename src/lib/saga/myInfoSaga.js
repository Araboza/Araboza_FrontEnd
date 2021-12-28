import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { error, get_user, get_my_posts } from "../../modules/myInfo";
// import { GetLike } from "../api/getLike";
import { GetMyPosts } from "../api/getMyPosts";
import { GetUser } from "../api/getUser";

const SET_USER = "myInfo/SET_USER";
const SET_MY_POSTS = "myInfo/SET_MY_POSTS";
const SET_LIKE = "myInfo/SET_LIKE";

function* setUser() {
  try {
    const res = yield call(GetUser);
    yield put(get_user(res));
  } catch (e) {
    yield put(error(e));
  }
}

function* setPosts() {
  try {
    const res = yield call(GetMyPosts);
    yield put(get_my_posts(res));
  } catch (e) {
    yield put(error(e));
  }
}

function* setLike(action) {
  try {
    // yield call(GetLike, action);
  } catch (e) {
    yield put(error(e));
  }
}

export default function* myInfoSaga() {
  yield takeEvery(SET_LIKE, setLike);
  yield takeLatest(SET_USER, setUser);
  yield takeLatest(SET_MY_POSTS, setPosts);
}
