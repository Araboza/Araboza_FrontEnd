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
      return state.concat(action.data);
    case TOGGLE:
      return produce(state, (draft) => {
        draft[action.id].toggle = !draft[action.id].toggle;
      });
    default:
      return state;
  }
}

export default posts;
