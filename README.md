![react app banner](https://user-images.githubusercontent.com/7807521/75348990-9eb6e300-5882-11ea-856d-fb11f426b602.png)

<p align="center"><strong>An opinionated boilerplate code for starting a new react web project.</strong></p>

[![CircleCI](https://circleci.com/gh/LoopStudio/react-app-boilerplate/tree/master.svg?style=svg&circle-token=03106a8fdc29c610993e05cfd18e6a20b44eaeb0)](https://circleci.com/gh/LoopStudio/react-app-boilerplate/tree/master)
[![codebeat badge](https://codebeat.co/badges/5890d071-b0fb-4623-ab4a-d6a15556a766)](https://codebeat.co/a/loopstudio/projects/github-com-loopstudio-react-app-boilerplate-master)

<sub> Created and maintained with ❤️ by <a href="[https://loopstudio.dev/](https://loopstudio.dev/)">LoopStudio</a> </sub>

## Table of Contents
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [List of Packages](#list-of-packages)
- [Recommended Extensions](#recommended-extensions)
- [Getting Started](#getting-started)
- [Running the Test Suite](#running-the-test-suite)
- [Contributing](#contributing)
- [Credits](#credits)

## Project Structure

```
.
├── README.md
├── jsconfig.json
├── package.json
├── public/
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── actions/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── index.css
│   ├── index.js
│   ├── reducers/
│   ├── serviceWorker.js
│   ├── store/
│   └── utils/
└── yarn.lock
```

## Component Structure

```
├── MyComponent
│ ├── index.js
│ ├── MyComponent.js
│ ├── MyComponent.module.scss
│ ├── MyComponent.test.js
```

### Optional

If you want to split your component in pieces for readability, maintainability, or any other reason you could put the secondary components in the same folder. This is only for cases where these secondary components are only used inside MyComponent. If later they want to be used in other places they should be extracted to their own folder inside components.

```
├── MyComponent
│ ├── index.js
│ ├── MyComponent.js
│ ├── MyComponent.module.scss
│ ├── MyComponent.test.js
│ ├── SecondaryComponent.js
│ ├── SecondaryComponent.module.scss
```

## Features

1. Based on [create-react-app](https://create-react-app.dev/)
2. Powerful but simple routing system based on protected and public routes.
3. The httpClient provides status code errors handling, and camelCase to snake_case automatic conversion.
4. Async actions and store hydration.
5. [Absolut imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports).
6. Environment-specific routes and settings provided through the built-in [environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables) system provided by CRA.

## Prerequisites

1. Install [Node.js](https://nodejs.org/en/) 10.16.3 or greater.
2. Install [Yarn](https://yarnpkg.com/lang/en/) as package manager.

## List of Packages

### State management

- [redux](https://redux.js.org): the state management solution.
- [react-redux](https://react-redux.js.org): provides an easy way to connect the React components to the store.
- [redux-persist](https://github.com/rt2zz/redux-persist): persists the user session data in the localStorage.
- [redux-promise-middleware](https://docs.psb.design/redux-promise-middleware/): handle async actions and side effects.
- [redux-thunk](https://github.com/reduxjs/redux-thunk): as a power-up for the 'redux-promise-middleware'.
- [redux-devtools-extension](http://extension.remotedev.io/): useful tool for debugging.

### Immutability helper:

- [immer](https://immerjs.github.io/immer): provides an easy way to work with immutable state.

### API Requests:

- [axios](https://github.com/axios/axios): HTTP client.
- [humps](https://github.com/domchristie/humps): converts camelCase to snake_case and vice versa.

### Routing:

- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start): the most popular and powerful routing solution for React.

### Type checking:

- [prop-types](https://github.com/facebook/prop-types): Runtime type checking for React props and similar objects.

### Datetime:

- [dayjs](https://github.com/iamkun/dayjs): A minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API. This tool isn't installed in our project, but we recommend to use it, you can install it running `yarn add dayjs`.

### Testing:

- [jest](https://jestjs.io/): a delightful JavaScript Testing Framework with a focus on simplicity.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro): a very light-weight solution for testing React components.
- [nock](https://github.com/nock/nock): HTTP server mocking and expectations library for Node.js
- [cypress](https://www.cypress.io/): automated integration tests. This tool isn't installed in our project, but we recommend to use it. You can install it running `yarn add cypress --dev`. For more information about the configuration you can read [this guide](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

### Styling:

- [sass](https://sass-lang.com/guide): "CSS with superpowers", superpowers which allow us for a cleaner syntax when extending or importing variables while using CSS modules.
- [css-modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet): CSS-Modules helps us to have a more component-based styling avoiding possible conflicts and pollutants of the style across the app.
- [tailwind](https://tailwindcss.com/docs/utility-first): Improves development speed by simplifying the syntax and giving us a single place to set CSS property-related values.
- [font-awesome](https://fontawesome.com/): A comprehensive icon library. Currently the free version of Font Awesome is added by default to the boilerplate. To upgrade and use the pro version sign in to your Font Awesome account and follow the instructions on this [link](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers#installing-pro).
Imported icons are encouraged to be stored in `assets/icons`, and inkoved as a string in each component.

### Deployment:

- [netlify](https://www.netlify.com/): "The fastest way to build the fastest sites". We recommend Netlify as a hosting solution. The free plan is very generous and meets the basic needs of any standard project. In addition, it is dead simple to set up and use. For more information, you can dig into the [official docs](https://docs.netlify.com/).

### Error Monitoring:

  **NOTE: These tools are not enabled by default. For instructions on how to set them up, please visit their respective vendor website**

- [sentry](https://github.com/getsentry/sentry-javascript#installation-and-usage): Sentry provides self-hosted and cloud-based error monitoring that helps all software teams discover, triage, and prioritize errors in real-time.
- [sentry + logrocket](https://docs.logrocket.com/docs/sentry): Add a LogRocket session recording URL to every Sentry exception report. The integration of both of this tools allows us to access a video recording of the exact moment a user encountered an error including network events and console output.


## Recommended Extensions

### Style / Linting

VSCode:
- [Prettier](https://github.com/prettier/prettier-vscode): An opinionated code formatter.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Integrates [ESLint](http://eslint.org/) into VS Code.

Sublime:
- [Prettier](https://packagecontrol.io/packages/JsPrettier) - JsPrettier is a Sublime Text Plug-in for Prettier, the opinionated code formatter.
- [ESLint](https://packagecontrol.io/packages/ESLint) - ESLint any JavaScript file in Sublime Text.

### Intellisense

VSCode:
- [Visual Studio IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) - AI-assisted development features.
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - Visual Studio Code plugin that autocompletes filenames.
- [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense) - Visual Studio Code plugin that autocompletes npm modules in import statements.

Sublime:
- [SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel) - Full-featured code intelligence and smart autocomplete engine.
- [AutoFileName](https://packagecontrol.io/packages/AutoFileName) - Sublime Text plugin that autocompletes filenames.

### Version Control

VSCode:
- [Git Blame](https://marketplace.visualstudio.com/items?itemName=waderyan.gitblame) - See Git Blame information in the status bar for the currently selected line.

Sublime:
- [Git Blame](https://packagecontrol.io/packages/Git%20blame) - Show Git blame information while viewing a file in Sublime Text.

### Syntax Highlighting

VSCode:
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - A port of [DotENV](https://github.com/zaynali53/DotENV) for vscode.
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - This extension styles css/web colors found in your document.

Sublime:
- [DotENV](https://packagecontrol.io/packages/DotENV) - SublimeText Syntax Highlighting support for Environment (.env) Files
- [Color Highlight](https://packagecontrol.io/packages/Color%20Highlight) - 🎨 Lightweight Color Highlight colorizer for Sublime Text

### Snippets

VSCode:
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) - This extension provides you JavaScript and React/Redux snippets in ES7 with Babel plugin features for vscode.

Sublime:
- [ES7 React/Redux/GraphQL/React-Native snippets](https://packagecontrol.io/packages/Sublime%20ES7%20React%20Redux%20ReactNative%20JS%20snippets) - Sublime ES7 React/Redux/React-Native/JS snippets.

## Getting Started

1. Clone this repository and navigate to the folder.
2. Install all dependencies by running the `yarn install` command in the root directory.
3. Modify the environment variables files in root folder(.env.dev, .env.staging and .env.prod).
4. Start the dev server: `yarn start` command.

## Running the Test Suite

1. Run the `yarn test` command.

## Credits

React App Boilerplate is maintained by [Loopstudio](https://loopstudio.dev).

[<img src='https://loopstudio.dev/wp-content/uploads/2019/05/logoblack.png' width='300'/>](https://loopstudio.dev)
