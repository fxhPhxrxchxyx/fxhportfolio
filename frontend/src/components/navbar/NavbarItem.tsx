import React from "react";
import { Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  action: (e: any) => void;
};
const Navbar: React.FC<Props> = ({ name, path, action }) => {
  return (
    <Link to={path} style={{ textDecoration: "none" }} onClick={action}>
      <div>
        <Typography style={{ fontSize: "20px" }}>{name}</Typography>
      </div>
    </Link>
  );
};

export default Navbar;
