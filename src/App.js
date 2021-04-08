import React, { Component } from "react";
import Phonebook from "./components/PhoneBook";

class App extends Component {
  formSubmitHandler = (data) => {
    console.log(data);
  };
  render() {
    return <Phonebook onSubmit={this.formSubmitHandler} />;
  }
}

export default App;
