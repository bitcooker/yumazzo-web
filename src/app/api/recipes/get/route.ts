import { NextResponse } from "next/server";
import { TRecipe } from '@/types';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const recipeId = searchParams.get('id');
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes/${recipeId}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json({ data: data.message as TRecipe })
}