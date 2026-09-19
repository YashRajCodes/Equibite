import { getEmbed } from "@utils/embed";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    return Response.json(
        { component: await getEmbed(searchParams) },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Cache-Control": "public, max-age=300",
            },
        },
    );
}
