import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };
  const handleOnClick = async () => {
    const email = "demoo@aa.io";
    const password = "password";
    const data = await dispatch(login(email, password));
  };
  return (
    <div className="LoginModalDiv">
      <div className="LoginModalTitle">
        <h1 className="loginText">Log In</h1>
        <p className="demotext">Or use the Demo User button for quick access</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.map((error, idx) => (
            <li className="error" key={idx}>{error}</li>
          ))}
        </div>
        <div>
          <label>
            <div>
              Email
            </div>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

          </label>
        </div>

        <label>
          <div className="passWordText">
            Password
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

        </label>
        <div className="DemoandLogin">
          <div>
          <button className="loginbtnmodal" type="submit">Log In</button>
        </div>
        <div className="DemoUserBtn">
            <button className="demobtnModal" onClick={handleOnClick}>Demo User</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
