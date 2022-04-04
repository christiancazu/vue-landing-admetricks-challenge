# admetricks-frontend-challenge

## production apps

[vue landing app](https://vue-landing-admetricks.christiancazu.dev)

[angular container app](https://angular-container-admetricks.christiancazu.dev/#!/)

The vue web component is injected in the angular container app from the url: https://vue-landing-admetricks.christiancazu.dev/chart-component.js

## Settings for run the app in local environment
### requirements

- docker

step 1: build docker container
```
docker build . -t vue-landing
```
There will create the vue chart component as a js native web component and it will put in the /dist folder after build the app to be exposed in /chart-component.js


step 2: run container
```
docker run -p 3000:3000 --name vue-landing vue-landing
```
There will expose the container app in http://localhost:3000

The native web component is exposed in http://localhost:3000/chart-component.js

## Settings for run tests
### requirements
- node

```
yarn
```

```
yarn test:unit
```
