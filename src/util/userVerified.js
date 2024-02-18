import Swal from "sweetalert2";

export const userVerified = () => {

  const isThereAnyData = localStorage.getItem('namarangNodeGiri')

  if (!isThereAnyData) {
    return false
  } else {
    const current = Date.now()
    const temp = (+isThereAnyData > +current)
    console.log(temp)
    return temp
  }
}