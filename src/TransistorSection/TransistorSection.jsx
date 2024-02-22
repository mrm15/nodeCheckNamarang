import React, {useContext, useState} from 'react';
import Modal from "../Modal/Modal.jsx";
import ShowOptions from "../LightSection/ShowOptions.jsx";
import {MainContext} from "../Context/Context.jsx";
import TransistorShowOptions from "./TransistorShowOptions.jsx";
import {afterCloseLightModal, afterCloseTransistorModal} from "../util/initials.js";

// eslint-disable-next-line react/prop-types
function TransistorSection({minWidth,fontSize}) {

  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper


  const MyTransistorModalData = [...fullData.transistorModalData]
  const MyTransistorModalDataNeon = [...fullData.transistorModalDataNeon]


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }


  const transButtonHandler = ({text, checkForm}) => {


    if (!checkForm) {
      setFullData({transistorNameText: text, ...afterCloseTransistorModal})
    } else {
      //
      let MyNewText = <></>
      let hasValue = false;
      fullData.transistorModalData.forEach(row => {
        if (row.value) {
          hasValue = true
          // Assuming row.value contains the text you want to add
          MyNewText = (<>
            {MyNewText} {/* Add existing content */}
            <div>{row.value}-عدد-{row.key.replaceAll('ترانس', '')}</div>
            {/* Add div element with text */}
          </>);
        }
      });
      fullData.transistorModalDataNeon.forEach(row => {
        if (row.value) {
          hasValue = true
          // Assuming row.value contains the text you want to add
          MyNewText = (<>
            {MyNewText} {/* Add existing content */}
            <div>{row.value}-عدد-{row.key.replaceAll('ترانس', '')}</div>
            {/* Add div element with text */}
          </>);
        }
      });


      if (!hasValue) {
        return
      }
      setFullData({transistorNameText: MyNewText, ...afterCloseTransistorModal})
    }
    setIsModalOpen(false);

  }
  return (<>
    {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className={'min-w-96'}>
        <div className={'flex gap-4 '}>
          <div className="flex flex-col w-full">

            <div className={'w-full flex gap-4'}>
              <div>
                <TransistorShowOptions
                  title={' ترانس'}
                  optionMap={MyTransistorModalData}
                  transistorModalData={'transistorModalData'}
                />
              </div> <div>
                <TransistorShowOptions
                  title={' نئون'}

                  optionMap={MyTransistorModalDataNeon}
                  transistorModalData={'transistorModalDataNeon'}
                />
              </div>

            </div>
          </div>

        </div>
        <div className={'w-full flex items-center content-center justify-center mt-3'}>
          <button onClick={() => transButtonHandler({text: 'سوال شود'})}
                  className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> سوال شود
          </button>
          <button onClick={() => transButtonHandler({text: 'ندارد'})}
                  className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> ندارد
          </button>

          <button
            onClick={() => transButtonHandler({text: '', checkForm: true})}
            className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> تایید
            موارد فرم
          </button>

        </div>
      </div>
    </Modal>}
    <div
      onClick={openModal}
      style={{
        minWidth: minWidth ? minWidth : undefined, height: '100%',
        fontSize:fontSize,
      }}
    >
      {fullData.transistorNameText}
    </div>
  </>);
}

export default TransistorSection;