import {useEffect, useState} from "react";
import {getDataFromHesabfa} from "./getDataFromHesabfa.jsx";
import MySelectOption from "./MySelectOption.jsx";

const FactorListFromHesabfa = () => {

  const [numberOfFactor, setNumberOfFactor] = useState(() => {
    const numberOfFactorFromLocalStorage = localStorage.getItem("numberOfFactor")
    if (numberOfFactorFromLocalStorage) {
      return numberOfFactorFromLocalStorage
    }
    return 100

  })

  const [billList, setBillList] = useState([]);
  const changeHandler = (e) => {
    const value = e.target.value
    localStorage.setItem("numberOfFactor", value)
    setNumberOfFactor(value);
  }

  useEffect(() => {
    getDataFromHesabfa(numberOfFactor).then(arrayOfData => {

      setBillList(arrayOfData)
    })
  }, [numberOfFactor])


  try {
    return (<div
      style={{
        // fontSize: 10,
        // fontFamily: "monospace",
        textAlign: "right"
      }}
    >
      <div>
        <input
          style={{
            width: 50,
            // background: "gray",
            fontSize: 10,
            fontFamily: "monospace",
            // outline: "1px solid gray",
            borderRadius: 10,
            padding: 5
          }}
          type={"text"}
          value={numberOfFactor}
          onChange={changeHandler}
        />
        <MySelectOption
          billList={billList}
        />


      </div>


    </div>);
  } catch (error) {
    return <>{error?.toString()}</>
  }
};

export default FactorListFromHesabfa;
