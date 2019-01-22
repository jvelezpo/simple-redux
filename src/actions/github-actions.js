import axios from 'axios';

export const getGithubInfo = username => {
  return dispatch => {
    return axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        dispatch({
          type: "GET_GITHUB_INFO",
          payload: response
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};