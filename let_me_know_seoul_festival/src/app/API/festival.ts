
const SERVICE_KEY = '48504d46446d696e373365494c7848';

export const fetchExample = async () => {

  const res = await fetch(
    `http://openapi.seoul.go.kr:8088/${SERVICE_KEY}/json/culturalEventInfo/1/20/`);
    
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }


  const data = await res.json();

  return data;
};