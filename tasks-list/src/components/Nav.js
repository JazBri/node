import React from "react";
import { deleteUser, getUsers } from "../services/todos";

const Nav = ({ logged, user }) => {
  const onClick = () => {
    logged("false");
  };

  const onClickDelete = () => {
    logged("false");
    deleteUser(user.id).then(getUsers());
    window.location.reload(true);
  };

  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          {" "}
          {user.id}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Tasks
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={onClick}>
          Exit
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" onClick={onClickDelete}>
          Delete current user
        </a>
      </li>
    </ul>
  );
};
export default Nav;
