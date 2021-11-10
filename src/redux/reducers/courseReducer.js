export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      //   state.push(action.course); // this is en error - state shouldn't be mutated!
      return [...state, { ...action.course }];
    default:
      return state; // if reducer receives an action that it doesn't care about - skip it and return unchanged state to next reducer.
  }
}
