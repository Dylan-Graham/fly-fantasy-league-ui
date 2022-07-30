import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Leaderboard.css";

function createData(username: string, points: number, rank: number) {
  return { username, points, rank };
}

const rows = [
  createData("Your Username", 22, 5),
  createData("Maguina", 45, 1),
  createData("Donver", 33, 2),
  createData("FrothigRothig", 33, 3),
  createData("Melkskom", 27, 4),
  createData("Rob", 19, 6),
];

export const Leaderboard = () => {
  return (
    <div>
      <h2>Leaderboard</h2>
      <div className="leaderboards">
        <p className="leaderboards-title">Overall</p>
        <p className="leaderboards-title">By Event</p>
      </div>
      <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Team</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.username}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.rank}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell align="right">{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
