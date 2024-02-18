import React, {useContext} from 'react';
import {MainContext} from "../Context/Context.jsx";

const ShowOptions = ({optionMap}) => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const changeIsActive = ({id, checked}) => {
    const newTextArray = fullData.lightModalData.map(r => {
      const row = {...r}
      if (row.id === id) {
        row.isActive = checked
      }
      return row
    });
    setFullData({lightModalData: newTextArray})
  }

  const changeValueOfLightsHandler = ({id, value}) => {
    const newTextArray = fullData.lightModalData.map(r => {
      const row = {...r}
      if (row.id === id) {
        row.value = value
      }
      return row
    });
    setFullData({lightModalData: newTextArray})

  }

  console.log(fullData.lightModalData)
  return optionMap?.map((row, index) => <ul
    className={'ul_li_on_modal'}
    key={index}
  >
    <li style={{
      backgroundColor:row.bgColor,
      color:row.color,
    }}>
      <input
        onChange={(e) => changeIsActive({checked: e.target.checked, id: row.id})}
        checked={row.isActive}
        id={row.id + row.category}
        type={"checkbox"}/>

      <label
        className={'select-none mx-2 block'}
        htmlFor={row.id + row.category}
      >{row.key}</label>
    </li>
    {row.isActive === true ? <li>
      <input
        onChange={(e) => changeValueOfLightsHandler({id: row.id, value: e.target.value})}
        autoFocus={true}
        value={row.value}
        type="number"
        className={'input__in_modal'}
      />
    </li> : <li></li>}
  </ul>)
};

export default ShowOptions;
