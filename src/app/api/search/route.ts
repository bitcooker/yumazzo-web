import { NextResponse } from "next/server";
import { TRecipe } from '@/types';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('text');
    if (searchText) {
        const segments = searchText.split(' ');

        const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes`;
        const response = await fetch(url);
        const data = await response.json();
        let recipes: TRecipe[] = [];
        if (response.status == 200) {
            recipes = data.message as TRecipe[];
        }
        else return NextResponse.json({ error: "Unexpected Error Occured!" });

        const searchResult: TRecipe[] = [];
        segments.forEach(segment => {
            recipes.forEach(recipe => {
                if (recipe.name.toLowerCase().includes(segment.toLowerCase())) {
                    searchResult.push(recipe);
                }
            });
        });
        return NextResponse.json({ data: searchResult })
    } else {
        return NextResponse.json({ error: "Invalid Search" })
    }
}