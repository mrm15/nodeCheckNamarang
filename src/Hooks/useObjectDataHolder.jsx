import {useState} from "react";

const UseObjectDataHolder = (initialObject) => {
  const [data, setData] = useState(initialObject !== undefined ? initialObject : {})
  const dataSetter = (keyValuePairs) => {
    setData({...data, ...keyValuePairs})
  }
  return [data, dataSetter];
}
export default UseObjectDataHolder;