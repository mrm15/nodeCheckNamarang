import InputTextArea from "../InputTextArea/InputTextArea.jsx";
import "./tableSection2.scss"
import MyDatePicker from "../MyDatePicker/MyDatePicker.jsx";
import {useContext} from "react";
import {MainContext} from "../Context/Context.jsx";


const TableSection2 = () => {
  const helper = useContext(MainContext);
  const {setFullData, fullData} = helper;

  const tableArray = fullData.tableColumnArray;

  const descriptionColspan = tableArray.length + 2

  return (<div className={"tableSection2"}>
    <table className={"table-fixed"}>

      <tbody>
      <tr>
        {tableArray.map((row, index) => {
          return (<td key={index}>
            <ul className={"tableRow"}>
              <li>{row.title}</li>
              <li>{row.value}</li>
            </ul>
          </td>);
        })}

        <td>

          <ul className={"tableRow"}>
            <li>تاریخ</li>
            <li>
              <MyDatePicker/>
            </li>
          </ul>


        </td>
        <td>

          <ul className={"tableRow"}>
            <li>شماره فایل</li>
            <li>
              <InputTextArea myKeyOfFullData={'fileNumberText'} numberType={true}/>
            </li>
          </ul>

        </td>


      </tr>
      <tr>
        <td
          colSpan={descriptionColspan}
        >
          <div>

            <InputTextArea
              myKeyOfFullData={'descriptionText'}
              fontSize={fullData.descriptionFontSize}
            />

          </div>
        </td>
      </tr>
      </tbody>
    </table>

  </div>);
};

export default TableSection2;

