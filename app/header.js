import { logoutUser } from "./auth.js";

const header = document.querySelector("#header");

export function loadHeader(user) {
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
    logoutLink.addEventListener("click", async function (event) {
      event.preventDefault();

      try {
        await logoutUser();
        window.location.hash = "home";
      } catch (error) {
        alert(error.message);
      }
    });
  }
}
