import React, {useContext, useEffect, useRef} from 'react';
import {MainContext} from "../Context/Context.jsx";
import {getTodayDate} from "../util/functions.js";

const MyComponent = () => {

  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const inputFileRef = useRef(null);
  const contentRef = useRef(null);

  const makeItEmpty = () => {

    try {
      contentRef.current.innerText = ''
    } catch (error) {
      console.log(error)
    }
  }


  const handleInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Here, you can handle the pasted image file
      console.log('Pasted image:', file);
    }
  };

  const handlePaste = (event) => {
    const clipboardItems = event.clipboardData.items;
    for (let i = 0; i < clipboardItems.length; i++) {
      const item = clipboardItems[i];
      if (item.kind === 'file' && item.type.includes('image')) {
        const file = item.getAsFile();
        if (file) {
          // Here, you can handle the pasted image file
          console.log('Pasted image:', file);
        }
        break; // Stop after handling the first image file
      }
    }

    setFullData({fileNameUnique: getTodayDate()})


  };


  return (<div
    className={'flex flex-row-reverse items-end  items-center '}
  >
    <div

      className={'font_size_45 font-bold'}
      style={{
        fontFamily: 'arial,serif', fontSize: '200px', fontWeight: 'bold'
      }}
    >

      {fullData.fileNumberText}

    </div>
    {/* File input */}
    {/*<input*/}
    {/*  type="file"*/}
    {/*  accept="image/*"*/}
    {/*  // style={{display: 'none'}}*/}
    {/*  ref={inputFileRef}*/}
    {/*  onChange={handleInputChange}*/}
    {/*/>*/}
    {/* Trigger file input on paste */}
    <div contentEditable onPaste={handlePaste}
         className={'flex items-center justify-center '}
         ref={contentRef}
         id={'picture_section_Div_contentEditable'}
         onClick={makeItEmpty}
      // onFocus={selectTextPlease}
         style={{
           minHeight: '100px', minWidth: '100px', border: '1px solid rgba(0, 0, 0, 0.1)',
         }}
    >
      اینجا فایل را paste کنید
    </div>
  </div>);
};

export default MyComponent;

