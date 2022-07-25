import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MoreIcon from "@mui/icons-material/MoreVert";
import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/picks" className="mobile-link">
        <MenuItem>
          <IconButton size="large" aria-label="picks" color="inherit">
            <LocalActivityIcon />
          </IconButton>
          <p>Picks</p>
        </MenuItem>
      </Link>
      <Link to="leaderboard" className="mobile-link">
        <MenuItem>
          <IconButton size="large" aria-label="leaderboard" color="inherit">
            <LeaderboardIcon />
          </IconButton>
          <p>Leaderboard</p>
        </MenuItem>
      </Link>
      <Link to="/account" className="mobile-link">
        <MenuItem>
          <IconButton
            size="large"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Account</p>
        </MenuItem>
      </Link>
    </Menu>
  );

  return (
    <Box className="TopBox">
      <AppBar position="static" style={{ background: "#57bd96" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Fly Fantasy League
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="/picks" className="link">
              <IconButton size="large" aria-label="picks" color="inherit">
                <LocalActivityIcon />
              </IconButton>
            </Link>
            <Link to="/leaderboard" className="link">
              <IconButton size="large" aria-label="leaderboard" color="inherit">
                <LeaderboardIcon />
              </IconButton>
            </Link>
            <Link to="/account" className="link">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
};
