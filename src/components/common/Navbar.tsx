import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BorderClearIcon from "@mui/icons-material/BorderClear";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { IconButton, Menu, MenuItem } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const[menuIcon, setMenuIcon] = useState(false);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  function toggleMenuIcon(){
      setMenuIcon(!menuIcon);
  }
  
  return (
    <nav className="w-auto h-auto bg-blue-600 flex justify-between items-center px-2">
      <div className="hidden w-full lg:w-1/3 md:flex justify-start items-center gap-1 py-1">
        <div className="w-auto h-auto p-2 bg-blue-400 rounded-md flex justify-center items-center">
          <BorderClearIcon
            className="text-sm text-gray-200 cursor-pointer"
            fontSize="small"
          />
        </div>

        <div className="w-auto h-auto p-2 bg-blue-400 rounded-md flex justify-center items-center">
          <HomeOutlinedIcon className="text-sm text-gray-200 cursor-pointer " />
        </div>

        <div className="w-auto h-auto p-2 bg-blue-400 rounded-md gap-2 cursor-pointer flex justify-center items-center">
          <DashboardOutlinedIcon className="text-white" fontSize="small" />
          <small className="font-bold text-white">Boards</small>
        </div>

        <div
          className="hidden w-auto h-auto px-1 bg-blue-400 rounded-md cursor-pointer
       md:flex justify-between items-center"
        >
          <OutlinedInput
            placeholder="Jump to ..."
            autoFocus
            className="h-9"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-input": {
                fontSize: "0.875rem",
                color: "white",
              },
            }}
          />
          <SearchOutlinedIcon fontSize="small" className="text-white" />
        </div>
      </div>

      {/* Start Hamburger Menu  */}
      <IconButton className="lg:hidden" onClick={toggleMenuIcon}>
        <MenuIcon className="text-white"/>
      </IconButton>
       {/* End Hamburger Menu  */}

      <div className="w-full lg:w-1/3 flex flex-start items-center gap-2 cursor-pointer">
        <DashboardOutlinedIcon className="text-blue-400 " fontSize="medium" />
        <h1 className="text-blue-400 font-bold text-2xl">Trello</h1>
      </div>

      <div className="w-full lg:w-1/3 flex justify-end items-center gap-1 py-1">
        <div
          className="hidden w-auto h-auto p-2 bg-blue-400 rounded-md 
      md:flex justify-center items-center"
        >
          <AddOutlinedIcon className="text-sm text-gray-200 cursor-pointer " />
        </div>

        <div
          className="hidden w-auto h-auto p-2 bg-blue-400 rounded-md 
      md:flex justify-end items-center"
        >
          <ErrorOutlineOutlinedIcon className="text-sm text-gray-200 cursor-pointer " />
        </div>

        <div
          className="hidden w-auto h-auto p-2 bg-blue-400 rounded-md 
      md:flex justify-end items-center"
        >
          <NotificationsNoneOutlinedIcon className="text-sm text-gray-200 cursor-pointer " />
        </div>

        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle className="text-white" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
