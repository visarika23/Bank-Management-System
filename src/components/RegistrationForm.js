import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addID, addAccount, addCredential } from "../Redux/Action";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import axios from "axios";

//const baseURL= ""
let isflag = true;
const schema = yup.object().shape({
  fullName: yup
    .string()
    .required("This field is required")
    .matches(/^[a-zA-Z ]*$/, "Name can contain only alphabets and spaces"),
  userName: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
  guardianType: yup.string().required("This field is required"),
  guardianName: yup.string().required("This field is required"),
  address: yup.string().required("This field is required"),
  citizenship: yup.string().required("This field is required"),
  state: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Email not in correct format")
    .required("This field is required"),
  gender: yup.string().required("This field is required"),
  maritalStatus: yup.string().required("This field is required"),
  contactNo: yup
    .string()
    .required("This field is required")
    .min(10, "Contact Number must be of 10 digits")
    .max(10, "Contact Number must be of 10 digits"),
  dob: yup
    .date()
    .typeError("This field is required")
    .required("This field is required"),
  accType: yup.string().required("This field is required"),
  branchName: yup.string().required("This field is required"),
  initialDepositAmount: yup.number()
    // .when('isSavings',{
    //   is: true,
    //   then: yup.number().typeError("This field is required").required("This field is required").min(5000,"Minimum deposit amount for savings account is 5000"),
    //   otherwise: yup.number().typeError("This field is required").required("This field is required").min(0,"Minimum deposit amount for salary account is 0")
    // })
    .typeError("This field is required")
    .required("This field is required"),
  idType: yup.string().required("This field is required"),
  idNumber: yup.string().required("This field is required").min(12, "Invalid ID number").matches(/^[0-9a-zA-Z_.-]/, "Special characters or spaces not allowed"),
  refAccName: yup
    .string()
    .required("This field is required")
    .matches(/^[a-zA-Z ]*$/, "Name can contain only alphabets and spaces"),
  refAccNumber: yup.string().required("This field is required"),
  refAccAddress: yup.string().required("This field is required"),
});

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [citizenStatus, setCitizenStatus] = useState(null);
  const [msg, setMsg] = useState(null);
  const [iniAmt, setIniAmt]= useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  let show = false;

  const calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    //console.log(age_now);
    return age_now;
  };
  const ageValidate = (dob) => {
    //Age Validation
    let age = calculate_age(dob);
    if (age <= 18) {
      setCitizenStatus("Minor");
      return false;
    } else if (age >= 96) {
      return false;
    } else if (age >= 18 && age <= 60) {
      setCitizenStatus("Normal");
      return true;
    } else if (age >= 60 && age <= 96) {
      setCitizenStatus("Senior Citizen");
      return true;
    }
  };

  const minDepositAmount = (type) => {
    if (type === "savings") {
      isflag = true;
      setMsg("Minimum deposit amount for savings account is 5000");
      setIniAmt(5000);
    } else if (type === "salary") {
      isflag= false;
      setMsg("Minimum deposit amount for salary account is 0");
      setIniAmt(0);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    let agelimit = ageValidate(data.dob);
    if (agelimit === false) {
      alert("You are not eligible for loan");
    }

    if (data.guardianType === "Select..") {
      show = true;
    }

    // Generate Customer id
    let id = "R-" + Math.floor(Math.random() * (999 - 100 + 1) + 100);
    let formdata = { ...data, userId: id };
    dispatch(addID(id));

    //Generate Account Number
    let accNum = Math.floor(
      Math.random() * (9999999999999999 - 1000000000000000 + 1) +
        1000000000000000
    );
    formdata = { ...data, accountNo: accNum };
    dispatch(addAccount(accNum));
    console.log(formdata);
    let cred ={
      userName : data.userName,
      password : data.password
    }

    dispatch(addCredential(cred));

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
    //   alert("You have been successfully registered with ID:" + id);
    // }

    alert("You have been successfully registered with ID:" + id);

    history.push("/menu");
  };

  return (
    <div className="form-wrapper">
      <h3>Register Here</h3>
      <p className="text-muted">All fields are mandatory</p>
      <hr />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="col-sm-4">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="fullName"
            {...register("fullName")}
          />
          <small className="text-danger">{errors.fullName?.message}</small>
        </Form.Group>
        <br />
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
        <Form.Group className="col-sm-4">
          <Form.Label>Guardian Type</Form.Label>
          {/* <Form.Select
            
            {...register("guardianType", { required: true })}
          >
            <option value="null">Select..</option>
            <option value="father">Father</option>
            <option value="husband">Husband</option>
          </Form.Select>
          <small className="text-danger">
            {errors && errors.guardianType && "This field is required"}
          </small> */}

          <select
            name="guardianType"
            {...register("guardianType")}
            className="form-select"
          >
            <option>Select..</option>
            <option value="father">Father</option>
            <option value="husband"> Husband</option>
          </select>
          {/* <small className={show ? "error" : "notshow"}>
            This field is required
          </small> */}
          <small className="text-danger">{errors.guardianType?.message}</small>
        </Form.Group>
        <br />

        <Form.Group className="col-sm-4">
          <Form.Label>Guardian Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter guardian name"
            name="guardianName"
            {...register("guardianName")}
          />
          <small className="text-danger">{errors.guardianName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            name="address"
            {...register("address")}
          />
          <small className="text-danger">{errors.address?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Citizenship</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Citizenship"
            name="citizenship"
            {...register("citizenship")}
          />
          <small className="text-danger">{errors.citizenship?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter State"
            name="state"
            {...register("state")}
          />

          <small className="text-danger">{errors.state?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            name="country"
            {...register("country")}
          />
          <small className="text-danger">{errors.country?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            {...register("email")}
          />
          <small className="text-danger">{errors.email?.message}</small>
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

          <small className="text-danger">{errors.gender?.message}</small>
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
          <small className="text-danger">{errors.maritalStatus?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Contact No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter contact"
            name="contactNo"
            {...register("contactNo")}
          />
          <small className="text-danger">{errors.contactNo?.message}</small>
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
          <small className="text-danger">{errors.dob?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Account Type</Form.Label>
          <select
            name="accType"
            className="form-select"
            {...register("accType")}
            onChange={(e) => minDepositAmount(e.target.value)}
          >
            <option>Select..</option>
            <option value="savings">Savings</option>
            <option value="salary">Salary</option>
          </select>

          <small className="text-danger">{errors.accType?.message}</small>
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
          <small className="text-danger">{errors.branchName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Citizen status</Form.Label>
          <Form.Control
            type="text"
            placeholder={citizenStatus}
            name="citizenStatus"
            {...register("citizenStatus")}
            readOnly
          />
          <small className="text-danger">{errors.citizenStatus?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Initial Deposit Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            min={iniAmt}
            name="initialDepositAmount"
            {...register("initialDepositAmount")}
          />
          <small className="text-muted">
            {msg}
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
          </select>
          <small className="text-danger">{errors.idType?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Identification Document No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter number"
            name="idNumber"
            {...register("idNumber")}
          />
          <small className="text-danger">{errors.idNumber?.message}</small>
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
          <small className="text-danger">{errors.refAccName?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-4">
          <Form.Label>Reference Account Holder Account No.</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter account number"
            name="refAccNumber"
            {...register("refAccNumber")}
          />
          <small className="text-danger">{errors.refAccNumber?.message}</small>
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
          <small className="text-danger">{errors.refAccAddress?.message}</small>
        </Form.Group>
        <br />
        <Form.Group className="col-sm-2">
          <Button type="submit" className="btn btnStyle">
            Submit
          </Button>
        </Form.Group>
        <br />
        <Form.Text>
          {" "}
          Already have an account?{" "}
          <NavLink exact to="/" className="link">
            Login
          </NavLink>
        </Form.Text>
      </Form>
    </div>
  );
};
