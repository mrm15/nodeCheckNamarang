import React, {useContext} from 'react';
import {MainContext} from "../Context/Context.jsx";
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function ToolbarSection(props) {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const plusStep = 1;
  const minusStep = -1
  const changeFontSize = (number, type) => {
    const temp = fullData[type] + number;
    if (temp < 0) {
      return
    }
    setFullData({[type]: temp})
  }

  const myCustomerNameFontSize = fullData?.customerNameFontSize?.toString().length === 1 ? "0" + fullData?.customerNameFontSize : fullData?.customerNameFontSize;
  const myLightFontSize = fullData?.lightFontSize?.toString().length === 1 ? "0" + fullData?.lightFontSize : fullData?.lightFontSize;
  const myTransistorFontSize = fullData?.transistorFontSize?.toString().length === 1 ? "0" + fullData?.transistorFontSize : fullData?.transistorFontSize;
  const mySendTypeFontSize = fullData?.sendTypeFontSize?.toString().length === 1 ? "0" + fullData?.sendTypeFontSize : fullData?.sendTypeFontSize;
  const myDescriptionFontSize = fullData?.descriptionFontSize?.toString().length === 1 ? "0" + fullData?.descriptionFontSize : fullData?.descriptionFontSize;

  return (<div className={'flex border-2 rounded p-1'}>
    <div className={'toolbar flex items-center justify-center'}>اندازه فونت نام مشتری ({myCustomerNameFontSize})
      <div>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(plusStep, 'customerNameFontSize')}>
          <FontAwesomeIcon icon={faArrowUp}/>

        </button>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(minusStep, 'customerNameFontSize')}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>

    </div>
    <div className={'toolbar flex items-center justify-center'}>اندازه نور ({myLightFontSize})
      <div>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(plusStep, 'lightFontSize')}>
          <FontAwesomeIcon icon={faArrowUp}/>

        </button>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(minusStep, 'lightFontSize')}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>

    </div>
    <div className={'toolbar flex items-center justify-center'}>اندازه ترانس ({myTransistorFontSize})
      <div>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(plusStep, 'transistorFontSize')}>
          <FontAwesomeIcon icon={faArrowUp}/>

        </button>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(minusStep, 'transistorFontSize')}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>

    </div>
    <div className={'toolbar flex items-center justify-center'}>اندازه نوع ارسال ({mySendTypeFontSize})
      <div>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(plusStep, 'sendTypeFontSize')}>
          <FontAwesomeIcon icon={faArrowUp}/>

        </button>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(minusStep, 'sendTypeFontSize')}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>

    </div>
    <div className={'toolbar flex items-center justify-center'}>اندازه توضیحات  ({myDescriptionFontSize})
      <div>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(plusStep, 'descriptionFontSize')}>
          <FontAwesomeIcon icon={faArrowUp}/>

        </button>
        <button className={'border-2 px-2  rounded mx-1'}
                onMouseDown={() => changeFontSize(minusStep, 'descriptionFontSize')}>
          <FontAwesomeIcon icon={faArrowDown}/>
        </button>
      </div>

    </div>

  </div>);
}

export default ToolbarSection;