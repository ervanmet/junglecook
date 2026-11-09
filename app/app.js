import { loadHeader } from "./header.js";
import { loadFooter } from "./footer.js";

import { Home } from "../pages/home.js";
import { Login } from "../pages/login.js";
import { Signup } from "../pages/signup.js";
import { Browse } from "../pages/browse.js";
import { CreateRecipe } from "../pages/create-recipe.js";
import { YourRecipes } from "../pages/your-recipes.js";
import { ViewRecipe } from "../pages/view-recipe.js";
import { EditRecipe } from "../pages/edit-recipe.js";

import { createAccount, loginUser, getCurrentUser } from "./auth.js";

const app = document.querySelector("#app");

let currentUser = null;
let authReady = false;

function loadPage() {
  if (!authReady) return;

  loadHeader(currentUser);
  loadFooter();

  const page = window.location.hash.substring(1);

  if (page === "browse") {
    app.innerHTML = Browse();
  } else if (page === "create-recipe") {
    app.innerHTML = CreateRecipe();
  } else if (page === "view-recipe") {
    app.innerHTML = ViewRecipe();
  } else if (page === "edit-recipe") {
    app.innerHTML = EditRecipe();
  } else if (page === "login") {
    app.innerHTML = Login();
  } else if (page === "signup") {
    app.innerHTML = Signup();
  } else if (page === "your-recipes") {
    if (currentUser) {
      app.innerHTML = YourRecipes();
    } else {
      window.location.hash = "login";
      return;
    }
  } else {
    app.innerHTML = Home();
  }

  setupForms();
}

function setupForms() {
  // LOGIN
  const loginForm = document.querySelector("#login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.querySelector("#login-email").value;
      const password = document.querySelector("#login-password").value;

      try {
        await loginUser(email, password);
        window.location.hash = "your-recipes";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // SIGN UP
  const signupForm = document.querySelector("#signup-form");

  if (signupForm) {
    signupForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.querySelector("#signup-email").value;
      const password = document.querySelector("#signup-password").value;

      try {
        await createAccount(email, password);
        window.location.hash = "your-recipes";
      } catch (error) {
        alert(error.message);
      }
    });
  }

  // CREATE RECIPE
  const createRecipeForm = document.querySelector("#create-recipe-form");

  if (createRecipeForm) {
    createRecipeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const recipe = {
        id: Date.now(),
        name: document.querySelector("#recipe-name").value,
        image: document.querySelector("#recipe-image").value,
        description: document.querySelector("#recipe-description").value,
        ingredients: document.querySelector("#recipe-ingredients").value,
        instructions: document.querySelector("#recipe-instructions").value,
      };

      let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

      recipes.push(recipe);

      localStorage.setItem("recipes", JSON.stringify(recipes));

      alert("Recipe saved!");

      window.location.hash = "your-recipes";
    });
  }

  // VIEW YOUR RECIPES
  const viewButtons = document.querySelectorAll(".view-recipe-button");

  viewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const recipeId = this.getAttribute("data-id");

      localStorage.removeItem("selectedBrowseRecipe");
      localStorage.setItem("selectedRecipe", recipeId);

      window.location.hash = "view-recipe";
    });
  });

  // EDIT RECIPE
  const editRecipeForm = document.querySelector("#edit-recipe-form");

  if (editRecipeForm) {
    editRecipeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
      let selectedId = localStorage.getItem("selectedRecipe");

      let recipe = recipes.find((item) => item.id == selectedId);

      if (recipe) {
        recipe.name = document.querySelector("#edit-name").value;
        recipe.image = document.querySelector("#edit-image").value;
        recipe.description = document.querySelector("#edit-description").value;
        recipe.ingredients = document.querySelector("#edit-ingredients").value;
        recipe.instructions =
          document.querySelector("#edit-instructions").value;

        localStorage.setItem("recipes", JSON.stringify(recipes));

        alert("Recipe updated!");

        window.location.hash = "your-recipes";
      }
    });
  }

  // EDIT RECIPE BUTTON
  const editButton = document.querySelector("#edit-recipe-button");

  if (editButton) {
    editButton.addEventListener("click", function () {
      window.location.hash = "edit-recipe";
    });
  }

  // DELETE RECIPE BUTTON
  const deleteButton = document.querySelector("#delete-recipe-button");

  if (deleteButton) {
    deleteButton.addEventListener("click", function () {
      const confirmDelete = confirm(
        "Are you sure you want to delete this recipe?",
      );

      if (confirmDelete) {
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        let selectedId = localStorage.getItem("selectedRecipe");

        recipes = recipes.filter((recipe) => recipe.id != selectedId);

        localStorage.setItem("recipes", JSON.stringify(recipes));
        localStorage.removeItem("selectedRecipe");

        alert("Recipe deleted!");

        window.location.hash = "your-recipes";
      }
    });
  }

  // BROWSE RECIPE SEARCH
  const searchButton = document.querySelector("#recipe-search-button");
  const searchInput = document.querySelector("#recipe-search-input");

  const recipeCards = document.querySelectorAll(
    "#browse-recipe-grid .recipe-card",
  );

  if (searchButton) {
    searchButton.addEventListener("click", function () {
      const searchValue = searchInput.value.toLowerCase();

      recipeCards.forEach((card) => {
        const recipeName = card.querySelector("h2").textContent.toLowerCase();

        if (recipeName.includes(searchValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // BROWSE RECIPE BUTTONS
  const browseButtons = document.querySelectorAll(".browse-view-button");

  browseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const recipeId = this.getAttribute("data-id");

      localStorage.removeItem("selectedRecipe");
      localStorage.setItem("selectedBrowseRecipe", recipeId);

      window.location.hash = "view-recipe";
    });
  });
}

// CHECK FIREBASE LOGIN STATUS
getCurrentUser(function (user) {
  currentUser = user;
  authReady = true;
  loadPage();
});

window.addEventListener("hashchange", loadPage);
