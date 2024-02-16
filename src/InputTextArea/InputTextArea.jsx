import React, {useState, useEffect, useRef, useContext} from 'react';
import {MainContext} from "../Context/Context.jsx";

// eslint-disable-next-line react/prop-types
const ResizableTextarea = ({fontSize, myKeyOfFullData, numberType, minWidth}) => {


  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper


  function handleChange(e) {
    const val = e.target.value;
    console.log(val)
    setFullData({[myKeyOfFullData]: val})
  }


  return (<div
    className={'div_wrap_input'}
    style={{
      // width:'200px',
      minWidth: minWidth ? minWidth : undefined, // height:'50px',

    }}
  >
    {numberType ? <>
      <input
        className={'input_in_table'}
        type={"number"}
        value={fullData[myKeyOfFullData]}
        onChange={handleChange}
        style={{
          fontSize: `${fontSize ? fontSize : 14}px`,


        }}
      />
    </> : <input
      type={"text"}
      value={fullData[myKeyOfFullData]}
      onChange={handleChange}
      style={{
        fontSize: `${fontSize ? fontSize : 14}px`, textAlign: 'center',

        width: '100%',
        // height: '100%',
        padding: 10, // resize: 'none',
        overflow: "visible"
      }}

    />}

  </div>);
};

export default ResizableTextarea;
