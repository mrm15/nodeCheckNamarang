import {useContext} from "react";
import {MainContext} from "../Context/Context.jsx";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'


const LightSection = () => {
  const MySwal = withReactContent(Swal)

  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const handleClick = () => {

    const clickTest = () => {
      MySwal.close()

      MySwal.fire(myObject)
    }


    const myObject = {
      title: <p>Hello World</p>, html: <div className={'flex gap-4'}>
        <div className="flex flex-col w-full">
          <div className={'w-full text-center'}>
             برند اولی
          </div>

          <div className={'flex w-full'}>
            <button

              onClick={clickTest}
              className=" block my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ندارد
            </button>
            <input
              style={{width: 80}}
            />
          </div>
          <button className="my-1 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">آفتابی
          </button>
          <button className="my-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">سفید</button>
          <button className="my-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">قرمز</button>
          <button className="my-1 bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">انبه ای
          </button>
          <button className="my-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">متفرقه</button>
        </div>
        <div className="flex flex-col w-full">
          <div>برند دومی</div>

          <button className="my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ندارد</button>
          <button className="my-1 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">آفتابی
          </button>
          <button className="my-1 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">سفید</button>
          <button className="my-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">قرمز</button>
          <button className="my-1 bg-amber-300 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded">انبه ای
          </button>
          <button className="my-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">متفرقه</button>
        </div>
      </div>
    }
    MySwal.fire(myObject)
    // .then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>)
    // })
  }

  return (<div
    onClick={handleClick}
    style={{
      width: '100%', height: '100%',
    }}
  >
    {fullData.lightNameText}
  </div>);
};

export default LightSection;
