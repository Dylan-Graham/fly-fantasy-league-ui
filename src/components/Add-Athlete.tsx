import React from "react";
import "./Add-Athlete.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface athlete {
  id: string;
  name: string;
}

export const AddAthlete = (props: any) => {
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
            {athletes.map((athlete: athlete) => (
              <Button
                key={athlete.id}
                variant="outlined"
                className="athleteButton"
                onClick={() => handleClose(athlete.name)}
              >
                {athlete.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
