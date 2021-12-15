import { GetPosts } from "./api/getPosts";
import { call, put, takeLatest } from "redux-saga/effects";
import { getPost } from "../modules/posts";

const SET_POST = "posts/SET_POST";

function* set_posts() {
  const res = yield call(GetPosts);
  yield put(getPost(res));
}

export default function* setPostsSaga() {
  yield takeLatest(SET_POST, set_posts);
}
