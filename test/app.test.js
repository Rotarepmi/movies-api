let expect = require('chai').expect;
let axios = require('axios');

it('API should respond for movies req', async () => {
  const res = await axios.get('http://localhost:8080/movies/');

  expect(res.status).to.equal(200);
});

it('API should respond for comments req', async () => {
  const res = await axios.get('http://localhost:8080/comments/');

  expect(res.status).to.equal(200);
});
