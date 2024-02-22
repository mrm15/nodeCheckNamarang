import React, {useContext, useState} from 'react';
import {MainContext} from "../Context/Context.jsx";


const LoginPage = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const validPhoneNumbers = ['09384642159', '09120413502','09119770454',]
  const validPhonePassword = ['09384642159', '09120413502','09119770454',]

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (e.g., send login request to server);
    if (validPhoneNumbers.includes(phoneNumber) && validPhonePassword.includes(password)) {
      const currentTimestamp = Date.now();
      // Add 1 week (7 days) in milliseconds
      const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
      // Calculate the new timestamp by adding 1 week to the current timestamp
      const newTimestamp = currentTimestamp + oneWeekInMilliseconds;
      localStorage.setItem('namarangNodeGiri', newTimestamp)

      let nodeGiriName ='';
      if(phoneNumber==='09384642159'){
        nodeGiriName ='محمد'
      }
      if(phoneNumber==='09120413502'){
        nodeGiriName ='silverfacade'
      }
      if(phoneNumber==='09119770454'){
        nodeGiriName ='سجاد'
      }

      localStorage.setItem('nodeGiriName', nodeGiriName)


      setFullData({reload: fullData.reload + 1})
    }
  };

  return (<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">ورود به پنل</h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="phone-number" className="sr-only">Phone Number</label>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autoComplete="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ورود
          </button>
        </div>
      </form>
    </div>
  </div>);
};

export default LoginPage;
