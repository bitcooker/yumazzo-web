import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const data = await response.json();
    if (response.status == 201) {
        return NextResponse.json({ data: data.message });
    }
    else if (response.status == 422) {
        return NextResponse.json({ error: data.detail[0].msg });
    }
    else return NextResponse.json({ error: "Unexpected Error Occured!" });
}