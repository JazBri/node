import React from "react";

const SignIn = ({ onChange, onSubmit, signIn }) => {
  return (
    <div className="container">
      <br></br>
      <br></br>

      <form onSubmit={onSubmit}>
        <h2 className="d-flex justify-content-around">
          Si aún no tienes usuario crea uno aquí!
        </h2>

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
            placeholder="Enter your email"
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
            value={signIn.pass}
            placeholder="Enter you password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
