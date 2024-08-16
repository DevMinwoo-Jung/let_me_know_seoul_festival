const dateObj = new Date();
const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
const date  = (dateObj.getDate()).toString().padStart(2, '0');
const TODAY_FULL_DATE = getTodayFullDate();
const TOMORROW_FULL_DATE = getTodayFullDate();

export function getCurrentDate() {

  const _year = year;
  const _month = month
  const _date  = date
  const hours = Number(dateObj.getHours()) <= 18 ? '0600' : '1800';
  return `${_year}${_month}${_date}${hours}`;
}

export function getTodayFullDate() {

  const _year = year;
  const _month = month
  const _date  = date

  return `${_year}${_month}${_date}`;
}

export function getTmorrowFullDate() {

  const dateObj = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // 하루의 밀리초 24시간 60분 60초 1000밀리초, 이걸 getTime에 더하면 정확히 하루 뒤 return
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date  = (dateObj.getDate()).toString().padStart(2, '0');

  return `${year}${month}${date}`;
}

/// 이 두개는 합쳐야 한다 리팩토링 필요

export function getThreeDaysLaterFullDate() {

  const dateObj = new Date(new Date().getTime() + 48 * 60 * 60 * 1000); // 하루의 밀리초 24시간 60분 60초 1000밀리초, 이걸 getTime에 더하면 정확히 하루 뒤 return
  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const date  = (dateObj.getDate()).toString().padStart(2, '0');

  return `${year}${month}${date}`;
}

export function getOneWeekAgo() {

  let currentDate = dateObj
  let sevenWeeksAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));

  let year = sevenWeeksAgo.getFullYear();
  let month = (sevenWeeksAgo.getMonth() + 1).toString().padStart(2, '0'); 
  let date = (sevenWeeksAgo.getDate()).toString().padStart(2, '0');;

  return `${year}${month}${date}`;
}

export function getOneWeek() {

  const _year = year;
  const _month = month
  const oneDayAgo = new Date(dateObj.getTime() - (1 * 24 * 60 * 60 * 1000)).getDate();

  return `${_year}${_month}${oneDayAgo}`;
}

// converting한 24시간 데이터 가져오기

export function getNowHours() {

  const NowHours = new Date().getHours();

  if(NowHours < 10) {
    return `0${NowHours}`
  } else {
    return NowHours;
  }

}

function convertTimeToTwentyFourHour(time:string){

  const hour = Number(time.slice (0, 2));

  if(hour <= 12) {
    if(hour === 0) {
      return `오전 ${12}`;
    } else {
      return `오전 ${hour}`;
    }
    
  } else  {
    return `오후 ${hour % 12}`;
  }

}
