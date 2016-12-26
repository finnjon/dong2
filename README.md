# Dong2 Deeply Open Angular 2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

##Notes

1) Improve the way focussing is done. At the moment it feels crude.

We need the focus back to the form in three circumstances:
1) When the component loads - achieved with AfterViewChecked
2) When a droplet is updated - achieved by subscribing to pushedDroplet and setting the focus
3) Tricky one - when the route param changes but doesn't trigger a new component. For this we also use AfterViewChecked. We add a delay using the timeout so that we can check that the focus is not on one of the necessary fields because this lifecycle method is run all the time.
