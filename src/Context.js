import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALLERGY":
      return {
        ...state,
        allergy: !state.allergy.includes(action.payload)
          ? [...state.allergy, action.payload]
          : [...state.allergy]
      };

    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.course]: [
          ...state[action.payload.course],
          action.payload.id
        ]
      };

    case "NEXT_MENU":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREVIOUS_MENU":
      return {
        ...state,
        step: state.step - 1
      };

    case "REMOVE_ALLERGY":
      return {
        ...state,
        allergy: [...state.allergy.filter(item => item !== action.payload)]
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        [action.payload.course]: [
          ...state[action.payload.course].filter(
            item => item !== action.payload.id
          )
        ]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    menu: [],
    step: 0,
    allergy: [],
    appetizer: [],
    soup: [],
    fish: [],
    salad: [],
    main: [],
    dessert: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    const res = await axios.get("fe-tech-data.json");
    this.setState({
      menu: res.data
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
