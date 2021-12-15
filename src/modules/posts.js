import produce from "immer";
import data from "../dummy.json";

const SET_POST = "posts/SET_POST";
const GET_POST = "posts/GET_POST";
const TOGGLE = "posts/TOGGLE";
const ERROR = "posts/ERROR";

export const setPost = () => ({ type: SET_POST });

export const getPost = (data) => ({
  type: GET_POST,
  data,
});

export const toggle = ({ id }) => ({
  type: TOGGLE,
  id,
});

export const error = (error) => ({
  type: ERROR,
  error,
});

// const initialState = [];
const initialState = { data, error: "" };

function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      console.log(...action.data);
      // return produce(state, (draft) => {
      //   draft.push(...action.data);
      // });
      return state;
    case TOGGLE:
      return produce(state, (draft) => {
        const id = draft.findIndex((i) => i.id === action.id);
        draft.data[id].toggle
          ? (draft.data[id].like -= 1)
          : (draft.data[id].like += 1);
        draft.data[id].toggle = !draft.data[id].toggle;
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
