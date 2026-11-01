export function EditRecipe() {
  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
  let selectedId = localStorage.getItem("selectedRecipe");

  let recipe = recipes.find((item) => item.id == selectedId);

  if (!recipe) {
    return `
            <section class="create-page">
                <h1>Recipe not found</h1>
                <a href="#your-recipes">Back to Your Recipes</a>
            </section>
        `;
  }

  return `
        <section class="create-page">

            <h1>Edit Your Recipe</h1>

            <form class="create-form" id="edit-recipe-form">

                <label>Recipe Name</label>
                <input type="text" id="edit-name" value="${recipe.name}" required>

                <label>Recipe Image</label>
                <input type="text" id="edit-image" value="${recipe.image}">

                <label>Recipe Description</label>
                <textarea id="edit-description" required>${recipe.description}</textarea>

                <label>Ingredients</label>
                <textarea id="edit-ingredients" required>${recipe.ingredients}</textarea>

                <label>Instructions</label>
                <textarea id="edit-instructions" required>${recipe.instructions}</textarea>

                <button type="submit">Save Changes</button>

            </form>

        </section>
    `;
}
