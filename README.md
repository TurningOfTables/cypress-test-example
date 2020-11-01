# cypress-test-example
A fully working, bare bones example project for [Cypress.io](https://cypress.io) tests with an included sample site and a few basic tests that run against it.

The tests can be found at ```./cypress/integration```

The sample site ```./sample_site```

## Installation
```npm i```

## Run Tests (CLI)
```npm run test```

## Run Tests (GUI)
```npm run test-ui```

## Sample Site
The included sample site in ```./sample_site``` is a simple, static HTML page with a CSS and JS file. The only external dependency is jQuery which is loaded from the code.jquery.com CDN as described on the [jQuery site](https://code.jquery.com/)

Note that the included site has a simulated login functionality, but it doesn't actually do anything - the password is hardcoded and not intended to be real authentication.
