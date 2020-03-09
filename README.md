![react app banner](https://user-images.githubusercontent.com/7807521/75348990-9eb6e300-5882-11ea-856d-fb11f426b602.png)

<p align="center"><strong>An opinionated boilerplate code for starting a new react web project.</strong></p>

<sub> Created and maintained with ❤️ by <a href="[https://loopstudio.dev/](https://loopstudio.dev/)">LoopStudio</a> </sub>

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [List of Packages](#list-of-packages)
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
│   ├── index.js
│   ├── MyComponent.js
│   ├── MyComponent.module.scss
│   ├── MyComponent.test.js
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
- [cypress](https://www.cypress.io/): automated integration tests. This tool isn't installed in our project, but we recommend to use it. You can install it running `yarn add cypress --dev`. For more information about the configuration you can read [this guide](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements)

### Styling:

- [sass](https://sass-lang.com/guide): "CSS with superpowers", superpowers which allow us for a cleaner syntax when extending or importing variables while using CSS modules.
- [css-modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet): CSS-Modules helps us to have a more component-based styling avoiding possible conflicts and pollutants of the style across the app.
- [tailwind](https://tailwindcss.com/docs/utility-first): Improves development speed by simplifying the syntax and giving us a single place to set CSS property-related values.

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
