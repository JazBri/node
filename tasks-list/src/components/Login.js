import React, { useState } from "react";

const Login = ({ onSubmit, onChange, logIn }) => {
  // const initialUserState = {
  //   mail: "",
  //   pass: ""
  // };

  // const [user, setUser] = useState(initialUserState);
  // const [createUser, setCreateUser] = useState(false);

  // const onChangeNewUser = e => {
  // const value = e.target.value;
  //   const name = e.target.name;

  // setUser({ ...user, [name]: value });
  // };

  return (
    <form onSubmit={onSubmit}>
      <h1>Bienvenido!</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChange}
          name="mail"
          value={logIn.mail}
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={onChange}
          name="pass"
          value={logIn.pass}
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
