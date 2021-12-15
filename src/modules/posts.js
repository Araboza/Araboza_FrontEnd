import produce from "immer";
import data from "../dummy.json";

const SET_POST = "posts/SET_POST";
const GET_POST = "posts/GET_POST";
const TOGGLE = "posts/TOGGLE";

export const setPost = () => ({ type: SET_POST });

export const getPost = (data) => ({
  type: GET_POST,
  data,
});

export const toggle = ({ id }) => ({
  type: TOGGLE,
  id,
});

// const initialState = [];
const initialState = data;

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
        draft[id].toggle ? (draft[id].like -= 1) : (draft[id].like += 1);
        draft[id].toggle = !draft[id].toggle;
      });
    default:
      return state;
  }
}

export default posts;
