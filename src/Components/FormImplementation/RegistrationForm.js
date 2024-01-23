import React, { useState } from "react";

const RegistrationForm = () => {
  // Your code here
  const [inputUsername, setInputUsername] = useState("Dipak");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputUsernameErr, setInputUsernameErr] = useState("");
  const [inputEmailErr, setInputEmailErr] = useState("");
  const [inputPasswordErr, setInputPasswordErr] = useState("");
  var submitted = false;
  const onSubmitF = (event) => {
    submitted = true;
    event.preventDefault();
    if (inputUsername === "") {
      setInputUsernameErr("Username is required");
    } else if (inputUsername.length < 3 || inputUsername.length > 8) {
      setInputUsernameErr("Enter user namebetween 3 to 8");
    } else {
      setInputUsernameErr("");
    }
    if (inputEmail === "") {
      setInputEmailErr("Email is required");
    } else {
      setInputEmailErr("");
    }
    if (inputPassword === "" || inputPassword.length <= 6) {
      setInputPasswordErr("Password is required");
    } else {
      setInputPasswordErr("");
    }
    // if(inputEmailErr)
  };
  const handlePassErr = (e) => {
    setInputPassword(e.target.value);
    if (e.target.value.length < 6) setInputPasswordErr("Check length");
    else setInputPasswordErr("");
  };
  return (
    <form onSubmit={onSubmitF}>
      <label>
        Username:
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
        />
        {inputUsernameErr && <p style={{ color: "red" }}>{inputUsernameErr}</p>}
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        {inputEmailErr && <p style={{ color: "red" }}>{inputEmailErr}</p>}
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          value={inputPassword}
          onChange={(e) => handlePassErr(e)}
        />
        {inputPasswordErr && <p style={{ color: "red" }}>{inputPasswordErr}</p>}
      </label>
      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
