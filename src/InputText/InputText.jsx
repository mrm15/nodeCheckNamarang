import React from 'react';

function InputText(props) {
  const {value} = props
  return (<input
    className={'input100'}
  type={"text"}
  value={value}

  />);
}

export default InputText;