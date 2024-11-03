// app/api/proxy/[...path]/route.js
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const { path } = params;
  
  // Construct the full URL to the HTTP-only API
  const apiUrl = `http://openapi.seoul.go.kr:8088/${path.join('/')}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch data from the API: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from the API' },
      { status: 500 }
    );
  }
}
