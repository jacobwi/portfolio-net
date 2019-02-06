import { SET_NOTIFICATIONS } from "../actions/Types";

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  console.log(state)
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return action.payload;

    default:
      return state;
  }
}
