import { Avatar, Box, Typography } from "@mui/material";
import pic from "../../pic/fxh.jpg";
import Typewriter from "react-ts-typewriter";
import { bio } from "../content/Biodata.js";
import { Divider } from "@mui/material";
type Props = { position?: boolean };
const Bio: React.FC<Props> = ({ position }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
      }}
    >
      <Box sx={{ marginRight: "20px", marginBottom: { xs: "20px" } }}>
        <Avatar
          alt="profile pic"
          src={pic}
          sx={{
            width: { xs: 200, md: 300 },
            height: { xs: 200, md: 300 },
            margin: "0 20px",
            boxShadow: 6,
          }}
        />
      </Box>

      <Box>
        <Typography
          variant="h3"
          sx={{
            marginBottom: "10px",
            fontWeight: "bold",

            fontSize: { xs: "1.25rem", md: "2.5rem" },
          }}
        >
          <Typewriter
            loop={true}
            speed={45}
            delay={2000}
            text="Phurichaya Khemvaraporn (Fah)"
          />
        </Typography>
        {/* {position ? (
          <Box display="flex" flexDirection="row">
            <Divider
              orientation="vertical"
              sx={{
                marginBottom: "10px",
                height: "30px",
                width: "5px",
                display: "flex",
                alignItems: "start",
                backgroundColor: "#EF5DA8",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h5"
              color="#EF5DA8"
              sx={{ fontSize: { xs: "1.25rem", md: "1.75rem" } }}
            >
              {bio.position}
            </Typography>
          </Box>
        ) : (
          ""
        )} */}
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "1.0rem", md: "1.75rem" } }}
        >
          {bio.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default Bio;
