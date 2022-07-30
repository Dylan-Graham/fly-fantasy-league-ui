import React from "react";
import "./Add-Athlete.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

export const AddAthlete = () => {
  return (
    <div className="add-athlete-button">
      <Button variant="outlined" size="small">
        <AddIcon fontSize="small" />
      </Button>
      <p className="add-athlete-text">Add athlete</p>
    </div>
  );
};
