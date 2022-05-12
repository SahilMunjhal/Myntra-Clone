import { useState } from "react";
import { NavbarMenu } from "../NavbarMenu/navbarmenu";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navbar.css";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="navbar-header">
      <img
        className="navbar-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU"
      />

      <NavbarMenu />
      <div className="navbar-search">
        <input type="text" placeholder="Search for Products,Brands or More" />
      </div>
      <div className="navbar-right">
        <div>
          <PermIdentityIcon fontSize="medium" />
          <div className="ProfileIcon">
            <Button
              id="basicButton"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Profile
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
        <div>
          <FavoriteBorderIcon />
          <h3 className="navbar-wishlist">WishList</h3>
        </div>
        <div className="navbar-bag">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
          <h3>Bag</h3>
        </div>
      </div>
    </div>
  );
};
