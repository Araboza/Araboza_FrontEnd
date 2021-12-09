const GET_POST = "GET_POST";
const TOGGLE = "TOGGLE";

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
      return action.data;
    case TOGGLE:
      state[action.id].toggle = !state[action.id].toggle;
      return state;
    default:
      return state;
  }
}

export default posts;
