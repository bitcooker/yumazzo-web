import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes/number`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.status == 200) {
        return NextResponse.json({ data: data.message });
    }
    else return NextResponse.json({ error: "Unexpected Error Occured!" });
}