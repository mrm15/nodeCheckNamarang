import  {useContext, useState} from "react";
import {MainContext} from "../Context/Context.jsx";
import Modal from "../Modal/Modal.jsx";
import ShowOptions from "./ShowOptions.jsx";
import {afterCloseLightModal} from "../util/initials.js";


// eslint-disable-next-line react/prop-types
const LightSection = ({minWidth,fontSize}) => {


  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const smdOptions = fullData.lightModalData.filter(row => row.category === 'smd');
  const injectionOptions = fullData.lightModalData.filter(row => row.category === 'injection');


  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  const closeLightModal = () => {
    setIsModalOpen(false);
    setFullData(afterCloseLightModal)
  }

  const lightButtonHandler = ({text, checkForm}) => {

    if (!checkForm) {
      setFullData({lightNameText: text, ...afterCloseLightModal})
    } else {
      //
      let MyNewText = <></>
      let hasValue = false

      fullData.lightModalData.forEach(row => {
        if (row.value) {
          hasValue = true
          // Assuming row.value contains the text you want to add
          MyNewText = (<>
            {MyNewText} {/* Add existing content */}
            <div>{row.categoryText}-{row.key}-{row.value}</div>
            {/* Add div element with text */}
          </>);
        }
      });

      if (!hasValue) {
        return
      }
      setFullData({lightNameText: MyNewText, ...afterCloseLightModal})
    }

    setIsModalOpen(false);
  }

  return (<>
    {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeLightModal}>
      <div className={'min-w-96'}>
        <div className={'flex gap-4 '}>
          <div className="flex flex-col w-full">
            <div className={'w-full text-center font-bold border-2 '}>
              SMD
            </div>
            <div className={'w-full'}>
              <ShowOptions
                optionMap={smdOptions}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className={'w-full text-center font-bold border-2 '}>
              اینجکشن
            </div>
            <div className={'w-full'}>
              <ShowOptions
                optionMap={injectionOptions}
              />
            </div>
          </div>
        </div>
        <div className={'w-full flex items-center content-center justify-center mt-3'}>
          <button onClick={() => lightButtonHandler({text: 'سوال شود'})}
                  className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> سوال شود
          </button>
          <button onClick={() => lightButtonHandler({text: 'ندارد'})}
                  className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> ندارد
          </button>
          <button
            onClick={() => lightButtonHandler({text: 'متفرقه'})}
            className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> متفرقه
          </button>
          <button
            onClick={() => lightButtonHandler({text: '', checkForm: true})}
            className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> تایید
            موارد فرم
          </button>

        </div>
      </div>
    </Modal>}
    <div
      onClick={handleClick}
      style={{
        minWidth: minWidth ? minWidth : undefined, height: '100%',
        textAlign:"justify",
        fontSize:fontSize,

      }}
    >
      {fullData.lightNameText}
    </div>
  </>);
};

export default LightSection;
