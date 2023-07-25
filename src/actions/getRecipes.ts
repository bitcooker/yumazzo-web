import { TRecipe } from '@/types';
interface IParams {
    search?: string
}
export const getRecipes = async (params: IParams) => {
    const { search } = params;
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/yumazoo/recipes`;
    const response = await fetch(url);
    const data = await response.json();
    if (!search) {
        return data.message as TRecipe[];
    }
    else return [];
}