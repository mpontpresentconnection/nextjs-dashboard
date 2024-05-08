export async function GET(request: Request) {
    return Response.json([{id: 1}, {id: 2}])
}

export async function POST(request: Request) {
    const body = await request.json()
    return Response.json({ message: `POST request received: ${JSON.stringify(body)}` })
}