import React, { Component } from 'react';
import { Jumbotron, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const RateChoices = ({rates, onClick}) => {
const rates1 = Object.keys(rates).map((rate) =>
	<DropdownItem onClick={onClick}>{rate}</DropdownItem>

)

return <DropdownMenu>
          {rates1}
        </DropdownMenu>
     
       
     


	}
export default RateChoices