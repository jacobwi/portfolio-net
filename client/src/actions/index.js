import axios from 'axios';
import tokenSetter from "../utils/tokenSetter";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_USER } from "./Types";
// Login action
export const login = (user, history) => dispatch => {
    axios
    .post("api/users/login", user)
    .then(res => {
      if (res) {
        const { token } = res.data;
        tokenSetter(token);
        localStorage.setItem("token", token);
        const decoded = jwt_decode(token);
        dispatch(setUser(decoded));
        history.push("/");
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const setUser = decoded => {
  return {
    type: SET_USER,
    payload: decoded
  };
};