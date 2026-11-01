import { getCurrentUser, logoutUser } from "./auth.js";

const header = document.querySelector("#header");

export function loadHeader() {
  const user = getCurrentUser();

  header.innerHTML = `
        <nav class="main-nav">

            <a href="#home" class="logo">Jungle Cook</a>

            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#browse">Browse</a>
                <a href="#create-recipe">Create Recipe</a>

                ${
                  user
                    ? `
                    <a href="#your-recipes">Your Recipes</a>
                    <a href="#logout" id="logout-link">Logout</a>
                `
                    : `
                    <a href="#login">Login</a>
                `
                }
            </div>

            <button class="menu-button">☰</button>

        </nav>
    `;

  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
  });

  const logoutLink = document.querySelector("#logout-link");

  if (logoutLink) {
    logoutLink.addEventListener("click", function (event) {
      event.preventDefault();

      logoutUser();
      window.location.hash = "home";
      loadHeader();
    });
  }
}
