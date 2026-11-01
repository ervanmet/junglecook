export function YourRecipes() {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  return `
        <section class="your-recipes-page">

            <h1>Your Recipes</h1>

            <div class="recipe-grid">

                ${
                  recipes.length === 0
                    ? `
                    <p>You haven't added any recipes yet!</p>
                `
                    : recipes
                        .map(
                          (recipe) => `
                    <div class="recipe-card">
                        <img src="${recipe.image || "images/recipe1.jpg"}" alt="${recipe.name}">
                        <h2>${recipe.name}</h2>
                        <p>${recipe.description}</p>
                        <button class="view-recipe-button" data-id="${recipe.id}">
                            View Recipe
                        </button>
                    </div>
                `,
                        )
                        .join("")
                }

            </div>

        </section>
    `;
}
