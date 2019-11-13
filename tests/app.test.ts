import app from "../src/app";
import 'mocha';
import chai from 'chai';
import chaiHttp = require('chai-http');

//use chai-http
chai.use(chaiHttp);
const expect = chai.expect;
const assert = chai.assert;

describe('Basic test of the app.ts file', () => {
    it('should return hello world', () => {
        return chai.request(app).get('/')
            .then(res => {
                expect(res.text).to.eql('Hello world');
            })
    })
})