import {useContext} from 'react';
import {MainContext} from "../Context/Context.jsx";

const SendTypeOptions = ({optionMap}) => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const changeIsActive = ({id, checked}) => {
    const newTextArray = fullData.transistorModalData.map(r => {
      const row = {...r}
      if (row.id === id) {
        row.isActive = checked
      }
      return row
    });
    setFullData({transistorModalData: newTextArray})
  }

  const changeValueHandler = ({id, value}) => {
    const newTextArray = fullData.transistorModalData.map(r => {
      const row = {...r}
      if (row.id === id) {
        row.value = value
      }
      return row
    });
    setFullData({transistorModalData: newTextArray})

  }

  try{
    return optionMap?.map((row, index) => {

      return <ul
        className={'ul_li_on_modal'}
        key={index}
      >
        <li
          style={{width:150}}
        >
          <input
            onChange={(e) => changeIsActive({checked: e.target.checked, id: row.id})}
            checked={row.isActive}
            id={row.id + row.category}
            type={"checkbox"}/>

          <label
            className={'select-none mx-2'}
            htmlFor={row.id + row.category}
          >{row.key}</label>
        </li>
        {row.isActive === true ? <li

        >
          <input
            onChange={(e) => changeValueHandler({id: row.id, value: e.target.value})}
            autoFocus={true}
            value={row.value}
            type="number"
            className={'input__in_modal'}
          />
        </li> : <li></li>}
      </ul>
    })
  } catch (error) {
    return <>{error.toString()}</>
  }
};

export default SendTypeOptions;
