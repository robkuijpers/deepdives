# MyWorkspace

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.2.

## Install Angular CLI locally and create a new empty workspace.

  See: https://v17.angular.io/guide/file-structure#multiple-projects

  > npx -p @angular/cli ng new my-workspace --no-create-application

## Create an application in the workspace.

  > cd my-workspace
  > npx ng generate application deep-dive-app-1 (css, n)

## Create a library in the workspace.

  See: https://v17.angular.io/guide/creating-libraries

  > ng generate library deep-dive-lib-1

## Run deep-dive-app-1.

  > cd ./projects/deep-dive-app-1 
  > npx ng serve --open

## Test and build deep-dive-lib-1

  > cd ./projects/deep-dive-lib-1
  > npx ng test deep-dive-lib-1
  > npx ng lint deep-dive-lib-1
  > npx ng build deep-dive-lib-1

  Please see https://github.com/angular-eslint/angular-eslint for how to add ESLint configuration to your project.

## Using lib in app.

  > import { DeepDiveLib1Component } from 'deep-dive-lib-1';
  > import { DeepDiveLib1Service } from 'deep-dive-lib-1';

## Switched to yarn

  > yarn install

  Remove package-lock.json

## Install json-server

  > yarn add -D json-server
  created 'start-db' to start json-server

## Install Playwright for  ./projects/deep-dive-app-1
  > yarn create playwright

  Run playwright

  > yarn playwright test

  Added script to run Playwright e2e tests 

  > yarn e2e-deep-dive-app-1

## Install Cypress

  > yarn add -D cypress
  > npx cypress open -> follow componenet test setup
  > yarn add -D @angular/cli @angular-devkit/build-angular
 
  Added script to open Cypress

  > yarn cy-open


## Uninstall playwright and Cypress 

  First migrate to an NX workspace the install Playwright and Cypress again using NX.


## Migrate to NX

  https://nx.dev/recipes/angular/migration/angular
  

## =================================================


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
