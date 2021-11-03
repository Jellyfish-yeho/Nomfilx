import React, { Component } from "react";
import AppRouter from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
class App extends Component {
  render(){
    return (
      <>
        <AppRouter />
        <GlobalStyles></GlobalStyles>
      </>
    )      
  }
}

export default App;
