import React, { useState, useEffect } from "react";
import { Animated } from "react-animated-css";
import axios from "axios";
import { Link } from "react-router-dom";
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
  },
  a: {
    color: fleurimondColors.leapingLemon,
    textDecoration: "none",
  }
});

const JFCard = (): JSX.Element => {
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

  const [films, setFilms]: [
    StarWarsTitle[],
    (posts: StarWarsTitle[]) => void
  ] = useState(scheduleProps);

  const getStarWarsFilmTitle = async () => {
    await axios
      .get("https://swapi.dev/api/films/")
      .then(result => setFilms(result.data.results));
  };

  const getStarWarsCharactersName = async () => {
    let one = "https://swapi.dev/api/people/"
    let two = "http://swapi.dev/api/people/?page=2"
    let three = "http://swapi.dev/api/people/?page=3"
    let four = "http://swapi.dev/api/people/?page=4"
    let five = "http://swapi.dev/api/people/?page=5"
    let six = "http://swapi.dev/api/people/?page=6"
    let seven = "http://swapi.dev/api/people/?page=7"
    let eight = "http://swapi.dev/api/people/?page=8"
    let nine = "http://swapi.dev/api/people/?page=9"

    const requestOne = await axios.get(one);
    const requestTwo = await axios.get(two);
    const requestThree = await axios.get(three);
    const requestFour = await axios.get(four);
    const requestFive = await axios.get(five);
    const requestSix = await axios.get(six);
    const requestSeven = await axios.get(seven);
    const requestEight = await axios.get(eight);
    const requestNine = await axios.get(nine);

    axios.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven, requestEight, requestNine]).then(axios.spread((...responses) => {

      const responseOne = responses[1]
      const responseTwo = responses[2]
      const responseThree = responses[3]
      const responeseFour = responses[4]
      const responeseFive = responses[5]
      const responeseSix = responses[6]
      const responeseSeven = responses[7]
      const responeseEight = responses[8]
      // use/access the results 
      console.log(responseOne.data.results, responseTwo.data.results, responseThree.data.results, responeseFour.data.results, responeseFive.data.results, responeseSix.data.results, responeseSeven.data.results, responeseEight.data.results);
      setCharactersName(responseOne.data.results)
      //setCharactersName([responseOne.data.results, responseTwo.data.results, responseThree.data.results, responeseFour.data.results, responeseFive.data.results, responeseSix.data.results, responeseSeven.data.results, responeseEight.data.results])
    })).catch(errors => {
      return errors
      // react on errors.
    })
  };

  const findFilmName = (films: object, characters: object) => {
    const filmsKeys = Object.entries(films).forEach(value => {
      const filmKeyValues = [value[1]["url"], value[1]["title"]];
      console.log("films Key Value", filmKeyValues);

      return filmKeyValues;
    });
    const charactersKeys = Object.entries(characters).forEach(value => {
      const characterKeyValues = [value[1]["films"], value[1]["name"]];
      console.log("Character Key Value", characterKeyValues);

      return characterKeyValues;
    });

    if (filmsKeys === charactersKeys) {
      return characters;
    }
  };

  findFilmName(films, characters)

  return (
    <div className={classes.container}>
      {/* Hero unit */}
      <Container maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {films.map((film, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Animated
                animationInDelay={0}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                isVisible
              >
                <Link to={{
                  state: film,// your data array of objects
                  pathname: "/CharacterPage"
                }}
                  className={classes.a}>

                  <Card>
                    <CardMedia
                      image="https://source.unsplash.com/random"
                      title="Image title"
                      className={classes.cardImage}
                    />
                    <CardContent className={classes.h2}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {film.title}

                      </Typography>
                    </CardContent>
                  </Card>
                </Link>

              </Animated>
            </Grid>
          ))}

        </Grid>
      </Container>
    </div>
  );
};

export default JFCard;
