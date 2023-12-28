import { type NextRequest } from 'next/server'

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  console.log('searchParams', searchParams)
  const cognito_access = searchParams.get('cognito_access');
  // console.log('cognito_access', cognito_access)
  // console.log(request)
  const body = await request.json();
  console.log('wtf', body)

  const metadata = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${cognito_access}`,
    },
    body: JSON.stringify(body)
  };

  try {
    const resp = await fetch("https://api.peopleforbikes.xyz/enqueue/city", metadata);

  if (!resp.ok) {
    console.log('not ok', resp.body)
    throw new Error("Failed to fetch data: " + JSON.stringify(body));
  }

  const data = await resp.json()
  } catch (err) {
    console.log('\nOUCH', err);
  }

  const data = {};
  return Response.json({ data })
}
