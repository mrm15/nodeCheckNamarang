import React, {useEffect, useState} from 'react';
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {getTomorrowDate} from "../util/functions.js";

const MyComponent = () => {

  const [todayDate, setTodayDate] = useState('')

  useEffect(() => {
    // const temp = new Date().toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    const temp = getTomorrowDate()
    setTodayDate(temp)
  }, []);


  try {
    return (<DatePicker
      onChange={(date) => {
        if (date) { /* empty */
        } else { /* empty */
        }
      }}
      calendar={persian}
      placeholder="تاریخ"
      locale={persian_fa}
      value={todayDate}
      calendarPosition="bottom-right"
      hideOnScroll
    />);
  } catch (error) {
    return <>{error?.toString()}</>
  }
};

export default MyComponent;
