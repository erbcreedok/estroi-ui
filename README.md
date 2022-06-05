# E-Stroi.kz React Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements
- `NodeJS` >= v14
- `npm` >= 6
- `yarn` - optional, you can just replace all `yarn` command to `npm`

### Available Scripts
- `yarn install` | `npm install` - installs required modules into `node_modules` folder
- `yarn start` | `npm run start` - runs the app in the development mode, default address: `localhost:3000`
- `yarn test` | `npm run test` - launches the test runner in the interactive watch mode.
- `yarn run build` | `npm run build` - Builds the app for production to the `build` folder.

## Run development 
`yarn install`  
`yarn start`
Application will start at `http://localhost:3000`

## Build product 
`yarn install`  
`yarn build`
Production build will be in `build` folder


## Dockerize production build
Run `docker-compose -f docker-compose.yml build` to build image named `estroi-ui-prod`

Then run `docker run -p {EXTERNAL_PORT}:80 --name {CONTAINER_NAME} estroi-ui-prod`

ex:  
`docker-compose -f docker-compose.yml build`  
`docker run -p 80:80 --name estroi-ui estroi-ui-prod`
