document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            name: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
            ingredients: ['Spaghetti', 'Eggs', 'Cheese', 'Pancetta', 'Pepper'],
            instructions: 'Boil pasta. Cook pancetta. Mix eggs and cheese. Combine all with pasta and pepper.'
        },
        {
            name: 'Chicken Alfredo',
            description: 'Creamy pasta with chicken, cheese, and garlic.',
            ingredients: ['Pasta', 'Chicken', 'Cheese', 'Garlic', 'Cream'],
            instructions: 'Cook pasta. Cook chicken. Make sauce with cheese, garlic, and cream. Combine all.'
        },
        {
            name: 'Beef Tacos',
            description: 'A Mexican dish made with seasoned beef, lettuce, cheese, and salsa.',
            ingredients: ['Tortillas', 'Beef', 'Lettuce', 'Cheese', 'Salsa'],
            instructions: 'Cook beef. Heat tortillas. Assemble tacos with beef, lettuce, cheese, and salsa.'
        },
        {
            name: 'Chicken Curry',
            description: 'A spicy Indian dish made with chicken, curry, and vegetables.',
            ingredients: ['Chicken', 'Curry', 'Vegetables', 'Rice'],
            instructions: 'Cook chicken. Cook vegetables. Make sauce with curry. Combine all and serve with rice.'
        },
        {
            name: 'Pancakes',
            description: 'A breakfast dish made with eggs, flour, milk, and syrup.',
            ingredients: ['Eggs', 'Flour', 'Milk', 'Syrup'],
            instructions: 'Mix eggs, flour, and milk. Cook pancakes. Serve with syrup.'
        },
        {
            name: 'Salad',
            description: 'A healthy dish made with lettuce, tomatoes, cucumbers, and dressing.',
            ingredients: ['Lettuce', 'Tomatoes', 'Cucumbers', 'Dressing'],
            instructions: 'Chop lettuce, tomatoes, and cucumbers. Mix with dressing.'
        }
    ];

    const container = document.getElementById('recipes');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        const recipeName = document.createElement('h3');
        recipeName.textContent = recipe.name;
        recipeCard.appendChild(recipeName);

        const recipeDescription = document.createElement('p');
        recipeDescription.textContent = recipe.description;
        recipeCard.appendChild(recipeDescription);

        const recipeDetails = document.createElement('div');
        recipeDetails.classList.add('recipe-details');
        recipeDetails.style.display = 'none';

        const ingredientsTitle = document.createElement('h4');
        ingredientsTitle.textContent = 'Ingredients:';
        recipeDetails.appendChild(ingredientsTitle);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            ingredientsList.appendChild(listItem);
        });
        recipeDetails.appendChild(ingredientsList);

        const instructionsTitle = document.createElement('h4');
        instructionsTitle.textContent = 'Instructions:';
        recipeDetails.appendChild(instructionsTitle);

        const instructionsText = document.createElement('p');
        instructionsText.textContent = recipe.instructions;
        recipeDetails.appendChild(instructionsText);

        recipeCard.appendChild(recipeDetails);

        recipeCard.addEventListener('click', () => {
            recipeDetails.style.display = recipeDetails.style.display === 'none' ? 'block' : 'none';
        });

        container.appendChild(recipeCard);
    });
});
