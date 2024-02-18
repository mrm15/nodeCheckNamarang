import React, {useContext, useState} from 'react';
import Modal from "../Modal/Modal.jsx";
import ShowOptions from "../LightSection/ShowOptions.jsx";
import {MainContext} from "../Context/Context.jsx";
import SendTypeOptions from "./SendTypeOptions.jsx";
import {afterCloseLightModal, afterCloseTransistorModal} from "../util/initials.js";
import {FaCar} from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function SendTypeSection({minWidth}) {

  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper


  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }


  const buttonHandler = ({text}) => {

    setIsModalOpen(false);
    setFullData({sendTypeText: text, ...afterCloseTransistorModal})

  }
  return (<>
    {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className={'min-w-96'}>
        <div className={'flex gap-4 '}>
          <div className="flex flex-col w-full">
            <div className={'w-full text-center font-bold border-2 '}>
              نوع ارسال
            </div>

          </div>

        </div>
        <div className={'w-full flex items-center content-center justify-center mt-3'}>
          <button onClick={() => buttonHandler({text: 'ندارد'})}
                  className={'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1'}> ندارد
          </button>

          <button
            onClick={() => buttonHandler({text: 'اسنپ',})}
            className={'flex items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1 '}>
            <div className={'mx-2'}>
              اسنپ
            </div>
            <FaCar/>

          </button>

        </div>
      </div>
    </Modal>}
    <div
      onClick={openModal}
      style={{
        minWidth: minWidth ? minWidth : undefined, height: '100%',
      }}
    >
      {fullData.sendTypeText}
    </div>
  </>);
}

export default SendTypeSection;