import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    // Add ingredient array to Recipe model
    public ingredients: Ingredient[];
    public type: string;
    public instructions: string;

    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[], type: string, instructions: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.type = type;
        this.instructions = instructions;
    }
}