import jsonplaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value()
};

export const fetchPosts = () => async (dispatch) => {
  const { data } = await jsonplaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: data });
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: data });
};

// create a function that will only be called once when passed the same params
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const { data } = await jsonplaceholder.get(`/users/${id}`);
//   console.log("fecthing ");
//   dispatch({ type: "FETCH_USER", payload: data });
// });
