import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
//import axios from "axios";

//const baseURL = "";

var today = new Date(),
  date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const schema = yup.object().shape({
  loanType: yup.string().required("This field is required"),
  loanAmount: yup
    .number().typeError("This field is required")
    .min(0, "Amount must be greater than zero")
    .positive("Amount cannot be negative")
    .required("This field is required"),
  loanApplyDate: yup
    .date().typeError("This field is required").min(date, "Date cannot be less than current date")
    .required("This field is required"),
  loanIssueDate: yup
    .date()
    .min(date, "Date cannot be less than current date")
    .required("This field is required").typeError("This field is required"),
  loanDuration: yup.string().required("This field is required"),
});

export const ApplyLoan = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [rof, setRof] = useState("Select loan type first");
  const[selecterror, setSelecterror]= useState(null);
  //const [post, setPost] = useState(null);
  const history = useHistory();
  const id = useSelector((state) => state);

  const onSubmit = (data) => {
    if(data.loanType === "select"){
      setSelecterror("This field is req");
    }
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

    if (data.loanType === "education") {
      history.push("/educationloan");
    } else {
      history.push("/personalloan");
    }
  };

  const rate = (type) => {
    if (type === "education") {
      setRof("8%");
    } else if (type === "personal") {
      setRof("10%");
    }
   
  };

  return (
    <div className="form-wrapper">
      <h3>Apply Loan</h3>
      <small className="text-muted">All fields are mandatory</small>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)} >
        <Form.Group className="col-sm-4">
          <Form.Label>Loan Type</Form.Label>
          <br />
          <select
            className="form-select"
            name="loanType"
            {...register("loanType")}
            onChange={(e) => rate(e.target.value)}
          >
            <option value="select">Select.. </option>
            <option value="education">Education</option>
            <option value="personal">Personal/Home</option>
          </select>
          <small className="text-danger">{selecterror}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Loan Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            name="loanAmount"
            {...register("loanAmount")}
          />
          <small className="text-danger">{errors.loanAmount?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Loan Apply Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="loanApplyDate"
            {...register("loanApplyDate", { required: true })}
          />
          <small className="text-danger">{errors.loanApplyDate?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Loan Issue Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="loanIssueDate"
            {...register("loanIssueDate")}
          />
          <small className="text-danger">{errors.loanIssueDate?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Rate of Interest</Form.Label>
          <Form.Control
            className="rofStyle"
            type="number"
            placeholder={rof}
            name="rateOfInterest"
            readOnly
            {...register("rateOfInterest")}
          />
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Duration of Loan</Form.Label>
          <select
            className="form-select"
            name="loanDuration"
            {...register("loanDuration", { required: true })}
          >
            <option value={null}>Select..</option>
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
          </select>

          <small className="text-danger">{errors.loanDuration?.message}</small>
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
