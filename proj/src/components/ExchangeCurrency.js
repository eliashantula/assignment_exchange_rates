import RateChoices from './RateChoices'
import {  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Form, FormGroup, Label, Input, FormText,InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown, } from 'reactstrap';
import React, { Component } from 'react';
import SelectedRate from './SelectedRate';

class ExchangeCurrency extends Component {
constructor() {
super()
this.toggleDropDown = this.toggleDropDown.bind(this);
this.toggleSplit = this.toggleSplit.bind(this);
this.state = {
      
        isFetching: false,
        dropdownOpen: false,
        value: 'EUR',
        amount: 0,
        splitButtonOpen: false


      
    }
}
 toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

   toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }


render ()  {
const {rates, amount, onSubmit, onClick} = this.props
console.log(this.props)
return (
	<div>
	<Form onSubmit={onSubmit}>
 <InputGroup>
       
          <Label for="convert" sm={2}></Label>
          <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
        <DropdownToggle caret>
          Convert To
        </DropdownToggle>
          <SelectedRate onClick={onClick} rates={rates} />
        
          <Input  type="amount" name="amount" id="amount" placeholder="Enter Amount" />
           <InputGroupAddon addonType="append">
           <Button color="primary" type="submit" value="Submit">Submit</Button>
           </InputGroupAddon>
           </InputGroupButtonDropdown>
        </InputGroup>
</Form>
</div>

)
}
}



export default ExchangeCurrency