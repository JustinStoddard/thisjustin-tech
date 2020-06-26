import { makeStyles, createStyles } from '@material-ui/core';

const NavigationStylesheet = makeStyles(theme => createStyles({
  leftNavCol: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navLogo: {
    height: "75px",
    width: "75px",
    margin: "50px",
    background: "#191919",
    border: "3px solid #fff",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(45deg)",
    transition: "0.3s",
    boxShadow: "7px 0px rgba(0,0,0,0.75)",
    "&:hover": {
      height: "85px",
      width: "85px",
      margin: "46px 50px 45px 50px",
      transition: "0.3s",
      boxShadow: "12px 12px rgba(0,0,0,0.7)",
      transform: "rotate(0deg)"
    },
    "&:hover $navLogoText": {
      fontSize: "38px",
      transform: "rotate(0deg)",
      transition: "0.3s",
      transitionDelay: "0.3s"
    }
  },
  navLogoText: {
    color: "#fff",
    fontSize: "35px",
    transform: "rotate(-45deg)",
    fontFamily: "Rye",
    transition: "0.3s",
    transitionDelay: "0.3s"
  },
  navTabs: {
    margin: "50px",
    height: "42px"
  },
  navTabText: {
    color: "#fff",
    fontSize: "24px",
    fontFamily: "Rye",
    margin: "0px 15px 0px 15px",
    cursor: "pointer",
    transition: "0.3s",
    textShadow: "7px 7px rgba(0,0,0,0.75)",
    opacity: "1",
    "&:hover": {
      transition: "0.3s",
      fontSize: "28px",
      opacity: "0.7",
      textShadow: "12px 12px rgba(0,0,0,0.7)"
    }
  },
  navTabTextActive: {
    opacity: "1 !important",
    fontSize: "28px !important",
    textShadow: "12px 12px rgba(0,0,0,0.7) !important"
  },
  "@media (max-width: 967px)": {
    leftNavCol: {
      justifyContent: "center",
    },
    navTabs: {
      margin: "0px"
    },
  },
  "@media (max-width: 767px)": {
    navTabs: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "100%",
      marginLeft: "50px"
    },
    leftNavCol: {
      alignItems: "center",
      padding: "15px"
    },
    navLogo: {
      margin: "0px"
    },
    navTabText: {
      margin: "5px 0px 5px 0px",
    }
  }
}));

export default NavigationStylesheet;