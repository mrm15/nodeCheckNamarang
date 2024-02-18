import './App.css'
import ProductNode from "./ProductNode/ProductNode.jsx";

import "./style.scss"
import {MainContext} from "./Context/Context.jsx";
import useObjectDataHolder from "./Hooks/useObjectDataHolder.jsx";
import {initialObjectState} from "./util/initials.js";
import {userVerified} from "./util/userVerified.js";
import Login from "./Login/Login.jsx";
// import { ToastContainer } from "react-toastify";


function App() {
  const [fullData, setFullData] = useObjectDataHolder({...initialObjectState})
  return (<>
    {/*<ToastContainer*/}
    {/*  position="bottom-left"*/}
    {/*  autoClose={2500}*/}
    {/*  hideProgressBar={true}*/}
    {/*  newestOnTop={false}*/}
    {/*  theme="colored"*/}
    {/*  closeOnClick*/}
    {/*  rtl*/}
    {/*  pauseOnFocusLoss={false}*/}
    {/*  draggable*/}
    {/*  pauseOnHover*/}
    {/*/>*/}
    <MainContext.Provider value={{setFullData, fullData}}>
      {!userVerified() ? <Login/> : <ProductNode/>}
    </MainContext.Provider>
  </>)
}

export default App
