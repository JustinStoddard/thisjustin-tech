import { makeStyles, createStyles } from '@material-ui/core';

const HomeStylesheet = makeStyles(theme => createStyles({
  headerColor: {
    color: theme.palette.red
  }
}));

export default HomeStylesheet;