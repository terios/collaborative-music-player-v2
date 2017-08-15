export default socket => store => next => action => {
  console.log(action, store);
  if (action.type && action.type == "SET_CONNECTION_STATE") {
    console.log("firing SET_CONNECTION_STATE");
    socket.emit("action", action);
  }
  return next(action);
};
