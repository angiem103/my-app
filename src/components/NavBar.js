import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                <Button color="inherit" component={ Link } to="/home">Margarita Alley</Button>
                </Typography>
                <Button color="inherit" component={ Link } to="/margaritalist">Margarita List</Button>
                <Button color="inherit" component={ Link } to="/newmargarita">Add a Margarita</Button>
            </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}