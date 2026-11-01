export function Signup() {
  return `
        <section class="login-page">
            <div class="login-container">

                <h1>Create Account</h1>

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

                <p>
                    Already have an account? 
                    <a href="#login">Login</a>
                </p>

            </div>
        </section>
    `;
}
