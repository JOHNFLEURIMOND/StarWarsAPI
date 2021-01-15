import React from "react";
import { Animated } from "react-animated-css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import { fleurimondColors } from "../theme";

const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    fontSize: "1rem",
    color: fleurimondColors.leapingLemon,
    lineHeight: "normal",
    fontWeight: 600,
    padding: "64px 20px 48px",
    height: "400px",
    width: "100%",
    backgroundColor: fleurimondColors.black,
    textAlign: "center",
    display: "block",
  },
});

const JFHero = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {/* Hero unit */}
      <Container maxWidth="sm">
        <Animated
          animationInDelay={0}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          isVisible
        >
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Starwars
          </Typography>
        </Animated>
      </Container>
    </div>
  );
};

export default JFHero;
