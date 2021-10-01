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
  courseFee: yup
    .number()
    .typeError("This field is required")
    .required("This field is required"),
  courseName: yup.string().required("This field is required"),
  fatherName: yup.string().required("This field is required"),
  fatherOccupation: yup.string().required("This field is required"),
  fatherTotalExp: yup
    .number()
    .typeError("This field is required")
    .required("This field is required"),

  fatherExpCurr: yup.string().required("This field is required"),
  rationNumber: yup
    .number()
    .typeError("This field is required")
    .required("This field is required"),
  annualIncome: yup
    .number()
    .typeError("This field is required")
    .required("This field is required"),
});

export const EducationLoan = () => {
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

    alert("Application to Education loan was succesfull");
    history.push("/menu");
  };

  return (
    <div className="form-wrapper">
      <h3>Education Loan Details</h3>
      <small className="text-muted">All fields are mandatory</small>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="col-sm-4">
          <Form.Label>Course Fee</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter fee"
            name="courseFee"
            {...register("courseFee")}
          />
          <small className="text-danger">{errors.courseFee?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Course</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course"
            name="courseName"
            {...register("courseName")}
          />
          <small className="text-danger">{errors.courseName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Father Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="fatherName"
            {...register("fatherName")}
          />
          <small className="text-danger">{errors.fatherName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Father Occupation</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter occupation"
            name="fatherOccupation"
            {...register("fatherOccupation")}
          />
          <small className="text-danger">
            {errors.fatherOccupation?.message}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Father's total experience</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter in years"
            name="fatherTotalExp"
            {...register("fatherTotalExp")}
          />
          <small className="text-danger">
            {errors.fatherTotalExp?.message}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Father's experience with current company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: 6 months or 2 years"
            name="fatherExpCurr"
            {...register("fatherExpCurr")}
          />
          <small className="text-danger">{errors.fatherExpCurr?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Ration Card No. </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            name="rationNumber"
            {...register("rationNumber")}
          />
          <small className="text-danger">{errors.rationNumber?.message}</small>
        </Form.Group>
        <br />
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
        <Form.Group>
          <Button className="btn btnStyle" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
