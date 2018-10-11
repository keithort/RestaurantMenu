### Amazee Labs Restaurant Menu App

The app is built using the most current version of React (16.5.2).

## State Management
I opted to use the Context API for application level state management because this application is small. I felt that Redux would require too much overhead on the application. The Context API gives app level state management without the extra weight. 

## Style Notes
The stylesheet located at `src/index.css` is the only one for the site. [Emotion](https://emotion.sh/) is used for CSS-in-JS styling. Other styles are defaults from [Material UI](https://material-ui.com/).

Material UI's Grid is used for the flexbox based, responsive design. 

## Demo
[Surge](https://observant-attack.surge.sh)

## Installation
* Run `cd menu`
* Run `yarn && yarn start`
