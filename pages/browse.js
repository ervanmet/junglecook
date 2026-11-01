export function Browse() {
  return `
        <section class="browse-page">

            <h1>Browse Recipes</h1>

            <div class="recipe-search">
                <input type="text" id="recipe-search-input" placeholder="Search recipes...">
                <button id="recipe-search-button">Search</button>
            </div>

            <div class="recipe-grid" id="browse-recipe-grid">

                <div class="recipe-card">
                    <img src="./images/recipe1.png" alt="Supreme Pizza">
                    <h2>Supreme Pizza</h2>
                    <p>Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!</p>
                    <button class="browse-view-button" data-id="1">View Recipe</button>
                </div>

                <div class="recipe-card">
                    <img src="./images/recipe2.png" alt="Classic Burger">
                    <h2>Classic Burger</h2>
                    <p>Sink your teeth into a delicious restaurant-style hamburger recipe made from lean beef. Skip the prepackaged patties and make your own!</p>
                    <button class="browse-view-button" data-id="2">View Recipe</button>
                </div>

                <div class="recipe-card">
                    <img src="./images/recipe3.png" alt="Chicken Biryani">
                    <h2>Chicken Biryani</h2>
                    <p>Chicken Biryani is a bold and flavorful Indian dish with tender bites of chicken, bell peppers, and fragrant rice.</p>
                    <button class="browse-view-button" data-id="3">View Recipe</button>
                </div>

                <div class="recipe-card">
                    <img src="./images/recipe4.png" alt="Chicken Chow Mein">
                    <h2>Ch. Chow Mein</h2>
                    <p>A great Chow Mein comes down to the sauce! This recipe is packed with vegetables and can be customized with your favorite protein.</p>
                    <button class="browse-view-button" data-id="4">View Recipe</button>
                </div>

            </div>

        </section>
    `;
}
