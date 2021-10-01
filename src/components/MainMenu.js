import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

export const MainMenu = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to Bank</h1>
      <hr />
      <Row className="menu-row">
        <Col className="img-div mb-4">
          <img
            src="https://images.moneycontrol.com/static-mcnews/2021/06/Bank-representational-shutterstock-770x433.jpg"
            className="bank-img"
            alt="bank"
          />
        </Col>

        <Col>
          <NavLink exact to="/loan">
            <Button className="btn btn-lg btn-menu">Apply Loan</Button>
          </NavLink>
          <br />
          <br />
          <NavLink exact to="/update">
            <Button className="btn btn-lg btn-menu">Update Details</Button>
          </NavLink>
        </Col>
      </Row>
    </div>
  );
};
