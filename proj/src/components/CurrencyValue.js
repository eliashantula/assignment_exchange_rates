import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CurrencyValue = ({currency, value}) => (



 <Col sm="6" style={{border: "2px solid black"}}>{currency}:{value}</Col>





)


export default CurrencyValue