export const getUserAgent = () => {
  const useAgent = navigator.userAgent

  if (useAgent.match(/iPhone/i)) {
    return 'IPhone'
  } else if (useAgent.match(/Android/i)) {
    return 'Android'
  } else {
    return 'Web'
  }
  
}

export const getKeyCodeByUserAgnet = () => {
  const keyCode = getUserAgent();

  if(keyCode === 'IPhone'){
    return 13;
  } else if (keyCode === 'Android'){
    return 62;
  } else {
    return 13
  }
}