import React from "react";
import { Typography, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

type Props = {
  name: string;
  path: string;
  action: (e: any) => void;
};
const Navbar: React.FC<Props> = ({ name, path, action }) => {
  const location = useLocation();
  const isActive =
    path === "/" ? location.pathname === "/" : location.pathname.includes(path);

  return (
    <Link to={path} onClick={action}>
      <div>
        <Typography
          style={{ fontSize: "20px" }}
          className={isActive ? "active" : ""}
        >
          {name}
        </Typography>
      </div>
    </Link>
  );
};

export default Navbar;
