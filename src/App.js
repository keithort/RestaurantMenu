import React, { Component } from "react";
import { Provider } from "./Context";

import Layout from "./Components/Layouts/layout";

class App extends Component {
  render() {
    return (
      <Provider>
        <Layout />
      </Provider>
    );
  }
}

export default App;
