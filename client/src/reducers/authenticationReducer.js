import { SET_USER, SET_LOADER } from "../actions/Types";
import { isEmpty } from "lodash";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {},
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        isLoading: false
      };

    case SET_LOADER:
      return {
        isLoading: action.payload
      };
    default:
      return state;
  }
}
