import { LOAD_STATE } from "./actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_STATE:
      //console.log(action);
      state = { ...action.state };
      return state;
    default:
      return state;
  }
};

export default reducer;
