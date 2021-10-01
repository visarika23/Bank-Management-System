import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import { credential } from "./credentials";
import { useSelector } from "react-redux";

const schema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

//For now the I am using hardcoded value for login. I will complete the
//login functionality once I connect it with the backend.
//username= user1 & password= user1

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();
  const credential = useSelector((state) => state);

  const onSubmit = async (data) => {
    console.log(data);

    if (data.userName === credential.userName && data.password === credential.password) {
      history.push("/menu");
    } else {
      alert("Incorrect username or password. Try again!");
    }
  };

  return (
    <div className="login-form-div mb-5">
      <h1 style={{ textAlign: "center" }}>Welcome to Bank</h1>
      <Container className="form-box">
        <h3>Login</h3>
        <div id="login-form">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="col-sm-4">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="userName"
                {...register("userName")}
              />
              <small className="text-danger">{errors.userName?.message}</small>
            </Form.Group>
            <br />
            <Form.Group className="col-sm-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                {...register("password")}
              />
              <small className="text-danger">{errors.password?.message}</small>
            </Form.Group>
            <br />
            <Form.Group className="col-sm-2 mb-2">
              <Button type="submit" className="btn btn-success">
                Login
              </Button>
            </Form.Group>
            <Form.Text>
              Don't have an account?{" "}
              <NavLink exact to="/register" className="link">
                Register here
              </NavLink>
            </Form.Text>
          </Form>
        </div>
      </Container>
    </div>
  );
};
