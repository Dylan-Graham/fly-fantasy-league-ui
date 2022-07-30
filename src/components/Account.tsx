import React from "react";
import Button from "@mui/material/Button";
import "./Account.css";

export const Account = () => {
  return (
    <div>
      <div className="account">
        <p className="text">Name: Alice Bob</p>
        <p className="text">Email: a.bob@gmail.com</p>
      </div>
      <Button variant="contained" color="error" className="deactivate-button">
        Deactivate account
      </Button>
    </div>
  );
};
