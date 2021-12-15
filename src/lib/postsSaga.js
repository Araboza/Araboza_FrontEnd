import { GetPosts } from "./api/getPosts";
import { call, put, takeLatest } from "redux-saga/effects";
import { error, getPost } from "../modules/posts";

const SET_POST = "posts/SET_POST";

function* set_posts() {
  try {
    const res = yield call(GetPosts);
    yield put(getPost(res));
  } catch (e) {
    yield put(error(e));
  }
}

export default function* setPostsSaga() {
  yield takeLatest(SET_POST, set_posts);
}
