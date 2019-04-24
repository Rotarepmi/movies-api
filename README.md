movies-api
=======

This API offers CRUD operations on 2 endpoints: /movies && /comments. It uses omdb to fullfil the movie information.

* ES6 support via [babel](https://babeljs.io)
* Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
* DB connection via [mongoose](https://mongoosejs.com/)
* Tests with [Chai](https://www.chaijs.com/)

## Getting Started

To run the project clone and install the repository. You will have to set up and connect your working MongoDB instance and get api key for http://www.omdbapi.com/. Store your db password and omdbapi key in .env file.

## Running the tests

Start the development project with
```
npm run dev
```

Then run tests with
```
npm run test
```

## Deployed app

This application runs on Heroku server. The endpoints:

* Movies: [https://man-movies-api.herokuapp.com/movies](https://man-movies-api.herokuapp.com/movies)
* Comments: [https://man-movies-api.herokuapp.com/comments](https://man-movies-api.herokuapp.com/comments)

## Authors

* **Jakub Mandra** 

## License

This project is licensed under the MIT License.