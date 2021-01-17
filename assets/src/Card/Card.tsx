import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
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
    display: "block"
  },

  cardImage: {
    paddingTop: "59%"
  },

  h2: {
    textAlign: "center",
    padding: "23px 2px 13px 0 !important"
  }
});


const JFHero = (): JSX.Element => {
  interface StarWarsTitle {
    title: string;
    characters: string;
    url: string;
  }

  interface StarWarsCharacters {
    name: string;
    films: string;
    url: string;
  }

  const classes = useStyles();

  const CharactersProps: StarWarsCharacters[] = [];

  const [characters, setCharactersName]: [
    StarWarsCharacters[],
    (posts: StarWarsCharacters[]) => void
  ] = useState(CharactersProps);

  useEffect(() => {
    getStarWarsFilmTitle();
    getStarWarsCharactersName();
  }, []);

  const scheduleProps: StarWarsTitle[] = [];

  const [filmsTitle, setFilmsTitle]: [
    StarWarsTitle[],
    (posts: StarWarsTitle[]) => void
  ] = useState(scheduleProps);





  const getStarWarsFilmTitle = async () => {
    await axios
      .get("https://swapi.dev/api/films/")
      .then(result => setFilmsTitle(result.data.results));
  };

  const getStarWarsCharactersName = async () => {
    await axios
      .get("https://swapi.dev/api/people/")
      .then(result => setCharactersName(result.data.results));

  };

  const findCharacterName = (films: object, characters: object) => {
    // const translatedFilmsObject = Object.entries(films);
    // const translatedCharactersObject = Object.entries(characters);
    
    const filtered = Object.fromEntries(Object.entries(films).filter(([key, values]) => [key, values]))
    const filteredC = Object.fromEntries(Object.entries(characters).filter(([key, values]) => [key,values]))
    
    return [filtered, filteredC]
  };

  return (
    <div className={classes.container}>
      {/* Hero unit */}
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {filmsTitle.map((filmsTitle, index) => (

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
                      {filmsTitle.title}
                      {filmsTitle.characters}
                      {filmsTitle.url}
                    </Typography>
                  </CardContent>
                </Card>
              </Animated>
            </Grid>
          ))}

          {console.log("this is from the above function", findCharacterName(filmsTitle, characters))}
          {characters.map((characters, index) => (
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
                      {characters.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {characters.films}
                      {characters.url}
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

export default JFHero;
