import { makeStyles, createStyles } from '@material-ui/core';

const AppStylesheet = makeStyles(theme => createStyles({
  appBackground: {
    background: "linear-gradient(to right, #191919, #333333)"
  },
  particlesInit: {
    position: "absolute",
    top: "0px",
    left: "0px",
    height: "100%",
    width: "100%"
  }
}));

export default AppStylesheet;