import { START_GAME, INITIATE_GAME, SEND, SET_STATE } from "./actions";
const initialState = {
  initialNumber: 56,
  currentNumber: 56,
  history: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      if (action.state && action.state.board) {
        //console.log("SET_STATE BOARD");
        return Object.assign(state, action.state.board);
      } else {
        return state;
      }
    case START_GAME:
      console.log("in start game");
      return state;
    case INITIATE_GAME:
      console.log("in initiate game");
      return state;
    case SEND:
      console.log("in SEND");
      return state;
    default:
      return state;
  }
};

export default reducer;
