import { useEffect, useState } from "react";
import { NavbarMenu } from "../NavbarMenu/navbarmenu";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { homeData } from "../../Redux/action";

import { useDispatch,useSelector } from "react-redux";

import "./navbar.css";
import axios from "axios";


export const Navbar = () => {
  
  const dispatch=useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [auth,SetAuth]=useState(false);
  const [search,setSearch]=useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSearch=(event)=>{
    if(event.target.value===""){
      return;
    }
    let temp=[];
    const regex = new RegExp(`${event.target.value}`);
      axios.get(`http://localhost:2345/products`)
      .then(({data})=>{
      temp=data.filter((elem)=>{
           const result=regex.exec(elem.brand);
           if(result){
              return elem.brand===result.input;
           }
       });
       if(temp.length==0){
         temp=[{url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDk4YsZZ7jeNmPfAxHT3iIyUxfKnEr8Ecdg&usqp=CAU",status:0}]
       }
        dispatch(homeData(temp));
      })
  }
  
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'));
    if(user){
      SetAuth(true);
    }
  },[]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout=()=>{
    console.log('coming');
    localStorage.setItem('user',JSON.stringify(null));
    SetAuth(false);
    setAnchorEl(null);
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <div className="navbar-header-container">
       <div className="navbar-header">
       <Link to="/" >
        <img
         className="navbar-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU"
        />
     </Link>

      <NavbarMenu />
      <div className="navbar-search">
        <input type="text" placeholder="Search for Products,Brands or More" onChange={handleSearch}/>
      </div>
      <div className="navbar-right">
        <div>
          {}
          <PermIdentityIcon fontSize="medium" />
          <div className="ProfileIcon">
            <Button
              id="navbar-profile"
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
              {
                auth ? <div>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handlelogout}>Logout</MenuItem>
                </div>  
                : <div>
                    <MenuItem  onClick={handleClose}><Link className="navbar-signUp" to="/signUp">Sign-Up</Link></MenuItem>
                    <MenuItem  onClick={handleClose}><Link className="navbar-logIn" to={`/logIn`}>Log-In</Link></MenuItem>
                </div> 
              }         
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

    </div>
  );
};
