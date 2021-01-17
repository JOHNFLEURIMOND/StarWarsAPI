# :checkered_flag:What It Looks Like :checkered_flag:: 

# My Awesome Project
Starwars films and Character App
# How It's Made :nut_and_bolt:🔨 :hammer::wrench::


## Optimizations.
Right now, I can pull the data from the two endpoints for the Film names and Characters on Star Wars Api. I have pulled down the film data and rendered the information on cards on the main page and setup react-router for the characters pages that will take data of the characters urls from the films data objects. 

As of right now I am running into a problem with checking the entries of both objects to render the characters from each individual film once selected. I thought I would be able to get the film data from the api and render the names of the characters of the films but It renders the endpoint of the characters in the films scheme instead of the name. 

So I am now trying to write out the function to handle the onClick of the films to render out the individual characters list by passing it the two data objects ({films.url} === {characters.url}) and check for the urls values and if they are related
# Portfolio :open_file_folder::

** :computer:   WEBSITE:** [John Fleurimond](http://johnfleurimond.com)

# How To Get It Started :arrow_forward: :

## Installation

1. Clone repo
2. run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


### `npm run dev`

To get the app started, cd into folder and run `npm run dev` after running `build` command


Runs the app in the development mode.<br>
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


### `npm run prettier`
This corrects the format.
