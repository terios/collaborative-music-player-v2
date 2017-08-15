export const SET_STATE = "SET_STATE";
export const START_GAME = "START_GAME";
export const INITIATE_GAME = "INITIATE_GAME";
export const SEND = "SEND";

export const startGame = player => ({
  type: START_GAME,
  player
});

export const initiateGame = video => ({
  type: INITIATE_GAME,
  initialNumber
});

export const send = number => ({
  type: SEND,
  number
});
