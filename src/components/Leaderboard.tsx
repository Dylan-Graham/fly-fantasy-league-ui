import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Leaderboard.css";
import { http_get } from "../lib";
import { useEffect, useState } from "react";

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

interface user {
  email: string;
  points: number;
  rank: number;
  first_name: string;
  last_name: string;
}

export const Leaderboard = () => {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    const getRanking = async () => {
      try {
        const rankingUrl = "/user";
        const response: any[] = await http_get(rankingUrl);
        setUsers(response);
      } catch (err) {
        console.error(err);
      }
    };
    getRanking();
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
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
            {users.map((user) => (
              <TableRow
                key={user.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.rank}</TableCell>
                <TableCell>
                  {user.first_name} {user.last_name}
                </TableCell>
                <TableCell align="right">{user.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
