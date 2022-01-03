import { GetPortfolios } from "../api/getPortfolios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { error, getPost, setPost, toggle } from "../../modules/posts";
import { postAddPortfolio } from "../api/postAddPortfolio";
import { GetLike } from "../api/getLike";

const ADD_POST = "posts/ADD_POST";
const SET_POST = "posts/SET_POST";
const SET_LIKE = "posts/SET_LIKE";

function* crate_post(action) {
  try {
    yield call(postAddPortfolio, action.data);
    yield put(setPost());
  } catch (e) {
    console.log(e);
  }
}

function* set_posts() {
  try {
    const res = yield call(GetPortfolios);
    yield put(getPost(res));
    yield put(toggle());
  } catch (e) {
    yield put(error(e));
  }
}

function* setLike(action) {
  console.log(action);
  try {
    yield call(GetLike, action.data);
  } catch (e) {
    yield put(error(e));
  }
}

export default function* setPostsSaga() {
  yield takeLatest(SET_POST, set_posts);
  yield takeEvery(SET_LIKE, setLike);
  yield takeEvery(ADD_POST, crate_post);
}
