import axios from 'axios';
import tokenSetter from "../utils";

export const login = (user, history) => dispatch => {
    axios
    .post("api/users/login", {
      username: this.state.username,
      password: this.state.password
    })
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