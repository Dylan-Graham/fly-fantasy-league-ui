import React from "react";
import Button from "@mui/material/Button";

export const Account = () => {
  return (
    <div>
      <p>Name: Alice Bob</p>
      <p>Email: a.bob@gmail.com</p>
      <Button variant="contained">Deactivate account</Button>
    </div>
  );
};
