import React from "react";
import Paper from "@mui/material/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} elevation={3}>
      <img
        style={{ width: "50px" }}
        src="https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png"
        alt="react"></img>
      <h1 className="site-name"> React Application</h1>
    </Paper>
  );
}

export default Header;
