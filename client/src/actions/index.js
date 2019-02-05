import axios from 'axios';
import tokenSetter from "../utils/tokenSetter";

export const login = (user, history) => dispatch => {
    axios
    .post("api/users/login", user)
    .then(res => {
      if (res) {
        const { token } = res.data;
        tokenSetter(token);
        localStorage.setItem("token", token);
        //const decoded = jwt_decode(token);
        //dispatch(setUser(decoded));
        history.push("/");
      }
    })
    .catch(err =>
      console.log(err)
    );
}