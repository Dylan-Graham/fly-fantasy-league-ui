import React from "react";
import "./Athlete-Picker.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { athlete } from "./Picks";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const AthletePicker = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [athleteName, setAthleteName] = React.useState("Add Athlete");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (athleteName: string) => {
    setAthleteName(athleteName);
    setOpen(false);
  };

  const athletes = props.athletes;

  return (
    <div className="add-athlete-button">
      <Button variant="outlined" size="small" onClick={handleClickOpen}>
        <AddIcon fontSize="small" />
      </Button>
      <p className="add-athlete-text">{athleteName}</p>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="pick-dialog-title"
        aria-describedby="pick-dialog-description"
      >
        <DialogTitle id="pick-dialog-title">{"Pick an Athlete"}</DialogTitle>
        <DialogContent>
          <div className="athletes">
            <div className="column-header prof">
              <div className="cell"></div>
              <div className="cell-name">Name</div>
              <div className="cell">Position</div>
              <div className="cell">Points</div>
            </div>
            {athletes.map((athlete: athlete) => (
              <div>
                <a
                  key={athlete.id}
                  onClick={() => handleClose(athlete.name)}
                  className="profile"
                >
                  <img
                    src={athlete.url}
                    alt={athlete.name}
                    className="profile-picture"
                  ></img>
                  <div className="cell-name">{athlete.name}</div>
                  <div className="cell">{athlete.position} </div>
                  <div className="cell">{athlete.score}</div>
                </a>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
