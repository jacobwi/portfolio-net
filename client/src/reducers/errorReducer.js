import { GET_ERRORS } from "../actions/Types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload.errors;

    default:
      return state;
  }
}
