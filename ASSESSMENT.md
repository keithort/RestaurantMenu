### Amazee Labs Restaurant Menu App
This restaurant menu application is built using the most current version of React (16.5.2).

## State Management
React's Context API for application level state management because this application is small. Redux would require too much overhead on the application. The Context API gives app level state management without the extra weight with a similar interface. 

## Style Notes
The stylesheet located at `src/index.css` is the only one for the site. This should include only global styles. Component styles should use [Emotion](https://emotion.sh/) CSS-in-JS styling. Other styles are defaults from [Material UI](https://material-ui.com/).

Material UI's Grid is used for the flexbox based, responsive design. 

## Demo
[Surge](https://brainy-steel.surge.sh/)

## Installation and Running
* Run `cd menu`
* Run `yarn && yarn start`
