import axios from "axios";
import {myKeys} from "../../myKeys.jsx";


export const getDataFromHesabfa = async (numberOfFactors = 250) => {
  const alertRefresh = () => {

    alert("خطا در دریافت اطلاعات از حسابفا")
  }

  const url = "https://api.hesabfa.com/v1/invoice/getinvoices"


  const data = {
    apiKey: myKeys.apiKey, // password: '123456',
    loginToken: myKeys.loginToken,//
    type: 0, queryInfo: {
      SortBy: 'Date', SortDesc: true, Take: numberOfFactors, Skip: 0, Filters: [{
        Property: 'Status', Operator: '=', Value: '1'
      },

      ]
    }
  }
  const res = await axios.post(url, data);
  if (res.status === 200 && res.data.Success) {
    return res.data.Result.List
  }
  alertRefresh()
  //console.log(result.status)


  return []
}