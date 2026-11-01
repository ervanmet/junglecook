# Jungle Cook

Jungle Cook is a responsive recipe-sharing website prototype. It is based on the [Jungle Cook Figma design](https://www.figma.com/design/f3CwuvIAGPB5qkG7J6aTNR/Jungle-Cook?node-id=1-2&t=4dxTpS5SblfgWqx3-1) and is organized to support additional pages and dynamic recipe features.

## Features

- Home page with a welcome hero section.
- Login and sign-up forms.
- Responsive navigation with a working hamburger menu on smaller screens.
- Recipe browsing, creation, viewing, editing, and personal recipe pages.
- Client-side prototype data storage using browser `localStorage`.
- Sass stylesheets compiled to CSS.

## Built with

- HTML
- Sass
- JavaScript modules

## Run locally

1. Install [Node.js](https://nodejs.org/).
2. Install the project dependencies:

   ```sh
   npm install
   ```

3. Start a local static web server from the project root. For example, use the **Live Server** extension in Visual Studio Code and open `index.html`. The site uses JavaScript modules, so serve it over HTTP rather than opening the file directly.
4. To compile Sass while developing, run this in a separate terminal:

   ```sh
   npm run compile:sass
   ```

   This watches `scss/styles.scss` and updates `css/styles.css`.

## Project structure

```text
app/       Application router, navigation, footer, and authentication helpers
pages/     Page templates for home, login, and recipe views
scss/      Sass source stylesheets
css/       Compiled stylesheets
images/    Local image assets
index.html Application entry point
```

## Prototype data and future development

Accounts and recipes are currently stored in the browser's `localStorage`. This is useful for demonstrating the page flows, but it is not secure authentication or shared persistence: data is specific to the browser, and credentials must not be stored this way in a production application. A production version should use a backend API and database, with server-side authentication and authorization.

## Deployment

Deploy the project root to a static web host that serves `index.html` and preserves the `app/`, `pages/`, `css/`, and `images/` paths. The current prototype does not require a build step beyond compiling Sass. Add the deployed site URL and GitHub repository URL here after publishing.

Web4: https://in-info-web4.luddy.indianapolis.iu.edu/~ervanmet/junglecook/
Github:
