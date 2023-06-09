import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css';
import loginpagepic from "./loginpagepic.jpg"


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };
  const handleOnClick = async () => {
    setEmail("demo@aa.io")
    setPassword("password")
    const data = await dispatch(login(email, password));
    }
  return (
    <div className="loginPageDiv">
      <div className="loginPagePic">
        <img className="loginpagepic1" src={loginpagepic} />
      </div>
      <div className="logininfostuff">
        <div>
          <h1>Thats weird, Looks like you not logged in, Here you go</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="error">
            {errors.map((error, idx) => (
              <div key={idx}>{error}</div>
            ))}
          </div>
          <label>
            <div>
              Email
            </div>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <div>
              Password
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div>
            <button className="demouserloginPage" type="submit">Log In</button>
          </div>
        <div>
          <button className="demouserloginPage" onClick={handleOnClick}>Demo User</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default LoginFormPage;
