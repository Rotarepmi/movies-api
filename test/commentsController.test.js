const expect = require('chai').expect;
const axios = require('axios');

const comment = {
    comment: "Great",
    author: {
        username: "test"
    },
    movie: {
        name: "Star Wars",
        _id: "5cc0825bc22b6c330fbe39e6"
    }
}

describe('/comments endpoint', () => {
    it('should create comment on post', async () => {
        const res = await axios.post('http://localhost:8080/comments/', comment);

        expect(res.status).to.equal(201);
        expect(res.data.message).to.equal('Comment successfully created.');
    });

    it('should get all comments on get /', async () => {
        const res = await axios.get('http://localhost:8080/comments/');

        expect(res.status).to.equal(200);
        expect(res.data);
    });
});