import { GetPosts } from "../api/getPosts";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { error, getPost } from "../../modules/posts";
// import { GetLike } from "../api/getLike";

const SET_POST = "posts/SET_POST";
const SET_LIKE = "myInfo/SET_LIKE";

function* set_posts() {
  try {
    const res = yield call(GetPosts);
    yield put(getPost(res));
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

export default function* setPostsSaga() {
  yield takeLatest(SET_POST, set_posts);
  yield takeEvery(SET_LIKE, setLike);
}
