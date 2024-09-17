const lightModalData = [// category SMD
  {key: 'آفتابی', value: '',    bgColor: '#ffff00', color: 'black', isActive: false, id: 1, category: 'smd', categoryText: 'smd'},////
  {key: 'سفید ', value: '',    bgColor: '#ffffff', color: 'black', isActive: false, id: 2, category: 'smd', categoryText: 'smd'},//
  {key: 'قرمز ', value: '',    bgColor: '#ff0000', color: 'black', isActive: false, id: 3, category: 'smd', categoryText: 'smd'},//
  {key: 'انبه ای ', value: '',   bgColor: '#d9a712', color: 'black', isActive: false, id: 4, category: 'smd', categoryText: 'smd'}, //
  //  category injection
  {
    key: 'آفتابی',
    value: '',
    bgColor: '#ffff00',
    color: 'black',
    isActive: false,
    id: 5,
    category: 'injection',
    categoryText: 'اینجکشن'
  }, //
  {
    key: 'سفید ',
    value: '',
    bgColor: '#ffffff',
    color: 'black',
    isActive: false,
    id: 6,
    category: 'injection',
    categoryText: 'اینجکشن'
  },//
  {
    key: 'قرمز ',
    value: '',
    bgColor: '#ff0000',
    color: 'black',
    isActive: false,
    id: 7,
    category: 'injection',
    categoryText: 'اینجکشن'
  },  //
  {
    key: 'انبه ای ',
    value: '',
    bgColor: '#d9a712',
    color: 'black',
    isActive: false,
    id: 8,
    category: 'injection',
    categoryText: 'اینجکشن'
  },//

]
const transistorModalData = [// category SMD
  {key: 'ترانس 200 A', value: '', bgColor: '', color: '', isActive: false, id: 1, category: 'smd', categoryText: ''},////
  {key: 'ترانس 300 A', value: '', bgColor: '', color: '', isActive: false, id: 2, category: 'smd', categoryText: ''},//
  {key: 'ترانس 400 A', value: '', bgColor: '', color: '', isActive: false, id: 3, category: 'smd', categoryText: ''},//


]
const transistorModalDataNeon = [// category SMD
  {key: 'ترانس 5 A', value: '', bgColor: '', color: '', isActive: false, id: 4, category: 'neon', categoryText: ''},////
  {key: 'ترانس 10 A', value: '', bgColor: '', color: '', isActive: false, id: 5, category: 'neon', categoryText: ''},//
  {key: 'ترانس 15 A', value: '', bgColor: '', color: '', isActive: false, id: 6, category: 'neon', categoryText: ''},//
  {key: 'ترانس 20 A', value: '', bgColor: '', color: '', isActive: false, id: 7, category: 'neon', categoryText: ''},//


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


  spacer:'',
  flusher:'',


  customerNameFontSize: 16,
  lightFontSize: 16,
  transistorFontSize: 16,
  sendTypeFontSize: 16,
  descriptionFontSize: 16,
  lightModalData,
  transistorModalData,
  transistorModalDataNeon,
  tableColumnArray:[],// این یه آرایه از آبجکت ها هست که عنوان داره . آیتم های داخلیش به صورت آرایه ای از آجکت ها هستن


}

export const afterSubmit = {
  customerNameText: '',
  lightNameText: 'کلیک کنید',
  transistorNameText: 'کلیک کنید',
  sendTypeText: 'کلیک کنید',
  fileNameUnique: '',
  fileNumberText: '',
  descriptionText: '',

  spacer:'',
  flusher:'',


  lightModalData
}
export const afterCloseLightModal = {
  lightModalData
}
export const afterCloseTransistorModal = {
  transistorModalData , transistorModalDataNeon
}