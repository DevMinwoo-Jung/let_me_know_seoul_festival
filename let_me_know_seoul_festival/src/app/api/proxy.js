import { SERVICEKEY } from './festivalEndPoint'

export default async function handler(req, res) {
  try {
    const response = await fetch(`http://openapi.seoul.go.kr:8088/48504d46446d696e373365494c7848/json/culturalEventInfo`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
} 