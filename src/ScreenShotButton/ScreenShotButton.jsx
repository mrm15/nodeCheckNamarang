import React, {useContext} from 'react';
import domtoimage from 'dom-to-image';
import {saveAs} from 'file-saver';
import {MainContext} from "../Context/Context.jsx";
import Swal from "sweetalert2";
import {afterSubmit} from "../util/initials.js";

const ScreenshotButton = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper;

  const handleScreenshot = () => {
    const element = document.getElementById('i_want_to_take_screenshot_here'); // Replace 'i_want_to_take_screenshot_here' with the ID of the element you want to capture

    // Use dom-to-image to capture the screenshot
    domtoimage.toBlob(element).then(blob => {

      const fileName = fullData?.fileNumberText ? fullData?.fileNumberText + `.jpg` : 'codePlease.jpg';
      // Use FileSaver.js to save the blob as a file
      saveAs(blob, fileName);
      setFullData({...afterSubmit});

      try {
        document.getElementById('picture_section_Div_contentEditable').innerHTML = '';
      } catch (error) {
        console.log(error);
      }
    }).catch(error => {
      console.error('Error capturing screenshot:', error);
    });
  };

  const onClickHandler = () => {
    Swal.fire({
      title: "همه چی رو درست وارد کردی؟",
      text: ` بعد از دانلود فایل فرم خالی میشه - آخرین شماره فایل: ${fullData.fileNumberText}`,
      icon: "info",
      showCancelButton: true,
      cancelButtonText: 'دوباره چک کنم',
      confirmButtonText: "دانلود "
    }).then((result) => {
      if (result.isConfirmed) {
        handleScreenshot();
      }
    });
  };

  return (<button
    className={'bg-amber-500 hover:bg-amber-700 text-white py-2 px-4 rounded'}
    style={{
      fontFamily: 'tahoma ,serif', cursor: 'pointer',
    }}
    onClick={handleScreenshot}
  >
    اسکرین شات جهت برش
  </button>);
};

export default ScreenshotButton;
