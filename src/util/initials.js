const lightModalData = [// category SMD
  {key: 'آفتابی', value: '', bgColor: '', color: '', isActive: false, id: 1, category: 'smd', categoryText: 'smd'},////
  {key: 'سفید ', value: '', bgColor: '', color: '', isActive: false, id: 2, category: 'smd', categoryText: 'smd'},//
  {key: 'قرمز ', value: '', bgColor: '', color: '', isActive: false, id: 3, category: 'smd', categoryText: 'smd'},//
  {key: 'انبه ای ', value: '', bgColor: '', color: '', isActive: false, id: 4, category: 'smd', categoryText: 'smd'}, //
  //  category injection
  {
    key: 'آفتابی',
    value: '',
    bgColor: '',
    color: '',
    isActive: false,
    id: 5,
    category: 'injection',
    categoryText: 'اینجکشن'
  }, //
  {
    key: 'سفید ',
    value: '',
    bgColor: '',
    color: '',
    isActive: false,
    id: 6,
    category: 'injection',
    categoryText: 'اینجکشن'
  },//
  {
    key: 'قرمز ',
    value: '',
    bgColor: '',
    color: '',
    isActive: false,
    id: 7,
    category: 'injection',
    categoryText: 'اینجکشن'
  },  //
  {
    key: 'انبه ای ',
    value: '',
    bgColor: '',
    color: '',
    isActive: false,
    id: 8,
    category: 'injection',
    categoryText: 'اینجکشن'
  },//

]
const transistorModalData = [// category SMD
  {key: 'ترانس 200', value: '', bgColor: '', color: '', isActive: false, id: 1, category: 'smd', categoryText: ''},////
  {key: 'ترانس 300 ', value: '', bgColor: '', color: '', isActive: false, id: 2, category: 'smd', categoryText: ''},//
  {key: 'ترانس 400 ', value: '', bgColor: '', color: '', isActive: false, id: 3, category: 'smd', categoryText: ''},//


]
export const initialObjectState = {
  reload: 0,
  fileNameUnique: "",
  customerNameText: '',
  lightNameText: 'کلیک کنید',
  transistorNameText: 'کلیک کنید',
  sendTypeText: 'کلیک کنید',
  fileNumberText: '',
  descriptionText: '',

  customerNameFontSize: 16,
  lightFontSize: 16,
  transistorFontSize: 16,
  sendTypeFontSize: 16,
  descriptionFontSize: 16,
  lightModalData,
  transistorModalData
}

export const afterSubmit = {
  customerNameText: '',
  lightNameText: 'کلیک کنید',
  transistorNameText: 'کلیک کنید',
  sendTypeText: 'کلیک کنید',
  fileNameUnique: '',
  fileNumberText: '',
  descriptionText: '',
  lightModalData
}
export const afterCloseLightModal = {
  lightModalData
}
export const afterCloseTransistorModal = {
  transistorModalData
}