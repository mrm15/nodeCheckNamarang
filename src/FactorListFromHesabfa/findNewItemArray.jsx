const colData = [//
  {//
    title: "نور", //
    array: [//
      {title: "smd-سفید", code: "000139"},//
      {title: "smd-آفتابی", code: "000140"},//
      {title: "smd-انبه ای", code: "000141"},//
      {title: "smd-قرمز", code: "000142"},//
      {title: "smd-سفیدلنزدار سامسونگ", code: "000612"},//
    ]//
  },//
  {//
    title: "ترانس", //
    array: [//
      {title: "ترانس 200وات", code: "000054"},//
      {title: "ترانس 300وات", code: "000055"},//
      {title: "ترانس 400وات", code: "000056"},//
      {title: "ترانس 10 آمپر", code: "000436"},//
      {title: "ترانس نئون فلکس ( 5 آمپر )", code: "000497"},//
      {title: "ترانس نئون فلکس ( 10 آمپر )", code: "000498"},//
      {title: "ترانس نئون فلکس ( 16 آمپر )", code: "000499"},//
      {title: "ترانس نئون فلکس ( 25 آمپر )", code: "000500"},//
      {title: "ترانس نئون فلکس ( 33 آمپر ) ", code: "000501"},//
      {title: "ترانس 30 آمپر نئون", code: "000509"},//
      {title: "ترانس 20 آمپر نئون", code: ""},//
      {title: "", code: "000510"},//

    ]//
  },//
  {//
    title: "پلی اورتان", //
    array: [//
      {title: "چسب استیل و آهن", code: "000622"},//
      {title: "چسب رینگی و وکیوم", code: "000126"},//
    ]//
  },//
  {//
    title: "جوش فایبر", //
    array: [//
      {title: "دارد", code: "000381"},//
    ]//
  },//
  {//
    title: "پایه", //
    array: [//
      {title: "مفتول", code: "000231"},//
      {title: "پیچ", code: "000232"},//
      {title: "مفتول ال", code: "000629"},//
    ]//
  },//
  {//
    title: "فلاشر", //
    array: [//
      {title: "2 کانال", code: "000530"},//
      {title: "3 کانال", code: "000531"},//
      {title: "4 کانال", code: "000532"},//
      {title: "6 کانال", code: "000533"},//
      {title: "8 کانال", code: "000624"},//
    ]//
  },//
    {//
    title: "اسپیسر", //
    array: [//
      {title: "اسپیسر 3", code: "000545"},//
      {title: "اسپیسر 5", code: "000502"},//
      {title: "اسپیسر 7", code: "000503"},//

    ]//
  },//


]

const foundNewItemsBasedOnColData = (invoiceItems, colData) => {
  const newItems = []
  colData.forEach(category => {
    let tempText = ""
    ///////////////////////////////////////////////////
    category.array.forEach(item => {
      const foundItem = invoiceItems.find(invoiceItem => invoiceItem.Item.Code === item.code)
      if (foundItem) {
        const itemQuantity = foundItem.Quantity
        const newText = item.title + "_" + itemQuantity + "_عدد"
        tempText = newText + "\n"
      }
    })
    ///////////////////////////////////////////////////
    if (tempText !== "") {
      newItems.push({
        title: category.title, value: tempText
      });
    }
  })

  return newItems;
};

export const findNewItemArray = (row) => {

  const temp = [];
  // مرحله اول باید عنوان سفارش رو بگیرم بزارم

  temp.push({
    title: `نام مشتری`, value: row.ContactTitle
  })

  const newItems = foundNewItemsBasedOnColData(row.InvoiceItems, colData)


  const ttt = [...temp, ...newItems]
  return ttt
}