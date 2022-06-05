# E-Stroi.kz React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts
- `yarn start` - runs the app in the development mode, default address: `localhost:3000`
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn run build` - Builds the app for production to the `build` folder.

## Dockerize production build
Run `docker-compose -f docker-compose.yml build` to build image named `estroi-ui-prod`

Then run `docker run -p {EXTERNAL_PORT}:80 --name {CONTAINER_NAME} estroi-ui-prod`

ex:  
`docker-compose -f docker-compose.yml build`  
`docker run -p 80:80 --name estroi-ui estroi-ui-prod`
