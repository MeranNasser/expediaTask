const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../app.js');

chai.use(chaiHttp);
//Our parent block
describe('Index', () => {
  it('should get all hotel deals GET', function(done) {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
