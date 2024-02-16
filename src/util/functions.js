export const getTomorrowDate = () => {
  const currentTimeStamp = new Date().valueOf() //timeStampInMiliseconds
  const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const newTimestamp = currentTimeStamp + twentyFourHoursInMilliseconds;
  return new Date(newTimestamp).toLocaleDateString('fa-IR', {year: 'numeric', month: '2-digit', day: '2-digit'})
}
export const getTodayDate = () => {
  const currentTimeStamp = new Date().valueOf() //timeStampInMiliseconds
  const twentyFourHoursInMilliseconds = 0; // 24 hours in milliseconds
  const newTimestamp = currentTimeStamp + twentyFourHoursInMilliseconds;
  return newTimestamp;

  // return new Date(newTimestamp).toLocaleDateString('fa-IR', {year: 'numeric', month: '2-digit', day: '2-digit'})
}
