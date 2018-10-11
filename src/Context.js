import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.payload.course]: [
          ...state[action.payload.course],
          action.payload.id
        ]
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