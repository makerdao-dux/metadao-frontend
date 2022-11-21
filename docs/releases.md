# Releases

## How to build the application?

## How the CI/CD system works?

The CI/CD system, Github Actions, uses the action [Electron Builder](https://github.com/marketplace/actions/electron-builder-action) that allows to generate a downloadable executable of the application.
The application is signed using a private key that is configured as a secret environment variable of Github.
