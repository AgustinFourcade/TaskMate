import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";

const customTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#9C27B0",
      contrastText: "#FFFFFF"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}));

export default function CustomThemeAppBarOption() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar color={"secondary"} style={{ marginTop: 0 }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            TaskMate
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
