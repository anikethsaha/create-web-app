/* tslint:disable */
import server from "../src/server";
import  chai from "chai";
import chaiHttp  from "chai-http";

let should : Chai.Should = chai.should();
chai.use(chaiHttp);




describe('/GET /', () => {
    it('it should Return 200', (done) => {
      chai.request(server)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
            done();
          });
    });
});




