import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!email.trim()) {
      setErrors(["Email is required"]);
      return;
    }
    if (!username.trim()) {
      setErrors(["Username is required"]);
      return;
    }
    if (username.length < 3 || username.length > 20) {
      setErrors(["Username must be between 3 and 20 characters long"]);
      return;
    }
    if (!password.trim()) {
      setErrors(["Password is required"]);
      return;
    }
    if (password.length < 6) {
      setErrors(["Password must be at least 6 characters long"]);
      return;
    }
    if (password !== confirmPassword) {
      setErrors(["Confirm Password field must be the same as the Password field"]);
      return;
    }

    const data = await dispatch(signUp(username, email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
    }
  };

  return (
    <div className="signUpmodal">
      <h1 className="SignUpmodal">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="error">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
        <label>
          <div>Email</div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <div>Username</div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          <div>Password</div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          <div>Confirm Password</div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div className="signUpbtn">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
