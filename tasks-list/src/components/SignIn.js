import React, { useState } from "react";

const SignIn = ({ onChange, onSubmit, signIn }) => {
  return (
    <form onSubmit={onSubmit}>
      <h1>Si aún no tienes usuario crea uno aquí!</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={onChange}
          name="mail"
          value={signIn.mail}
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
          value={signIn.pass}
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignIn;
