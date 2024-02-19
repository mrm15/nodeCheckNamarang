import React, {useEffect, useState} from 'react';
import ReactDOM from "react-dom/client";
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa'; // Assuming you're using the Font Awesome icons



const MyModal = ({ isOpen, onClose, children }) => {

  return (
    <div className={` fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className='fixed inset-0 bg-black opacity-50'
      // onClick={onClose}
      ></div>
      <div className={`bg-white rounded-lg p-8 z-10 w-auto`}>
        <div className="flex justify-end">
          <button className="text-gray-600 hover:text-gray-800" onClick={onClose}><FaTimes /></button>
        </div>
        {children}
      </div>
    </div>
  );
};



const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <MyModal {...props}/>,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Modal;
