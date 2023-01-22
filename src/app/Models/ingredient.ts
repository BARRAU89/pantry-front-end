export class Ingredient {
    constructor(
        public id: number,
        public ingredientName: string,
        public ingredientWeight: number | undefined,
        public ingredientCalories: number | undefined,
        public ingredientImage: string,
        public inventoryCount: number | undefined

    ) { }

}