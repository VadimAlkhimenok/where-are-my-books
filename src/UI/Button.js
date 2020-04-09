import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    backgroundColor: 'blueviolet',
    width: '150px',
    padding: '5px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(ButtonBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const Buttons = ({ name, type, handlerChange }) => {
  const classes = useStyles();

  return (
    <div>
        <ColorButton 
            type={ type }
            className={classes.margin}
            onClick={ () => handlerChange() }
        >
            { name }
        </ColorButton>
    </div>
  );
}