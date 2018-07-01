import { Injectable } from '@angular/core';

// Import Recipe model to use in recipe service
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

// To inject a service into another service
@Injectable()
// Service to manage our recipes
export class RecipeService {
    // Recipes changed event which will pass an array of Recipes as a value
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        // Need to pass in an array of ingredients for each Recipe now
        new Recipe(
            'Szechwan Chilli Chicken', 
            'Chilli chicken cooked with peppercorns', 
            'https://i.ndtvimg.com/i/2014-12/chilli-chicken_625x350_81419935731.jpg',
            [
                new Ingredient('2-3 Spring Onions, chopped', 1),
                new Ingredient('5-6 Dry Red Chillies (deseeded), chopped', 1),
                new Ingredient('2-3 Tbsp Ginger, chopped', 1),
                new Ingredient('3 Tbsp Brown Pepper Corn', 1),
                new Ingredient('10-12 Pieces Chicken (with bone)', 1),
                new Ingredient('1 tsp Ajinomoto (optional)', 1),
                new Ingredient('2 tsp White Pepper', 1),
                new Ingredient('1 Tbsp Black Vinegar', 1),
                new Ingredient('2 tsp Chilli oil', 1)
            ],
            'Chicken',
            '1.Flash fry the chicken with ginger till there colour changes to golden.2.Now, drain the oil and keep this aside.3.Now, add garlic, spring onions green pepper corns and the brown peppercorn.4.Stir for 5 minutes and then add the dry chillies, white pepper powder, ajino moto, salt and chilli oil.5.Stir again for 5-10 minutes and add the black vinegar.6.Stir fry for 10 minutes and garnish with green peppercorns.7.Szechwan chilli chicken is ready to be served.'
        ),
        new Recipe(
            'Ginger Garlic Chicken', 
            'Cornflour coated chicken fried with tomato-soy sauce', 
            'https://i.ndtvimg.com/i/2015-09/chicken_625x350_51442393208.jpg',
            [
                new Ingredient('1 Chicken (cut up into small pieces about 16)', 1),
                new Ingredient('2 Tbsp Cornflour', 1),
                new Ingredient('1/4 Cup Oil', 1),
                new Ingredient('1 Large Onion, sliced', 1),
                new Ingredient('2 Tbsp Ginger, grated', 1),
                new Ingredient('10 Garlic cloves', 1),
                new Ingredient('2 tsp Soya Sauce', 1),
                new Ingredient('1/2 Cup Water', 1),
                new Ingredient('1 Tbsp Vinegar', 1),
                new Ingredient('1/4 Cup Tomato Puree', 1),
                new Ingredient('1 tsp Salt', 1),
                new Ingredient('1/4 tsp Black Pepper, powdered', 1),
                new Ingredient('1 tsp Cornflour', 1),
            ],
            'Chicken',
            '1.Wash chicken pieces and wipe dry.2.Put these and cornflour into a paper or plastic bag and shake well to coat chicken well.3.Remove and dust off the excess flour and keep aside.4.Heat oil in a kadahi.5.Add chicken pieces first over high heat then lower the heat and fry till golden and cooked through.6.Drain well and keep aside.7.In the remaining oil, add sliced onion, ginger and garlic, and stir fry till onion is transparent.8.Add chicken, turn around a few times and then add the mixed sauce ingredients.9.Stir fry till the sauce thickens a bit and serve hot.'
        ),
        new Recipe(
            'BBQ Chicken', 
            'Chicken marinated in sauce and barbecued', 
            'https://i.ndtvimg.com/i/2015-12/bbq-chicken-625_625x350_41450202996.jpg',
            [
                new Ingredient('2 Chicken breast', 1),
                new Ingredient('2 Tbsp Char siu sauce', 1),
                new Ingredient('1 Tbsp Garlic & ginger', 1),
                new Ingredient('1 tsp Rice vinegar', 1),
                new Ingredient('1 tsp Honey', 1),
                new Ingredient('1 tsp Red chilli paste (optional)', 1),
                new Ingredient('1/2 tsp Sesame oil', 1),
                new Ingredient('To taste Salt & pepper', 1)
            ],
            'Chicken',
            '1.In a bowl, mix all the marinade ingredients. Mix the chicken with the marinade and keep aside for 15 minutes.2.Pan sear the chicken from both sides.3.Serve with garlic and egg fried rice.'
        ),
        new Recipe(
            'Chicken with Chestnuts', 
            'Minced chicken fried with water chestnuts and radish', 
            'https://i.ndtvimg.com/i/2016-06/dhaniwal-chicken_625x350_71464783643.jpg',
            [
                new Ingredient('5 dried Chinese mushrooms', 1),
                new Ingredient('2 Tbsp sesame oil', 1),
                new Ingredient('1/2 kg chicken mince', 1),
                new Ingredient('1 diced green capsicum', 1),
                new Ingredient('1 Tbsp chopped garlic', 1),
                new Ingredient('1 Tbsp shredded ginger', 1),
                new Ingredient('3 Tbsp white radish', 1),
                new Ingredient('2 Tbsp chopped spring onion', 1),
                new Ingredient('1 Tbsp soya sauce', 1),
                new Ingredient('1 Tbsp fish sauce', 1),
                new Ingredient('1 Tbsp date puree', 1),
                new Ingredient('1 Tbsp vinegar', 1),
                new Ingredient('50 ml water', 1),
                new Ingredient('1/2 tsp chilli flakes', 1),
                new Ingredient('1 ice-berg lettuce', 1),
                new Ingredient('1 Tbsp chopped coriander', 1)
            ],
            'Chicken',
            '1.Soak mushrooms in boiling water for 30 minutes. Drain and discard stems.2.Heat oil. Stir-fry chicken until browned. Remove from pan.3.Stir-fry capsicum, ginger and garlic for two minutes.4.Return chicken to pan with remaining ingredients, except lettuce and coriander.5.Heat through and season well.6.Serve on a bed of lettuce, garnished with coriander.'
        ),
        new Recipe(
            'Veg Hakka Noodles Recipe', 
            'Vegetable hakka noodles with beans', 
            'https://i.ndtvimg.com/i/2018-03/noodles_620x350_51520935526.jpg',
            [
                new Ingredient('Noodles', 1),
                new Ingredient('1 tsp Salt', 1),
                new Ingredient('1 tsp Oil', 1),
                new Ingredient('1 tsp Garlic paste', 1),
                new Ingredient('1 tsp Ginger paste', 1),
                new Ingredient('1/2 Cup Beans', 1),
                new Ingredient('1/2 Cup Cabbage, chopped', 1),
                new Ingredient('1/2 Cup Carrot, chopped', 1),
                new Ingredient('1/2 Cup Spring onion, chopped', 1),
                new Ingredient('1/2 Cup Capsicum, chopped', 1),
                new Ingredient('2 Tbsp Soy sauce', 1),
                new Ingredient('2 Tbsp Green chilli sauce', 1),
                new Ingredient('1 Tbsp Tomato sauce', 1)
            ],
            'Vegan',
            '1.Boil the noodles in a pan till it starts to simmer.Veg Hakka Noodles2.Add salt and some oil to the boiling noodles.3.When the noodles start to e a little sticky, drain the excess water and wash them in cold water.4.In another pan, heat about 3 teaspoon of oil.Veg Hakka Noodles5.Put ginger paste followed by garlic paste. Saute them well till golden brown.Veg Hakka Noodles6.Now add all the vegetables to the pan.Veg Hakka Noodles7.Saute them well and add soy sauce, green chilli sauce and tomato sauce.Veg Hakka Noodles8.Mix them well and now add the boiled noodles to them.Veg Hakka Noodles9.Mix them thoroughly with the vegetables.Veg Hakka Noodles10.Serve hot.'
        ),
        new Recipe(
            'Baked Raw Banana Samosa', 
            'Samosa made of raw banana combined with chilli', 
            'https://c.ndtvimg.com/raw-banana-samosa_625x300_1530164135226.jpg?downsize=650:400&output-quality=70&output-format=webp',
            [
                new Ingredient('100 Gram Onion, finely chopped', 1),
                new Ingredient('5 Gram Ginger, chopped', 1),
                new Ingredient('5 Gram Curry powder', 1),
                new Ingredient('10 Gram Fresh coriander, chopped', 1),
                new Ingredient('5 Gram Green chilli', 1),
                new Ingredient('200 Gram Raw banana paste', 1),
                new Ingredient('1 Tbsp Refined oil', 1),
                new Ingredient('5 Gram Mustard seeds', 1),
                new Ingredient('1/2 Cup Spring onion, chopped', 1),
                new Ingredient('4 sheets Phyllo sheets', 1)
            ],
            'Vegan',
            '1.Heat the oil, crackle the mustard seeds.2.Add onion, ginger, & garlic, sauté until its turn golden brown.3.Mix with raw banana paste, add curry powder& chopped fresh coriander. Add seasoning.4.Take a phyllo pastry, cut in to three strips.5.Put 2 table spoon of mixture on a strip & fold over itself in to a triangle. Put all the samosas on a non-stick baking tray.6.Bake for a 15 to 20 minute until golden brown. Serve hot.'
        ),
        new Recipe(
            'Tuscan Panzanella', 
            'Bread slices soaked in olive oil, vinegar and salt.', 
            'https://i.ndtvimg.com/i/2018-01/tuscan-salad_620x350_81516262415.jpg',
            [
                new Ingredient('4 cups torn pieces of sourdough or rustic peasant bread, 1 to 1 1/2 inches wide', 1),
                new Ingredient('3 tablespoons olive oil', 1),
                new Ingredient('Kosher salt and cracked black pepper', 1),
                new Ingredient('1/4 cup red wine vinegar', 1),
                new Ingredient('1 tablespoon drained capers', 1),
                new Ingredient('2 teaspoons grated lemon zest', 1),
                new Ingredient('1 garlic clove, minced', 1),
                new Ingredient('1/2 cup extra virgin olive oil', 1),
                new Ingredient('1 cup thinly sliced red onion', 1),
                new Ingredient('5 assorted ripe heirloom tomatoes, halved or quartered, depending on size and shape', 1),
                new Ingredient('1 red bell pepper, julienned', 1),
                new Ingredient('1 yellow bell pepper, julienned', 1),
                new Ingredient('1 cucumber, peeled, seeded, and chopped', 1),
                new Ingredient('1 fennel bulb, trimmed and thinly sliced, fronds reserved', 1),
                new Ingredient('1/2 cup pitted and halved Niçoise olives', 1),
                new Ingredient('1/4 cup chopped fresh basil leaves', 1),
                new Ingredient('1/4 cup shaved Parmigiano-Reggiano cheese', 1),
            ],
            'Vegan',
            '1. Preheat the oven to 300°F.2. In a bowl, toss the bread with the olive oil and salt and pepper to taste. Spread the bread on a baking sheet and bake for 7 to 10 minutes, until slightly crisp. (The pieces should not be as crispy as croutons.) Alternatively, spread the bread cubes on a baking sheet and let them dry, uncovered, for about 24 hours.3. In a large bowl, whisk together the vinegar, capers, zest, and garlic. Season to taste with salt and pepper. Whisking constantly, add the extra virgin olive oil in a stream until well incorporated.4. Add the onion, tomatoes, bell peppers, cucumber, fennel, and olives and toss with the vinaigrette. Adjust the salt and pepper.5. Tear the fennel fronds and add them to the bowl along with the basil and bread. Toss to coat. Set aside for 20 minutes.6. Divide the salad among 4 plates. Garnish each plate with shaved cheese and serve. If you prefer a moister salad, drizzle with a little more extra virgin olive oil.'
        ),
        new Recipe(
            'Dressed Herring Salad', 
            'Salad which consists of boiled vegetables', 
            'https://i.ndtvimg.com/i/2018-01/dressing-harrad_620x350_41516262746.jpg',
            [
                new Ingredient('3 large potatoes boiled in their jackets, cooled, peeled, and finely chopped or shredded', 1),
                new Ingredient('4 large unpeeled carrots, boiled, cooled, peeled, and finely chopped or shredded', 1),
                new Ingredient('3 large beets boiled in their skins, cooled, peeled, and finely chopped or shredded', 1),
                new Ingredient('1 1/2 cups mayonnaise', 1),
                new Ingredient('1 medium or large (depending on taste) red or yellow onion, finely chopped', 1),
                new Ingredient('4 fillets of pickled herring in oil, finely chopped', 1),
                new Ingredient('4 large hard-cooked eggs, finely chopped', 1),
                new Ingredient('Black pepper to taste', 1)
            ],
            'Vegan',
            'In the same large saucepan, boil 3 large potatoes in their jackets, 4 large unpeeled carrots, and 3 large beets until tender. The carrots will take about 15 to 20 minutes, the potatoes will take about 40 minutes and the beets will take 1 hour or more. Just remove the vegetables that become tender but not mushy and continue cooking the rest.Peel while still warm, cool completely and shred the carrots and beets and finely chop the potatoes.Place a ring mold or the ring from a springform pan on a pretty serving platter. This also can be assembled free form in a round or oval shape or in a 13x9-inch pan.First place the entire portion of chopped potatoes on the bottom, patting into an even layer. Spread 1/3 of the mayonnaise on top to completely cover the potatoes.Place 1/2 of the beets, then 1/2 of the carrots and 1/2 of the finely chopped onion, all of the chopped pickled herring, and 1/3 of the mayonnaise.Then layer the remainder of the onion and carrots, all of the chopped eggs and black pepper to taste, the remainder of the mayonnaise, and the remainder of the beets and pack down. Refrigerate for at least 6 hours before serving.Some people finish their shubas with the chopped eggs on top; its your choice! Its a beautiful salad when sliced and served. Garnish with parsley or dill.'
        ),
        new Recipe(
            'Spicy Ramen Noodle Salad', 
            'Ramen Noodle Salad With Chicken', 
            'https://i.ndtvimg.com/i/2018-01/noodles-salad_620x350_61516262792.jpg',
            [
                new Ingredient('4 packages instant ramen', 1),
                new Ingredient('1/2 cup canola oil', 1),
                new Ingredient('2 teaspoons sesame oil', 1),
                new Ingredient('1/4 cup rice vinegar', 1),
                new Ingredient('1/2 teaspoon kosher salt', 1),
                new Ingredient('1/4 teaspoon crushed red peppers', 1),
                new Ingredient('1/4 cup honey', 1),
                new Ingredient('2 cups grilled chicken strips', 1),
                new Ingredient('1 bunch scallions finely sliced (greens only)', 1),
                new Ingredient('1 bag coleslaw mix with carrots and red cabbage', 1),
                new Ingredient('1/3 cup sliced almonds toasted', 1),
            ],
            'Chicken',
            'Discard the spice packets and cook the ramen a minute shy of the instructions.While the ramen is cooking mix the canola oil, sesame oil, rice vinegar, salt, honey in a large bowl and whisk.Reserve 1/4 cup of the dressing and toss the noodles with the rest of the dressing while hot.Add in the remaining ingredients including the reserved dressing and toss well.Serve cold or at room temperature.'
        ),
        new Recipe(
            'Shieldzini Salad', 
            'Sheildzini is a Japanese cucumber salad', 
            'https://i.ndtvimg.com/i/2018-01/jaapn_620x350_41516262910.jpg',
            [
                new Ingredient('3 cucumbers', 1),
                new Ingredient('1 teaspoon salt', 1),
                new Ingredient('1 tablespoon vegetable oil', 1),
                new Ingredient('2 teaspoons white sugar', 1),
                new Ingredient('3 tablespoons rice wine vinegar', 1),
                new Ingredient('3 tablespoons soy sauce', 1)
            ],
            'Vegan',
            'Cut cucumbers lengthwise, scoop out seeds with a spoon, and slice cucumbers into bite-sized pieces. Transfer to a salad bowl.In a small bowl, mix together salt, oil, sugar, rice wine vinegar, and soy sauce. Pour over cucumbers, and gently toss. Refrigerate several hours before serving, tossing every now and then.'
        ),
        new Recipe(
            'Fiambre Salad', 
            'Traditional Guatemalan dish', 
            'https://i.ndtvimg.com/i/2018-01/salad_620x350_51516262965.jpg',
            [
                new Ingredient('3⁄4 cup chopped parsley', 1),
                new Ingredient('1⁄2 cup white wine vinegar', 1),
                new Ingredient('2 tbsp. capers, drained', 1),
                new Ingredient('1 tbsp. Dijon mustard', 1),
                new Ingredient('6 scallions, roughly chopped', 1),
                new Ingredient('1 (7-oz.) jar pimientos, drained', 1),
                new Ingredient('1 clove garlic, sliced thin', 1),
                new Ingredient('1 (1") piece ginger, sliced thin', 1),
                new Ingredient('1 cup olive oil', 1),
                new Ingredient('Kosher salt and ground black pepper, to taste', 1),
                new Ingredient('1 lb. boneless, skinless chicken breasts, poached and cut into 1″ cubes', 1),
                new Ingredient('1 lb. medium head-on, un-peeled shrimp, boiled', 1),
                new Ingredient('1 lb. peeled Yukon gold potatoes, boiled and halved', 1),
                new Ingredient('8 oz. cooked uncured chorizo sausage, cut into 1⁄4″ slices', 1),
                new Ingredient('8 oz. cooked linguiça sausage, cut into 1⁄4″ slices', 1),
                new Ingredient('4 oz. green beans, trimmed and boiled until tender', 1),
                new Ingredient('3 oz. salami, cut into 1⁄2″ strips', 1),
                new Ingredient('3 oz. ham, cut into 1⁄2″ strips', 1),
                new Ingredient('1 cup frozen peas', 1),
                new Ingredient('4 medium carrots, cut into 1⁄2″ rounds, boiled until tender', 1),
                new Ingredient('4 ribs celery, cut into 1⁄2″ slices, boiled until tender', 1),
                new Ingredient('1 head cauliflower, cut into florets, boiled until tender', 1),
                new Ingredient('1 small head green leaf lettuce, leaves separated', 1),
                new Ingredient('1 small head red leaf lettuce, leaves separated', 1),
                new Ingredient('8 oz. farmers cheese or feta', 1),
                new Ingredient('3 oz. mini gherkins, drained', 1),
                new Ingredient('3 oz. Spanish olives, pitted', 1),
                new Ingredient('5 radishes, quartered', 1),
                new Ingredient('4 boiled eggs, quartered', 1),
                new Ingredient('3 pacayas (palm tree blossoms, available from Amazon.com)', 1),
            ],
            'Vegan',
            'Puree 1⁄2 cup parsley, vinegar, capers, mustard, scallions, pimientos, garlic, and ginger in a blender. Drizzle in oil until emulsified; season with salt and pepper and set vinaigrette aside. Toss chicken, shrimp, potatoes, chorizo, linguiça, green beans, salami, ham, peas, carrots, celery, and cauliflower with 3⁄4 cup vinaigrette in a bowl. Toss beets with 1⁄4 cup vinaigrette in another bowl. Cover both bowls; chill 30 minutes to blend flavors. Arrange lettuce on bottom of a large platter; top with marinated meats and vegetables. Garnish with beets, cheese, gherkins, olives, radishes, eggs, and pacayas; sprinkle with remaining parsley.'
        ),
        new Recipe(
            'Nicoise Salad', 
            'Salad originating in the French city of Nice', 
            'https://i.ndtvimg.com/i/2018-01/salad_620x350_51516263033.jpg',
            [
                new Ingredient('1 pound red-skinned potatoes, sliced 1/3 inch thick', 1),
                new Ingredient('Kosher salt', 1),
                new Ingredient('2 tablespoons dry white wine', 1),
                new Ingredient('10 ounces haricots verts or thin green beans, trimmed', 1),
                new Ingredient('4 large eggs', 1),
                new Ingredient('1/4 cup white wine vinegar', 1),
                new Ingredient('1/2 shallot, minced (about 2 tablespoons)', 1),
                new Ingredient('2 tablespoons dijon mustard', 1),
                new Ingredient('1 tablespoon chopped fresh thyme', 1),
                new Ingredient('Freshly ground pepper', 1),
                new Ingredient('3/4 cup extra-virgin olive oil', 1),
                new Ingredient('8 cherry tomatoes or small cocktail tomatoes, halved or quartered', 1),
                new Ingredient('1 head Boston lettuce, leaves separated', 1),
                new Ingredient('6 radishes, trimmed and quartered', 1),
                new Ingredient('2 5 1/2-ounce cans Italian or Spanish tuna packed in olive oil, drained', 1),
                new Ingredient('1/2 cup nicoise olives', 1)
            ],
            'Fish',
            'Put the potatoes in a medium saucepan; cover with cold water and season with salt. Bring to a simmer over medium-high heat and cook until fork-tender, about 5 minutes. Drain and transfer to a medium bowl; drizzle with the wine and let cool. Reserve the saucepan.Meanwhile, bring a separate saucepan of salted water to a boil. Fill a bowl with salted ice water. Add the haricots verts to the boiling water; cook until crisp-tender and bright green, 2 to 4 minutes. Drain and immediately plunge into the ice water to cool; drain and pat dry.Place the eggs in the reserved saucepan and cover with cold water by about 1 inch. Bring to a simmer over medium-high heat, then cover, remove from the heat and let stand, 10 to 12 minutes. Drain, then run under cold water to cool. Peel under cold running water.Make the dressing: Whisk the vinegar, shallot, mustard, thyme, 1/2 teaspoon salt, and pepper to taste in a bowl. Whisk in the olive oil in a slow, steady stream until emulsified.Toss the tomatoes ian a small bowl with salt and pepper to taste. Add about 1/4 cup dressing to the potatoes and toss. Quarter the hard-cooked eggs.Divide the lettuce among 4 plates. Arrange the potatoes, haricots verts, radishes, hard-cooked eggs and tuna on top. Pour any juices from the tomatoes into the dressing, then add the tomatoes to the plates. Drizzle with the dressing and top with the olives.'
        ),
        new Recipe(
            'Green Papaya Salad', 
            'Papaya tossed with herbs, lime juice and soy sauce', 
            'https://i.ndtvimg.com/i/2016-04/papaya-salad-625_625x350_51460530142.jpg',
            [
                new Ingredient('1 pound red-skinned potatoes, sliced 1/3 inch thick', 1),
                new Ingredient('Kosher salt', 1),
                new Ingredient('2 tablespoons dry white wine', 1),
                new Ingredient('10 ounces haricots verts or thin green beans, trimmed', 1),
                new Ingredient('4 large eggs', 1),
                new Ingredient('1/4 cup white wine vinegar', 1),
                new Ingredient('1/2 shallot, minced (about 2 tablespoons)', 1),
                new Ingredient('2 tablespoons dijon mustard', 1),
                new Ingredient('1 tablespoon chopped fresh thyme', 1),
                new Ingredient('Freshly ground pepper', 1),
                new Ingredient('3/4 cup extra-virgin olive oil', 1),
                new Ingredient('8 cherry tomatoes or small cocktail tomatoes, halved or quartered', 1),
                new Ingredient('1 head Boston lettuce, leaves separated', 1),
                new Ingredient('6 radishes, trimmed and quartered', 1),
                new Ingredient('2 5 1/2-ounce cans Italian or Spanish tuna packed in olive oil, drained', 1),
                new Ingredient('1/2 cup nicoise olives', 1)
            ],
            'Vegan',
            '1.In a mortar, lightly pound the garlic, add the chillies and lightly pound again.2.Add the jaggery, lemon juice and soy sauce, pound to a paste.3.Add the roasted peanuts and lightly pound while occasionally stirring with a spoon to prevent the paste from thickening.4.Now add the tomato, stir, then add the long beans and slightly bruise them.5.Add the shredded papaya, lightly pound and stir until all the ingredients have blended together.6.Arrange on a serving dish and garnish with crushed peanuts.'
        ),
        new Recipe(
            'Hot yellow curry', 
            'Thai yellow curry with fresh vegetables', 
            'https://i.ndtvimg.com/i/2016-04/thai-curry-625_625x350_41460530194.jpg',
            [
                new Ingredient('2 Tbsp Oil', 1),
                new Ingredient('1 Tbsp Fresh turmeric chopped (you can use powdered turmeric also)', 1),
                new Ingredient('1 Tbsp Fresh galangal chopped (a young ginger root with a distinct flavor)', 1),
                new Ingredient('10 ounces haricots verts or thin green beans, trimmed', 1),
                new Ingredient('1 Tbsp Fresh lemongrass', 1),
                new Ingredient('1/2 tsp Green chillies, finely chopped', 1),
                new Ingredient('1/2 tsp Fresh red chillies, finely chopped', 1),
                new Ingredient('500 Ml Milk (evaporated)', 1),
                new Ingredient('1/2 tsp Salt', 1),
                new Ingredient('A pinch of Sugar', 1),
                new Ingredient('1/2 Cup String beans (diced)', 1),
                new Ingredient('1/2 Cup Broccoli florets, medium', 1),
                new Ingredient('1/2 Cup Carrots, sliced', 1),
                new Ingredient('1/2 Cup Eggplant (cubed)', 1),
                new Ingredient('1 Tbsp Garlic, finely chopped', 1),
                new Ingredient('2 Tbsp Oil', 1)
            ],
            'Vegan',
            '1.Heat oil in a wok, and then add turmeric, chopped galangal, lemongrass, chillies and saute.2.Add evaporated milk & a just a little bit of water (1/4 cup) to thin the curry and let it boil.3.Season with salt, sugar and cook till dissolved well.4.Remove from heat and let it cool.5.Saute vegetables with some oil and garlic in another pan.6.Add the pinch of salt and let it saute for a couple of minutes.7.Now add the curry & bring to boil. Cover it and let it simmer for 7 - 8 minutes till the vegetables cook.8.Serve hot.'
        ),
        new Recipe(
            'Thai Chilli Broccoli Salad', 
            'Fresh broccoli dressed in vinaigrette and spices', 
            'https://i.ndtvimg.com/i/2015-01/broccoli-salad_625x350_51422015307.jpg',
            [
                new Ingredient('1/2 kg blanched broccoli florets', 1),
                new Ingredient('For the chilli vinaigrette:', 1),
                new Ingredient('1 Tbsp lemon juice', 1),
                new Ingredient('1 Tbsp pomegranate juice', 1),
                new Ingredient('1/2 tsp castor sugar', 1),
                new Ingredient('1 tsp crushed yellow mustard seeds', 1),
                new Ingredient('1/4 tsp dried chilli flakes', 1),
                new Ingredient('1 tsp chopped garlic', 1),
                new Ingredient('1 Tbsp oil', 1),
                new Ingredient('1 segmented orange', 1),
                new Ingredient('2 Tbsp hung curd', 1),
                new Ingredient('Grated rind of 1 orange', 1),
                new Ingredient('1/2 Cup Carrots, sliced', 1),
                new Ingredient('2 Tbsp orange juice', 1),
                new Ingredient('1 Tbsp vinegar', 1),
                new Ingredient('1 tsp tomato puree', 1),
                new Ingredient('1 tsp sugar, salt and pepper', 1)
            ],
            'Vegan',
            '1.Whisk all vinaigrette ingredients together.2.Leave for 2 to 3 hours.3.Combine curd topping with ingredients and season well.4.Before serving, pour the Vinaigrette over the broccoli and top with curd dressing and orange segment.'
        ),
      ];

    constructor(private slService: ShoppingListService){}

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        // Will return a new array, which is an exact copy of the array in the service file
        return this.recipes.slice();
    }

    // Load a single recipe by ID
    getRecipe(index: number){
        return this.recipes[index]; // Return this recipes and select the item at the ID index
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        // Refresh recipes array; Recipe changed event emits a new value (copy of new recipes)
        this.recipesChanged.next(this.recipes.slice());
    }

    // On update completely overwrite old recipe with new info
    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        // Refresh recipes array, but must listen to it in ngOnInit in RecipeList component
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        // Refresh recipes array after deleting one
        this.recipesChanged.next(this.recipes.slice());
    }
}