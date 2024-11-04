export default async function handler(req, res) {
  const { start = '1', end = '25', codeName = '', title = '', date = '' } = req.query;

  // Construct the full URL for the external API request
  const url = `http://openapi.seoul.go.kr:8088/48504d46446d696e373365494c7848/json/culturalEventInfo/${start}/${end}/${codeName}/${title}/${date}`;
  
  try {
    console.log("Fetching URL:", url);  // Log the URL to verify correctness

    const response = await fetch(url);
    
    if (!response.ok) {
      // Log the response status and message
      console.error("Error response from API:", response.status, response.statusText);
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    // Log the specific error for troubleshooting
    console.error("Error in proxy handler:", error.message);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}