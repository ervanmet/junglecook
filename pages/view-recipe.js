export function ViewRecipe() {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  let selectedId = localStorage.getItem("selectedRecipe");
  let browseId = localStorage.getItem("selectedBrowseRecipe");

  let recipe = recipes.find((item) => item.id == selectedId);

  const browseRecipes = {
    1: {
      name: "Pancakes",
      image: "images/recipe1.jpg",
      description: "A delicious breakfast to start your day!",
      ingredients: "Flour, milk, eggs, sugar, and butter.",
      instructions:
        "Mix the ingredients together. Pour the batter into a pan and cook until golden brown.",
    },
    2: {
      name: "Pasta",
      image: "images/recipe2.jpg",
      description: "An easy meal for lunch or dinner!",
      ingredients: "Pasta, tomato sauce, garlic, and cheese.",
      instructions:
        "Boil the pasta. Heat the sauce and garlic. Mix together and add cheese.",
    },
    3: {
      name: "Salad",
      image: "images/recipe3.jpg",
      description: "A fresh and healthy meal!",
      ingredients: "Lettuce, tomatoes, cucumbers, and dressing.",
      instructions:
        "Wash and chop the vegetables. Mix together and add dressing.",
    },
    4: {
      name: "Cookies",
      image: "images/recipe4.jpg",
      description: "A sweet treat to enjoy anytime!",
      ingredients: "Flour, sugar, butter, eggs, and chocolate chips.",
      instructions:
        "Mix the ingredients. Shape into cookies and bake until golden.",
    },
  };

  if (!recipe && browseId) {
    recipe = browseRecipes[browseId];
  }

  if (!recipe) {
    return `
            <section class="view-recipe-page">
                <h1>Recipe not found</h1>
                <a href="#browse">Back to Browse Recipes</a>
            </section>
        `;
  }

  return `
        <section class="view-recipe-page">

            <h1>${recipe.name}</h1>

            <div class="view-recipe-content">

                <div class="view-recipe-image">
                    <img src="${recipe.image || "images/recipe1.jpg"}" alt="${recipe.name}">
                </div>

                <div class="recipe-details">

                    <h2>Description</h2>
                    <p>${recipe.description}</p>

                    <h2>Ingredients</h2>
                    <p>${recipe.ingredients}</p>

                    <h2>Instructions</h2>
                    <p>${recipe.instructions}</p>

                    ${
                      localStorage.getItem("selectedRecipe")
                        ? `
                        <button id="edit-recipe-button">Edit Recipe</button>
                        <button id="delete-recipe-button">Delete Recipe</button>
                    `
                        : ""
                    }

                    <a href="#browse">Back to Browse Recipes</a>

                </div>

            </div>

        </section>
    `;
}
