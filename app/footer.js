const footer = document.querySelector("#footer");

export function loadFooter() {
  footer.innerHTML = `
        <div class="footer-content">

            <p>© 2026 The Jungle Cook</p>

            <div class="footer-links">
                <a href="#home">Home</a>
                <a href="#browse">Browse Recipes</a>
                <a href="#create-recipe">Create Recipe</a>
            </div>

            <div class="social-links">
                <a href="https://www.instagram.com/" target="_blank">Instagram</a>
                <a href="https://www.facebook.com/" target="_blank">Facebook</a>
                <a href="https://www.pinterest.com/" target="_blank">Pinterest</a>
            </div>

        </div>
    `;
}
