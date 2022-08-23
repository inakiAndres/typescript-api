# TypeScript API

This is a repository intended to serve as a starting point if you want to bootstrap a express API project in TypeScript.

## Endpoints

- First endpoint
  ○ Request: /countries?filter=and&order=asc
  ○ Response: All the countries that have ‘and’ in the country or code. And in ascending order by vat
- Second endpoint
  ○ Request: /reverse/hello
  ○ Response: OllEh
- Third endpoint
  ○ Request: /append?start=hello&end=bye
  ○ Response: [hello, SIMPLE_ARRAY, bye]


## Running the app

```
# install dependencies
npm install

# run in dev mode on port 3000
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 3000
npm run start
```
# Download the postman collection and play with it :)

## Testing

### Jest with supertest

```
npm run test
```

## Linting

```
# run linter
npm run lint

# fix lint issues
npm run lint:fix
```
