import React from "react";
import { Container } from "react-bootstrap";
import "./Style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { LoginForm } from "./LoginForm";
import { RegistrationForm } from "./RegistrationForm";
import { MainMenu } from "./MainMenu";
import { Route, Switch } from "react-router-dom";
import { ApplyLoan } from "./ApplyLoan";
import { EducationLoan } from "./EducationLoan";
import { PersonalLoan } from "./PersonalLoan";
import { UpdateDetails } from "./UpdateDetails";

export const BodyContainer = () => {
  return (
    <Container className="body-container">

 
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegistrationForm} />
          <Route exact path="/menu" component={MainMenu} />
          <Route exact path="/loan" component={ApplyLoan} />
          <Route exact path="/educationloan" component={EducationLoan} />
          <Route exact path="/personalloan" component={PersonalLoan} />
          <Route exact path="/update" component={UpdateDetails} />
        </Switch>
  
    </Container>
  );
};
