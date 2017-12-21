import React, { Component } from "react";
import serialize from "form-serialize";
import react from "react";
import App from "../App";

class AppContainer extends Component {
  constructor() {
    super();
    this.state = {
      rates: [],
      isFetching: false
    };
  }

  

  componentDidMount() {
    fetch("https://api.fixer.io/latest")
      // Extract the body of the response into json
      .then(response => response.json())
      // Do something with the json from the response
      .then(json => {
        console.log("parsed json", json);
        this.setState({
          rates: json.rates,
          isFetching: false
        });
      });
  }



  onSubmitCurrency = e => {
    e.preventDefault();
    const form = e.target;
    console.log(form)
    const body = serialize(form, { hash: true });
    console.log(body.currency);
    console.log("TESTING----------")

    
     this.setState({ isFetching: true });
  fetch(`https://api.fixer.io/latest?base=${body.currency}`)
      .then(response => response.json())
      // Do something with the json from the response
      .then(json => {
        console.log("parsed json", json);
        this.setState({
          rates: json.rates,
          isFetching: false
        });
      });
  };
 




  // componentDidMount() {
  //   this.setState({ isFetching: true });
  //   fetch("https://api.fixer.io/latest")
  //     .then(response => {
  //       console.log("response");
  //       console.log(response.body);
  //       response.json();
  //     })
  //     .then(json => {
  //       this.setState({
  //         rates: json.data,
  //         isFetching: false
  //       });
  //     });
  // }

  // Send our state and functions as props
  render() {
    return <App onSubmitCurrency={this.onSubmitCurrency}{...this.state} />;
  }
}

export default AppContainer;
