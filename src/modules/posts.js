import produce from "immer";

const SET_POST = "posts/SET_POST";
const GET_POST = "posts/GET_POST";
const ADD_POST = "posts/ADD_POST";
const SET_LIKE = "posts/SET_LIKE";
const TOGGLE = "posts/TOGGLE";
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
export const addPost = (data) => ({ type: ADD_POST, data });
export const toggle = () => ({ type: TOGGLE });
export const error = (error) => ({
  type: ERROR,
  error,
});

const initialState = { posts: [], error: null };

function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return produce(state, (draft) => {
        draft.posts = [...action.data];
      });

    case SET_LIKE:
      return produce(state, (draft) => {
        const { id } = action.data;
        console.log(id);
        const index = draft.posts.findIndex((i) => i.id === id);

        if (index !== -1) {
          let likes = [];
          try {
            likes = localStorage.getItem("araboza_like").split(",");
          } catch {
            likes = [];
          }

          if (!draft.posts[index].toggle) {
            draft.posts[index].like++;
            likes.push(id);
          } else {
            draft.posts[index].like--;
            const likesIndex = likes.indexOf(`${id}`);
            likes.splice(likesIndex, likesIndex);
            if (likesIndex === 0) likes = [];
          }
          draft.posts[index].toggle = !draft.posts[index].toggle;
          localStorage.setItem("araboza_like", likes);
        }
      });

    case TOGGLE:
      return produce(state, (draft) => {
        const likes = localStorage.getItem("araboza_like").split(",");
        likes.forEach((i) => {
          const index = draft.posts.findIndex(
            (post) => post.id === parseInt(i)
          );
          if (index !== -1) draft.posts[index].toggle = true;
        });
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
