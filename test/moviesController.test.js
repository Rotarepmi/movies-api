const expect = require('chai').expect;
const axios = require('axios');

const movie = {
    title: "Star Wars"
}

describe('/movies endpoint', () => {
    it('should create new movie on post and add data from omdb', async () => {
        const res = await axios.post('http://localhost:8080/movies/', movie);

        expect(res.status).to.equal(201);
        expect(res.data.message).to.equal('Movie successfully created.');
    });

    it('should get all movies on get /', async () => {
        const res = await axios.get('http://localhost:8080/movies/');

        expect(res.status).to.equal(200);
        expect(res.data);
    });
});