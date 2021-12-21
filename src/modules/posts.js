import produce from "immer";
import data from "../dummy.json";

const SET_POST = "posts/SET_POST";
const GET_POST = "posts/GET_POST";
const SET_LIKE = "myInfo/SET_LIKE";
const ERROR = "posts/ERROR";

export const setPost = () => ({ type: SET_POST });
export const getPost = (data) => ({
  type: GET_POST,
  data,
});
export const set_like = (data) => ({
  type: SET_LIKE,
  data,
});
export const error = (error) => ({
  type: ERROR,
  error,
});

const initialState = { posts: data, error: null };

function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      // return produce(state, (draft) => {
      //   draft.posts.push(...action.data);
      // });
      return state;

    case SET_LIKE:
      return produce(state, (draft) => {
        const { id } = action.data;
        const index = draft.posts.findIndex((i) => i.id === id);

        draft.posts[index].toggle
          ? draft.posts[index].like++
          : draft.posts[index].like--;

        if (index !== -1)
          draft.posts[index].toggle = !draft.posts[index].toggle;
      });

    case ERROR:
      return produce(state, (draft) => {
        draft.error = action.error;
      });
    default:
      return state;
  }
}

export default posts;
