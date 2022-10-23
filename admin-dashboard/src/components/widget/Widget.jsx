import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React from "react";
import "./widget.scss";

const Widget = () => {
  return (
    <div className="widget">
      <div className="left">
        <div className="title">USERS</div>
        <div className="counter">21312</div>
        <div className="link">See all users</div>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowDownOutlinedIcon />
          20%
        </div>
        <PersonOutlinedIcon />
      </div>
    </div>
  );
};

export default Widget;
