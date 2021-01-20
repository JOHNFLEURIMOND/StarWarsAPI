import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import { Animated } from "react-animated-css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { RouteComponentProps } from 'react-router-dom';

import { fleurimondColors } from "../theme";

const useStyles = makeStyles({
  container: {
    boxSizing: "border-box",
    fontSize: "1rem",
    color: fleurimondColors.leapingLemon,
    lineHeight: "normal",
    fontWeight: 600,
    padding: "64px 20px 48px",
    width: "100%",
    backgroundColor: fleurimondColors.white,
    textAlign: "center",
    display: "block",
  },

  cardImage: {
    paddingTop: "59%",
  },

  h2: {
    textAlign: "center",
    padding: "23px 2px 13px 0 !important",
  },
});

interface CharactersPageLocationState {
  film: string,
}

const JFCharacterspage = (props: RouteComponentProps<{}, any, CharactersPageLocationState | any>
): JSX.Element => {
  console.log("this is charcters pages props.", props.location.state.characters)

  const classes = useStyles();

  const CharactersProps: string[] = [];

  const [characters, setCharacters]: [
    string[],
    (posts: string[]) => void
  ] = useState(CharactersProps);

  const getCharacters = async () => {
    const requests = props.location.state.characters.map(async (url: string) => {
      const request = await axios.get(url);
      return request;
    })
    axios.all(requests).then(axios.spread((...responses) => {
      setCharacters(["han"])
      console.log(responses)
    })).catch(errors => {
      return errors
      // react on errors.
    })
  }


  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={classes.container}>
      <Header />
      <Hero />
      {/* Hero unit */}
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {characters.map((character, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Animated
                animationInDelay={0}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                isVisible
              >
                <Card>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    className={classes.cardImage}
                  />
                  <CardContent className={classes.h2}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {character}
                    </Typography>
                  </CardContent>
                </Card>
              </Animated>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default JFCharacterspage;
