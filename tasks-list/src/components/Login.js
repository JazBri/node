import React, { useState } from "react";

const Login = ({ onSubmit, onChange, logIn }) => {
  return (
    <div class="container">
      <br></br>
      <br></br>
      <br></br>
      <form onSubmit={onSubmit}>
        <h2 className="d-flex justify-content-around">Bienvenido!</h2>
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
    </div>
  );
};

export default Login;
