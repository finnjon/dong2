# TODO

Try to configure the quill editor once for all instances.

Get focusing to work with the editor.

Write a (better) piece on how the authentication works.

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

###Authentication

I am using Auth0 for authentication. Basically you simply sign up for an account and then npm install and have a link to log in or sign up. This takes you away to their own login page which allows you to log in or sign up. When it returns you successfully it gives you some jwt's for accessing the api you have also set up. The jwt's are set up to send the token with all requests and can be decripted on the server using the secret you get from the auth0 site. Massive pain in the arse with poor documentation.

###Focus

Adding focus was a challenge. It turned out the lifecycle hook AfterViewChecked was run everytime I would want to check on focus, so I simply used this to set the focus using vanilla js. The issue was that sometimes there was a a mismatch between the hook running and the new element being created. It was stuck on the old one, could not find the element and threw an error. As a result I needed to check each time that it could find the element before performing the action.

The other issue was with questions where there were several fields and we needed to prevent focus always returning to the first one. To do this we needed to check for where focus was, before then only refocussing if it wasn't somewhere it ought to be. The problem was that it was slow to get focus, so I needed to add a setTimout to give it time to work.

All feels a bit hacky.

###Alerts

For this I used an npm package called angular2-flash-messages. This is added to the app.module and added as a service to each page you want. The messages are added to app.component.html but triggered from any component to which they are added.

I have it a default bootstrap class of alert-success but then overrode the bootstrap classes in styles.css after putting it in a div to center it using bootstrap. Not super elegant but seems to work okay.

###Quill Editor

For this I used ngx-quill, which can be seen in the package.json. To customise the toolbar you need to use the settings as can be seen in the code.
