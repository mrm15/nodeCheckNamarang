import InputTextArea from "../InputTextArea/InputTextArea.jsx";

import {useContext} from "react";
import {MainContext} from "../Context/Context.jsx";
import MyDatePicker from "../MyDatePicker/MyDatePicker.jsx";
import LightSection from "../LightSection/LightSection.jsx";
import TransistorSection from "../TransistorSection/TransistorSection.jsx";
import SendTypeOptions from "../SendTypeSection/SendTypeOptions.jsx";
import SendTypeSection from "../SendTypeSection/sendTypeSection.jsx";

const TableSection = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper

  const localStorageNodeGiriName = localStorage.getItem('nodeGiriName')
  const nodeGiriName = localStorageNodeGiriName ? localStorageNodeGiriName : ''
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
        <td className={''}>
          <InputTextArea
            minWidth={200}
            myKeyOfFullData={'customerNameText'}
            fontSize={fullData.customerNameFontSize}/>
        </td>
        <td className={'px-4 py-2'}>
          <LightSection
            fontSize={fullData.lightFontSize}
            minWidth={190}/>
        </td>
        <td className={'px-4 py-2'}><TransistorSection

          fontSize={fullData.transistorFontSize}
          minWidth={190}/></td>
        {/* نوع ارسال*/}
        <td className={'px-4 py-2'}>
          <SendTypeSection
            minWidth={100}
            fontSize={fullData.sendTypeFontSize}
          /></td>
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

          <div className={'flex items-center'}>
            <div className={'w-full'}>
              <InputTextArea

                myKeyOfFullData={'descriptionText'}
                fontSize={fullData.descriptionFontSize}/>
            </div>
            <div style={{
              width: 350
            }}>
              {fullData.spacer ? '(' + ' اسپیسر ' + fullData.spacer + ')' : ''}
              {fullData.flusher ? '(' + ' فلاشر ' + fullData.flusher + ')' : ''}

            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <div className={'text-left mx-5 font_size_12'}

    >
      {fullData.fileNameUnique} {nodeGiriName}


    </div>
  </div>);
};

export default TableSection;
