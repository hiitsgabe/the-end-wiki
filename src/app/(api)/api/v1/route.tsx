import { NextRequest } from 'next/server';

export function GET(request: NextRequest) {
    //   const searchParams = request.nextUrl.searchParams;
    //   const query = searchParams.get('query');

    return new Response(
        JSON.stringify({ result: `Hi, this is The End Wiki API V1` }),
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
}