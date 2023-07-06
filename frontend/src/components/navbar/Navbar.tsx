import React from "react"
import useBreakpoint from "../../hook/useBreakpoint";
import { IconButton, Switch, Typography, useTheme } from "@mui/material";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
// type Props = { setDark: Function };
//<Props>
const Navbar: React.FC = () => {
  //({ setDark })
  // const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const breakpoint = useBreakpoint();
  const toggleExpanded = () => {
    setExpanded(false);
  };

  return (
    <div className={styles.nav}>
      {/* {expanded && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: -1 }}
          onClick={toggleExpanded}
        />
      )}
      {breakpoint < 600 ? (
        <IconButton
          sx={{ zIndex: 1000 }}
          onClick={() => {
            setExpanded((expanded) => !expanded);
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        ""
      )} */}

      <NavbarItem action={toggleExpanded} name="Home" path="/home" />
      <NavbarItem action={toggleExpanded} name="About" path="/about" />
      <NavbarItem action={toggleExpanded} name="Project" path="/project" />
      <NavbarItem action={toggleExpanded} name="Contact" path="/contact" />
    </div>
  );
};

export default Navbar;
