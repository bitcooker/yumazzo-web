import { TRecipe } from '@/types';
export const getRecipes = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes`;
    const response = await fetch(url);
    const data = await response.json();
    return data.message as TRecipe[];
}