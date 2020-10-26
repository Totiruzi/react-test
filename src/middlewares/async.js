export default ({ dispatch }) => (next) => (action) => {
  // Check to see if the action has a promise on it's payload property
  // If it does, wait for it to resolve
  // If it oesn't, then send the action on to the next middle ware

  // debugger;
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
  // We want to wait for the promise to resolve (get its data!!!) and then create a new action with that data and dispatch it
  action.payload.then(function (response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
