function getInitialState() {
  return {};
}

export default function githubReducer(state = getInitialState(), action) {
  switch (action.type) {
    case "GET_GITHUB_INFO":
      console.log('action.payload.data', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
