export enum Difficulty {
    "Easy" = 0,
    "Medium" = 1,
    "Hard" = 2,
}

export type TRecipe = {
    name: string,
    origin: string,
    description: string,
    difficulty: number,
    protein: string,
    produce: string,
    spice: string,
    cookingOil: string,
    volume: number,
    serves: number,
    authenticity: string,
    stock: string
}

export type TApiResponse = {
    data?: any,
    error?: string
}