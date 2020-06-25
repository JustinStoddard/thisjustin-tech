import { makeStyles, createStyles } from '@material-ui/core';

const NavigationStylesheet = makeStyles(theme => createStyles({
  headerStyles: {
    color: theme.palette.red
  }
}));

export default NavigationStylesheet;