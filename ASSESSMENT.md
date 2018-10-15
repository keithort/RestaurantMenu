# Amazee Labs Restaurant Menu App
This restaurant menu application is built using the most current version of React (16.5.2). Users may select as many options per page as they wish. Only at least one selection for the Main Course is required. All others are optional.

The application is mobile friendly and utilizes Material UI.

## State Management
The application utilizes React's Context API for application level state management. The Context API gives application level state management without the extra weight with an interface similar to Redux. The Reducers are located in `src/Context.js`.

## Style Notes
The stylesheet located at `src/index.css` is the only one for the site. This should include only global styles. Component styles should use [Emotion](https://emotion.sh/) CSS-in-JS. Other styles are defaults from [Material UI](https://material-ui.com/).

## Demo
[Surge](https://brainy-steel.surge.sh/)

## Installation and Running
* Run `cd menu`
* Run `yarn && yarn start`
