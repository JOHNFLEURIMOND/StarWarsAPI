import "react-app-polyfill/ie11";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Header from '../assets/src/Header/Header';
import Hero from '../assets/src/Hero/Hero';
import CharacterPage from '../assets/src/CharacterPage/CharacterPage';
import Card from '../assets/src/Card/Card';

import { fleurimondColors } from "./src/theme";

const useStyles = makeStyles({
  root: {
    boxSizing: "border-box",
    minWidth: 0,
    fontSize: "1rem",
    color: fleurimondColors.black,
    lineHeight: "normal",
    fontWeight: 600,
    padding: "",
    height: "100vw",
    width: "100%",
    backgroundColor: fleurimondColors.white,
  },
});


const Homepage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Hero />
      <Card />
    </div>

  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/CharacterPage" component={CharacterPage} />
      </Switch>
    </Router>
  );
};

export default App;

