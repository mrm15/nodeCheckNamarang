import React, {useContext} from 'react';
import {MainContext} from "../Context/Context.jsx";

const MyComponent = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper
  return (<div>
    <div className={'flex'}>
      <input
        placeholder={'اسپیسر'}
        style={{
          width: 100
        }}

        onChange={event => {

          const value = event.target.value;


          setFullData({spacer:value})


        }}
        className={'border-2'}
        type="number" value={fullData.spacer}/>
      <input
        placeholder={'فلاشر'}


        onChange={event => {

          const value = event.target.value;


          setFullData({flusher:value})


        }}

        style={{
          width: 100
        }}
        className={'border-2'}
        type="number"
        value={fullData.flusher}/>
    </div>
  </div>);
};

export default MyComponent;
