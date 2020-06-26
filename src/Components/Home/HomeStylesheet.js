import { makeStyles, createStyles } from '@material-ui/core';

const HomeStylesheet = makeStyles(theme => createStyles({
  headerColor: {
    color: theme.palette.red
  },
  slider: {
    position: "relative",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center",
    overflowY: "hidden",
    overflowX: "hidden"
  },
  slide: {
    position: "relative",
    top: "0",
    left: "0",
    height: "100%",
    minWidth: "100%",
    "-moz-transition": "transform ease-in-out 0.6s",
    transition: "transform ease-in-out 0.6s"
  },
}));

export default HomeStylesheet;