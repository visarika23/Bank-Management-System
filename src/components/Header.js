import React from "react";
import { Container } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addID } from "../Redux/Action";

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = () => {
    //dispatch(addID(null));
    history.push("/");
  };

  return (
    <div className="header">
      <Container>
        <NavLink exact to="/menu" className="header-link">
          <p style={{ float: "left" }}>Welcome to Bank</p>
        </NavLink>

        <p style={{ float: "right" }}>
          <button type="submit" onClick={onClick} className="btn-logout">
            Logout
          </button>
        </p>
      </Container>
    </div>
  );
};
