import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Avatar, Paper } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"


const credits = 100;
function Profile() {
  const [color, setColor] = React.useState("#000");
  const [tier, setTier] = React.useState("NA")
  
  React.useEffect(() => {
    if (credits >= 75 && credits <150) {
      setColor("#CD7F32");
      setTier("Bronze")
    } else if (credits >= 150 && credits <250) {
      setColor("#C0C0C0");
      setTier("Silver")
    } else if (credits >= 250) {
      setColor("#FFD700");
      setTier("Gold")
    }
  
  }, [])
  
  

  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}

      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6, minHeight: "80vh" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Avatar sx={{ height: "56px", width: "56px" }} />
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
          mt={2}
        >
          Welcome
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Perseverance is not a long race; it is many short races one after the other
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={2}
        >
          <Grid item>
           <Box>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  align="center"
                >
                  User Profile
                  <WorkspacePremiumIcon sx={{ml: 1, color: {color}}}/>
                </Typography>
                <ul>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Email: abc@gmail.com
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Credits: {credits}
                   
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Tier: {tier}
                  </Typography>
                </ul>
                </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}



export default function MyProfile() {
    return <Profile />;
  }
  