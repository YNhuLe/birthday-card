import React from "react";

function Footer() {
  return (
    <div
      elevation={3}
      style={{
        backgroundColor: "grey",
        position: "absolute",
        bottom: "0",
        width: "100%",
        textAlign: "center",
      }}>
      Copyright &copy;{new Date().getFullYear()} Jenny
    </div>
  );
}
export default Footer;
