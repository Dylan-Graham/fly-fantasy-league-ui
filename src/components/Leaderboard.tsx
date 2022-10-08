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

interface user {
  email: string;
  points: number;
  rank: number;
  name: string;
  picks: any[];
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
              <TableCell>User</TableCell>
              <TableCell>Active pick</TableCell>
              <TableCell align="right">Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.email}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.rank || "Unranked"}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.picks != null ? "Yes" : "No"}</TableCell>
                <TableCell align="right">{user.points || 0}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
