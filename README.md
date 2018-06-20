# Piggybank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Notes
#### Init Project with SSR
- create project with Angular CLI:
`ng new [NAME] --routing --prefix [PREFIX]`

- Enhance the project to be a PWA:
`ng add @angular/pwa`

- Enable SSR:
`ng g universal --client-project piggybank`

- Build them both:
`ng build --prod && ng run piggybank:server`

- Enter the build project and serve it using http-server
`npm i -g http-server`
`cd dist/piggybank`
`http-server`

#### Add Firebase
- Install firebase tools and CLI
`npm i -g firebase-tools`

- Login with Firebase credentials
`firebase login`

- firebase console (from online dashboard)
Enable firestore under the database section

- Init Firebase with answers
`firebase init`

- Select the project
`firebase use --add`

- Deploy to Firebase
`firebase deploy`

#### Add SSR functions
- Update the code with the following guide:
https://gist.github.com/cironunes/d96dd3c40012157996326aaa7a055abd

================= Add oAuth functions from Firebase ======================
Coming soon

================= Add CRUD functions from Firebase ======================
Coming soon

================= Add Firebase notifications ======================
Coming soon