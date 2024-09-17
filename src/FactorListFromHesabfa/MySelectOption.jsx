import Select from "react-select";
import {useContext, useState} from "react";
import "./reactSelectStyles.scss"
import {MainContext} from "../Context/Context.jsx";
import {findNewItemArray} from "./findNewItemArray.jsx";


const MySelectOption = ({
                          billList,
                        }) => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper;


  const [selectedOption, setSelectedOption] = useState(null)


  const customStyles = {
    control: (provided) => ({
      ...provided, fontFamily: "vazir, ui-monospace, Droid Sans, sans-serif", // Ensure fallback fonts
      fontSize: "10px",
    }), option: (provided, state) => ({
      ...provided, fontFamily: "vazir, ui-monospace, Droid Sans, sans-serif", // Ensure fallback fonts
      fontSize: "10px", backgroundColor: state.isSelected ? "lightgray" : "white",
    }), menuOption: (provided, state) => ({
      ...provided, backgroundColor: state.isSelected ? "lightgray" : "white", // Redundant but explicit
    }), singleValue: (provided) => ({
      ...provided, fontFamily: "vazir, ui-monospace, Droid Sans, sans-serif", // Ensure fallback fonts
      fontSize: "10px",
    }),
  };

  const opt1 = billList.map(row => {
    return {
      value: row.Number, label: row.ContactTitle + " " + row.Number,
      row,
    }
  })


  const handleSelectChange = (myOption) => {
    setSelectedOption(myOption)
    console.log(myOption);


    const newItemObject = findNewItemArray(myOption.row);

    setFullData({tableColumnArray: newItemObject})


  }


  try {
    return (<div
      className={"reactSelectComponent"}
    >
      {/* Render the react-select component */}
      <Select
        value={selectedOption}
        onChange={handleSelectChange}
        options={opt1}
        placeholder="یک عنوان وارد کنید..."
        isClearable={true}
        // styles={customStyles}


      />

    </div>);
  } catch (error) {
    return <>{error?.toString()}</>
  }
};

export default MySelectOption;
