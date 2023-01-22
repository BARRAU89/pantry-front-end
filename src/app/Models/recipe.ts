export class Recipe {
    constructor(
        public id: number,
        public name:string,
        public url: string,
        public ingredient: Ingredient,
        public step: string
    ){}

}

export interface Ingredient {
    id: number, 
    name: string,
    weight: number, 
    calories: number,
}

