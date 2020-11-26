/* Creating an object to hold information */

var favouriteRecipe = {
    
    recipeTitle: 'Chilli con carne',
    
    servings: 4,
    
    ingredients: [ '1tbsp olive oil',
    ' 500g Mince',
    ' 400g tin of Red Kidney Beans',
    ' 1-2 tsp Hot chilli powder',
    ' 2 tbsp Tomato Puree', 
    ' 2tsp Garlic Puree',
    ' 400g tin of Chopped Tomatoes',
    ' 1 Onion',
    ' 1 Red pepper',
    ' Serving suggestion: with 50g Rice'],
    
    directions: [
        '1. Dice onion and pepper',
        '2. Brown mince and onion together', 
        '3. Add chopped tomatoes, galic puree and tomato puree and mix together', 
        '4. Add chilli powder and red kidney beans and mix', 
        '5. Simmer for 30 mins', 
        '6. Begin to boil rice 15mins into simmering', 
        '7. Serve and enjoy!'

    ]

}

console.log (favouriteRecipe. recipeTitle);

console.log ( favouriteRecipe. servings);

console.log ( favouriteRecipe. ingredients);

console.log ( favouriteRecipe. directions);

var ingredients = favouriteRecipe.ingredients

for (var i=10; i< ingredients.length; index ++) {

console.log (ingredients [i]);
}