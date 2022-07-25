import React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";

export const Login = () => {
  return (
    <div className="container">
      <div className="card green">
        <h2>BAKL Fantasy</h2>
        <h4>Pick Your Team and Join The Ranks!</h4>
      </div>
      <div className="card white">
        <button className="button sign-up">Sign Up</button>
        <button className="button sign-in">Sign In</button>
        <div></div>
        <div className="sign-title">
          <h5 className="sign-title-padding">Sign Up</h5>
          <h5 className="sign-title-padding">Sign In</h5>
        </div>
        <div className="form">
          <label>FULL NAME</label>
          <TextField
            id="outlined-basic"
            label="Enter your full name"
            variant="outlined"
          />
          <label>PASSWORD</label>
          <TextField id="outlined-basic" label="*******" variant="outlined" />
          <label>EMAIL</label>
          <TextField
            id="outlined-basic"
            label="Your email goes here"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};
