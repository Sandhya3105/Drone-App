import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import "./HomePage.css";

export default function HomePage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mobile-view" style={{
      backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/000/128/801/small/free-rice-field-illustration.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="container">
        <div className="header">
          <h1 className="title">Dashboard</h1>
          <div className="profile">
            <Avatar
              src="profile_icon.png"
              alt="Profile"
              onClick={handleProfileClick}
              style={{ cursor: "pointer" }}
            />
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: "250px",
                  padding: "10px",
                  borderRadius: "12px",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className="profileMenu">
                <Avatar
                  src="profile_icon.png"
                  alt="Profile"
                  style={{ width: "60px", height: "50px", marginBottom: "10px" }}
                />
                <Typography variant="h6" style={{ fontWeight: "bold"}}>
                  Farmer Name
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  farmeremail@gmail.com
                </Typography>
              </div>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>About Us</MenuItem>
              <MenuItem onClick={handleClose}>Recorded Data</MenuItem>
              <MenuItem onClick={handleClose}>Notifications</MenuItem>
              <MenuItem onClick={handleClose}>FAQ</MenuItem>
              <MenuItem onClick={handleClose}>Sign Out</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="cardGrid">
        <div className="card">
          <img src="scan.png" alt="Scan" width="70" height="70" />
          <p className="cardTitle">Scan Crop Images</p>
        </div>

          <div className="card">
            <img src="connect_drone.png" alt="Drone" className="cardMedia" />
            <p className="cardTitle">Connect to Drone Camera</p>
          </div>
          <div className="card">
            <img src="upload.png" alt="Upload" className="cardMedia" />
            <p className="cardTitle">Upload Crop images</p>
          </div>
          <div className="card">
            <img src="survey.png" alt="Survey" className="cardMedia" />
            <p className="cardTitle">View Surveyed Areas</p>
          </div>
          <div className="card">
            <img src="analysis.png" alt="Analysis" className="cardMedia" />
            <p className="cardTitle">Ananlysis Dashboard</p>
          </div>
          <div className="card">
            <img src="suggestion.png" alt="Suggestions" className="cardMedia" />
            <p className="cardTitle">Suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
