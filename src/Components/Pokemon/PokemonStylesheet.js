import { makeStyles, createStyles } from '@material-ui/core';

const PokemonStylesheet = makeStyles(theme => createStyles({
  headerStyles: {
    color: theme.palette.red
  }
}));

export default PokemonStylesheet;