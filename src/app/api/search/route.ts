import { getRecipes } from '@/actions';
import { NextResponse } from "next/server";
import { TRecipe } from '@/types';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get('text');
    if (searchText) {
        const segments = searchText.split(' ');
        const recipes = await getRecipes();
        const searchResult: TRecipe[] = [];
        segments.forEach(segment => {
            recipes.forEach(recipe => {
                if (recipe.name.toLowerCase().includes(segment.toLowerCase())) {
                    searchResult.push(recipe);
                }
            });
        });
        return NextResponse.json({ recipes: searchResult })
    } else {
        return NextResponse.json({ recipes: [] })
    }
}