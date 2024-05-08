export async function DELETE(
    request: Request,
    { params }: { params: { id: number } }
) {
    return Response.json({ message: `DELETE request received for id ${params.id}` })
}

export async function GET(
    request: Request,
    { params }: { params: { id: number } }
) {
    return Response.json({ message: `GET request received for id ${params.id}` })
}

export async function PUT(
    request: Request,
    { params }: { params: { id: number } }
) {
    return Response.json({ message: `PUT request received for id ${params.id}` })
}