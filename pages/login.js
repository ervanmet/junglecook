export function Login() {
  return `
        <section class="login-page">

            <div class="login-container">

                <h1>Login</h1>

                <form id="login-form">

                    <label>Email Address</label>
                    <input
                        type="email"
                        id="login-email"
                        placeholder="Enter your email"
                        required
                    >

                    <label>Password</label>
                    <input
                        type="password"
                        id="login-password"
                        placeholder="Enter your password"
                        required
                    >

                    <button type="submit">Login</button>

                </form>

            </div>

            <div class="login-container">

                <h1>Sign Up!</h1>

                <form id="signup-form">

                    <label>Name</label>
                    <input
                        type="text"
                        id="signup-name"
                        placeholder="Enter your name"
                        required
                    >

                    <label>Email Address</label>
                    <input
                        type="email"
                        id="signup-email"
                        placeholder="Enter your email"
                        required
                    >

                    <label>Password</label>
                    <input
                        type="password"
                        id="signup-password"
                        placeholder="Create a password"
                        required
                    >

                    <button type="submit">Sign Up</button>

                </form>

            </div>

        </section>
    `;
}
