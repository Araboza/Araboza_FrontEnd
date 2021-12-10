import produce from "immer";

const GET_POST = "posts/GET_POST";
const TOGGLE = "posts/TOGGLE";

export const getPost = ({ data }) => ({
  type: GET_POST,
  data,
});

export const toggle = ({ id }) => ({
  type: TOGGLE,
  id,
});

const initialState = [];

function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return produce(state, (draft) => {
        draft.push(...action.data);
      });
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
