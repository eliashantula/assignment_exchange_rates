
import React, { Component } from 'react';
import CurrencyValue from './CurrencyValue'
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ExchangeRates = ({rates}) => {
const breakDown = Object.keys(rates).map((rate) =>
<CurrencyValue currency={rate} value={rates[rate]} />
	)

return <Container style={{ width: "50%", justifyContent: 'center'}}>

<Row>
 {breakDown}

</Row>
</Container>





}


export default ExchangeRates