import InputTextArea from "../InputTextArea/InputTextArea.jsx";

import {useContext} from "react";
import {MainContext} from "../Context/Context.jsx";
import MyDatePicker from "../MyDatePicker/MyDatePicker.jsx";
import LightSection from "../LightSection/LightSection.jsx";

const MyComponent = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper
  return (<div>
    <table className={"myTableCss"}>
      <tbody>
      <tr>
        <th className={'px-2 w-16'}>نام مشتری</th>
        <th className={'px-2'}>نور</th>
        <th className={'px-2'}>ترانس</th>
        <th className={'px-2'}>نوع ارسال</th>
        <th className={'px-2'}>تاریخ</th>
        <th className={'px-2'}>شماره فایل</th>
      </tr>

      <tr>
        <td className={''}><InputTextArea

          minWidth={200}
          myKeyOfFullData={'customerNameText'}
          fontSize={fullData.customerNameFontSize}/></td>
        <td className={'px-4 py-2'}><LightSection/></td>
        <td className={'px-4 py-2'}>اطلاعات ترانس</td>
        <td className={'px-4 py-2'}>اطلاعات نوع ارسال</td>
        <td className={'px-4 py-2'}>
          <MyDatePicker/>
        </td>
        <td
          style={{
            padding: 0,
          }}
        ><InputTextArea
          myKeyOfFullData={'fileNumberText'}
          numberType={true}
        /></td>
      </tr>
      <tr>
        <td className={'text-red-600'}>توضیحات</td>
        <td
          style={{
            padding: 0,
          }}
          colSpan={5}>
          <InputTextArea
            myKeyOfFullData={'descriptionText'}
            fontSize={fullData.descriptionFontSize}/></td>


      </tr>
      </tbody>
    </table>
    <div className={'text-left mx-5 font_size_12'}

    >
      {fullData.fileNameUnique}
    </div>
  </div>);
};

export default MyComponent;
