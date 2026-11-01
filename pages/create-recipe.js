export function CreateRecipe() {
  return `
        <section class="create-page">

            <h1>Hey! Share your recipe!</h1>

            <form class="create-form" id="create-recipe-form">

                <label>Recipe Name</label>
                <input type="text" id="recipe-name" placeholder="Recipe Name" required>

                <label>Recipe Image</label>
                <input type="text" id="recipe-image" placeholder="Add image URL">

                <label>Recipe Description</label>
                <textarea id="recipe-description" placeholder="Describe your recipe" required></textarea>

                <label>Ingredients</label>
                <textarea id="recipe-ingredients" placeholder="Add ingredients" required></textarea>

                <label>Instructions</label>
                <textarea id="recipe-instructions" placeholder="Add cooking instructions" required></textarea>

                <button type="submit">Submit Recipe</button>

            </form>

        </section>
    `;
}
