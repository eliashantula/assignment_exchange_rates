import React from "react";




const CurrencyPicker = ({onSubmit, error}) => {


return (

<form onSubmit={onSubmit} action="/" method="post">
  currency<br />
  <input type="text" name="currency" value="AUD" />
  <br />
  <input type="submit" value="Submit" />
</form> 
)

};

export default CurrencyPicker;