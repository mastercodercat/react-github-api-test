# Cratebind Github app

This app is built for displaying public repositories of github users and their detail with github api.

## Installation

Installation steps:

```sh
npm install
or
yarn install
```

## How to run

- First, copy `.env.example` file and rename it to `.env`.

- Second, make sure `REACT_APP_ACCESS_TOKEN` in `.env` is `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`

- Third, run development server using below commands.

  ```sh
  npm start
  or
  yarn start
  ```

## How to test

For e2e tests,

```sh
npm start
npm run e2e
or
yarn start
yarn e2e
```

## Application Dependencies

- TypeScript
- React / React Hook
- Redux(toolkit)
- Cypress
- JavaScript fetch function
- Github api

## Directory Structure

All context providers should be registered on `App.tsx` for consistency, while all routing should be setup on `Routes.tsx`.

- `components`
  include reusable components, layout and ErrorBoundary without any boundings with requests or business logic
- `pages`
  include containers used to connect `components` and business logic implemented by custom hooks.
  - `Home`
  - `Repository`
- `services`
  include services and api workers for application
- `store`
  includes redux states, actions and selectors for application
