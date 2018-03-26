import React, { Component } from 'react';
import { Jumbotron, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import RateChoices from '../components/RateChoices'
import ExchangeRates from '../components/Exchange.js'
import ExchangeCurrency from '../components/ExchangeCurrency'
import serialize from 'form-serialize'

class App extends Component {
    constructor(){
      super()
      this.toggle = this.toggle.bind(this);
this.state = {
        rates: {},
        isFetching: false,
        dropdownOpen: false,
        value: 'EUR',
        amount: 0,
        selected: "",
        userEntered: 0,


      
    }
    }
 toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
componentDidMount() {
   this.setState({isFetching: true})
   fetch('http://api.fixer.io/latest')
   .then((response)=>response.json()) 
   .then((json)=>{
    this.setState({rates: json.rates,
      isFetching: false})
    console.log(this.state.rates)
   })

  }

onClicks = (e) => {
let rate = e.target.innerText;
console.log(rate)
this.setState({
      selected: rate})

}


onSelectExchange = (e) => {
  e.preventDefault()
let selected= this.state.selected
let value = e.target
 const body = serialize(value, {hash: true})
    

 this.setState({isFetching: true})
  fetch(`http://api.fixer.io//latest?base=${this.state.value}&&latest&symbols=${this.state.selected}`)
   .then((response)=>response.json()) 
   .then((json)=>{
    console.log(body)
    console.log(json.rates[selected] * parseInt(body.amount))
    this.setState({amount: parseInt(body.amount) * json.rates[selected],
      isFetching: false,
      userEntered: parseInt(body.amount)
      })
    
   })

}

onSelect = (e) => {

 let rate = e.target.innerText;
 this.setState({isFetching: true})
  fetch(`http://api.fixer.io/latest?base=${rate}`)
   .then((response)=>response.json()) 
   .then((json)=>{
    this.setState({rates: json.rates,
      isFetching: false,
      value: rate})
    console.log(this.state.rates)
   })

}

  render() {
    const rates = this.state.rates
    const value = this.state.value
    const amount = this.state.amount
    const selected = this.state.selected
    const userValue = this.state.userEntered
    let current = new Date().toString().split(' ').splice(1,3).join(' ');
    return (
      <div className="App">
        <header className="App-header">
          <Jumbotron>
          <h1 className="display-4">Hello, Traveler!</h1>
        <p className="lead">Check out what your money is worth around the world!</p>

        <hr className="my-2" />
       
         
         
          </Jumbotron>
        </header>
        <h2 style={{paddingBottom: "40px"}}> Converted Value of {userValue} {value} is {Number((amount).toFixed(1))} {selected}  </h2>
        <ExchangeCurrency rates={rates} amount={amount} onSubmit={this.onSelectExchange} onClick={this.onClicks}/>
        <h2 style={{paddingTop: "40px"}}>Value of {value} as of {current}: </h2>
        <Dropdown group isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{position: "relative", right: "-200px"}}>
        <DropdownToggle caret>
          Change Currency
        </DropdownToggle>
      
          <RateChoices rates={rates} onClick={this.onSelect} />
       
      </Dropdown>
        <div>
        <ExchangeRates rates={rates}/>
        </div>
      </div>
    );
  }
}

export default App;
