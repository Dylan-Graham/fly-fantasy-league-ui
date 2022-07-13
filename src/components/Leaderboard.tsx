import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  username: string,
  events: number,
  wins: number,
  points: number,
  rank: number
) {
  return { username, events, wins, points, rank };
}

const rows = [
  createData("Zingers", 10, 91, 45, 1),
  createData("Donver", 10, 81, 33, 2),
  createData("FrothigRothig", 9, 72, 33, 2),
  createData("Melkskom", 8, 80, 27, 4),
  createData("Magz", 5, 94, 19, 5),
];

export const Leaderboard = () => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Events</TableCell>
            <TableCell align="right">Wins (%)</TableCell>
            <TableCell align="right">Points</TableCell>
            <TableCell align="right">Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.username}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.events}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.points}</TableCell>
              <TableCell align="right">{row.rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
