import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('id');
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes/${recipeId}`;
    const response = await fetch(url);
    const data = await response.json();
    if (response.status == 200) {
        return NextResponse.json({ data: data.message });
    }
    else if (response.status == 422) {
        return NextResponse.json({ error: data.detail[0].msg });
    }
    else if (response.status == 404) {
        return NextResponse.json({ error: data.detail });
    }
    else return NextResponse.json({ error: "Unexpected Error Occured!" });
}