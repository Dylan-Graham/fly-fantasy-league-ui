import { useAuth0 } from "@auth0/auth0-react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { http_get } from "../../lib";
import { User } from "../../types/user";
import { Paper, Tab, Tabs } from "@mui/material";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import SurfingIcon from "@mui/icons-material/Surfing";
import styled from "@emotion/styled";
import { mobileWidth } from "../../style/global";

const columns: GridColDef[] = [
  {
    field: "rank",
    headerName: "Rank",
    minWidth: 50,
    flex: 0.3,
    valueGetter: (params: GridValueGetterParams) => `${params.row.rank || "-"}`,
  },
  {
    field: "name",
    headerName: "User",
    minWidth: 50,
    flex: 0.3,
  },
  {
    field: "points",
    headerName: "Points",
    minWidth: 50,
    flex: 0.3,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.points || "-"}`,
  },
];

export const Leaderboard = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [rows, setRows] = useState<User[]>([]);
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
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
        <MyBox>
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
            }}
          >
            <DataGrid
              rows={rows}
              getRowId={(row) => row._id}
              columns={columns}
              hideFooterPagination={true}
              loading={rows.length === 0}
              rowHeight={35}
              sx={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
            />
          </Paper>
        </MyBox>
      </>
    );
  };

  return (
    <>
      <MyTabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab icon={<KitesurfingIcon />} label="Global leaderboard" />
        {/* <Tab icon={<SurfingIcon />} disabled={true} label="(coming soon)" /> */}
        {/* <Tab
          icon={<SnowboardingIcon />}
          disabled={true}
          label="Freestyle (coming soon)"
        /> */}
      </MyTabs>
      <Table />
    </>
  );
};

const normalWidth = "650px";

const MyBox = styled(Box)({
  width: normalWidth,
  height: "400px",
  "@media (max-width: 768px)": {
    width: mobileWidth,
  },
});

const MyTabs = styled(Tabs)({
  width: normalWidth,
  backgroundColor: "white",
  borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px",
  "@media (max-width: 768px)": {
    width: mobileWidth,
  },
});
