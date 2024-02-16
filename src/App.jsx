import './App.css'
import ProductNode from "./ProductNode/ProductNode.jsx";

import "./style.scss"
import {MainContext} from "./Context/Context.jsx";
import useObjectDataHolder from "./Hooks/useObjectDataHolder.jsx";
import {initialObjectState} from "./util/initials.js";

function App() {
  const [fullData, setFullData] = useObjectDataHolder({...initialObjectState})

  return (<>
      <MainContext.Provider value={{setFullData, fullData}}>
        <ProductNode/>
      </MainContext.Provider>

    </>)
}

export default App
