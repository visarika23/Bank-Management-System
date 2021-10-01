import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addID } from "../Redux/Action";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import axios from "axios";

const schema = null;

export const UpdateDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const id = useSelector((state) => state);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-wrapper">
      <h3>Update Details</h3>
      <p className="text-muted">Enter fields to be updated</p>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="col-sm-4">
          <Form.Label>Customer ID</Form.Label>
          <Form.Control
            type="text"
            placeholder={id.user_ID}
            name="userId"
            {...register("userId")}
            readOnly
          />
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            {...register("fullName", { required: true })}
          />
          <small className="text-danger">
            {errors.fullName && "This field is required"}
          </small>
        </Form.Group>

        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Account Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter account number"
            name="accNum"
            {...register("accNum")}
          />
          <small className="text-danger">{errors.fullName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country"
            {...register("country", { required: true })}
          />
          <small className="text-danger">
            {errors.country && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            name="state"
            {...register("state", { required: true })}
          />

          <small className="text-danger">
            {errors.state && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Gender</Form.Label>
          <select name="gender" {...register("gender")} className="form-select">
            <option>Select..</option>
            <option value="male">Male</option>
            <option value="female"> Female</option>
            <option value="other"> Other</option>
          </select>

          <small className="text-danger">
            {errors.gender && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter DOB"
            name="dob"
            {...register("dob")}
          />
          <small className="text-danger">
            {errors.dob && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Branch Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter branch name"
            name="branchName"
            {...register("branchName")}
          />
          <small className="text-danger">
            {errors.branchName && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Identification Proof Type</Form.Label>
          <select name="idType" className="form-select" {...register("idType")}>
            <option>Select..</option>
            <option value="aadhar">Father</option>
            <option value="drivingLicence"> Driving Liscence</option>
            <option value="passport"> Passport</option>
            <option value="pan"> PAN</option>
            <option value="voterId"> Voter ID</option>
          </select>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Identification Document No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter number"
            name="idNumber"
            {...register("idNumber")}
          />
          <small className="text-danger">
            {errors.idNumber && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Reference Account Holder name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="refAccName"
            {...register("refAccName")}
          />
          <small className="text-danger">
            {errors.refAccName && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Reference Account Holder Account No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter account number"
            name="refAccNumber"
            {...register("refAccNumber")}
          />
          <small className="text-danger">
            {errors.refAccNumber && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Reference Account Holder Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="refAccAddress"
            {...register("refAccAddress")}
          />
          <small className="text-danger">
            {errors.refAccAddress && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Guardian Type</Form.Label>

          <select
            name="guardianType"
            {...register("guardianType", { required: true })}
            className="form-select"
          >
            <option>Select..</option>
            <option value="father">Father</option>
            <option value="husband"> Husband</option>
          </select>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Guardian Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter guardian name"
            name="guardianName"
            {...register("guardianName", { required: true })}
          />
          <small className="text-danger">
            {errors.guardianName && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            {...register("address", { required: true })}
          />
          <small className="text-danger">
            {errors.address && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Citizenship</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Citizenship"
            name="citizenship"
            {...register("citizenship", { required: true })}
          />
          <small className="text-danger">
            {errors.citizenship && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...register("email", { required: true })}
          />
          <small className="text-danger">
            {errors.email && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Marital Status</Form.Label>
          <select
            name="maritalStatus"
            {...register("maritalStatus")}
            className="form-select"
          >
            <option>Select..</option>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
          </select>
          <small className="text-danger">
            {errors.maritalStatus && "This field is required"}
          </small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter contact"
            name="contactNo"
            {...register("contactNo", { required: true })}
          />
          <small className="text-danger">
            {errors.contact && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Account Type</Form.Label>
          <select
            name="accType"
            className="form-select"
            {...register("accType")}
          >
            <option>Select..</option>
            <option value="savings">Savings</option>
            <option value="current"> Current</option>
          </select>

          <small className="text-danger">
            {errors.accType && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Citizen status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter citizen status"
            name="citizenStatus"
            {...register("citizenStatus")}
          />
          <small className="text-danger">
            {errors.citizenStatus && "This field is required"}
          </small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-2">
          <Button type="submit" className="btn btnStyle">
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
