# Calculator
This application calculate elementary expression. Only operations (+ - * /) are available, parenthesis and others are excluded.

# Start app
```bash
$ docker-compose up -d
```
Command build application container and start server on port 3000.

# Use calculator API
After container up, API is available on `http://localhost:3000/swagger`
To calculate specified math expression follow the prompts there.

# Unit tests
```bash
$ npm run test
```
Just run this command in calculator-app container