import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
//import axios from "axios";

//const baseURL = "";

const schema = yup.object().shape({
  annualIncome: yup.number().typeError("This field is required").required("This field is required"),
  companyName: yup
    .string()
    .required("This field is required"),
  designantion: yup.string().required("This field is required"),
  totalExp: yup.number().typeError("This field is required").required("This field is required"),
  experienceCurr: yup.string().required("This field is required"),
});

export const PersonalLoan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const id = useSelector((state) => state);

  const onSubmit = async (data) => {
    console.log(data);

    let formdata = { ...data, userId: id.user_ID };
    console.log(formdata);

    //Sending form data to api

    // axios
    // .post(baseURL, formdata)
    // .then((response) => {
    //   setPost(response.data);
    // });

    // if (!post){
    //   alert("There has been some error! Please try again.");
    // }
    // else{
    //   alert("Application to loan was succesfull");
    // }

    alert("Application to Personal loan was succesfull");
    history.push("/menu");
  };

  return (
    <div className="form-wrapper">
      <h3>Personal/Home Loan Details</h3>
      <small className="text-muted">All fields are mandatory</small>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="col-sm-4">
          <Form.Label>Annual Income</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter income"
            name="annualIncome"
            {...register("annualIncome")}
          />
          <small className="text-danger">{errors.annualIncome?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="companyName"
            {...register("companyName")}
          />
          <small className="text-danger">{errors.companyName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter designation"
            name="designantion"
            {...register("designantion")}
          />
          <small className="text-danger">{errors.designantion?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Total experience</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter in years"
            name="totalExp"
            {...register("totalExp")}
          />
          <small className="text-danger">{errors.totalExp?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Experience with current company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: 6 months or 2 years"
            name="experienceCurr"
            {...register("experienceCurr")}
          />
          <small className="text-danger">
            {errors.experienceCurr?.message}
          </small>
        </Form.Group>
        <br />
        <br />
        <Form.Group className="mb-3">
          <Button className="btn btnStyle" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
