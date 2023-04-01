import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { http_get } from "../../lib";
import { User } from "../../types/user";
import { Paper, Tab, Tabs } from "@mui/material";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import SurfingIcon from "@mui/icons-material/Surfing";
import SnowboardingIcon from "@mui/icons-material/Snowboarding";

const columns: GridColDef[] = [
  {
    field: "rank",
    headerName: "Rank",
    minWidth: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.points || "-"}`,
  },
  {
    field: "name",
    headerName: "User",
    minWidth: 200,
  },
  {
    field: "points",
    headerName: "Points",
    minWidth: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.points || "-"}`,
  },
];

export const Leaderboard = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [rows, setRows] = useState<User[]>([]);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getRanking = async () => {
      try {
        const rankingUrl = "/user";
        const token = await getAccessTokenSilently();
        const response: any[] = await http_get(rankingUrl, undefined, token);
        setRows(response);
      } catch (err) {
        console.error(err);
      }
    };
    getRanking();
  }, [getAccessTokenSilently]);

  const Table = () => {
    return (
      <>
        <Box sx={{ width: "650px", height: "400px" }}>
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
            }}
          >
            <DataGrid
              rows={rows}
              getRowId={(row) => row._id}
              columns={columns}
              hideFooterPagination={true}
              loading={rows.length === 0}
            />
          </Paper>
        </Box>
      </>
    );
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        sx={{
          width: "650px",
          backgroundColor: "white",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      >
        <Tab icon={<KitesurfingIcon />} label="Big Air" />
        <Tab icon={<SurfingIcon />} label="Wave" />
        <Tab icon={<SnowboardingIcon />} label="Freestyle" />
      </Tabs>
      <Table />
    </>
  );
};
