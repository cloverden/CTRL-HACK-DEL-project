function calculateIngredients(recipes) {
    const recipeIngredients = []
    let shoppingList = {}

    recipes.forEach(recipe => {

        let recipeObject = require(`./recipes/${recipe}.json`)
        let recipeIngredients = Object.keys(recipeObject.ingredients)

        recipeIngredients.forEach(ingredient => {
            let shoppingListKeys = Object.keys(shoppingList)
            if (shoppingListKeys.includes(ingredient)) {
                shoppingList[ingredient].quantity = shoppingList[ingredient]['quantity'] + recipeObject['ingredients'][ingredient]['quantity']
            } else {
                shoppingList[ingredient] = { "quantity": "", "metric": "" }
                shoppingList[ingredient]['quantity'] = recipeObject['ingredients'][ingredient]['quantity']
                shoppingList[ingredient]['metric'] = recipeObject['ingredients'][ingredient]['metric']
            }
        })

    });

    console.log(shoppingList)
}

calculateIngredients(['exampleRecipe2', 'onePotSausageAndSunDriedTomatoPasta', 'exampleRecipe3', 'exampleRecipe4'])