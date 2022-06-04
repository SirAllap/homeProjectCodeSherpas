//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Customer = require('../api/models/customer.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

// Our parent block
describe('CRM-CodeSherpas', () => {
    beforeEach((done) => { //Before each test we empty the database
        Customer.remove({}, (err) => { 
        done();           
        });        
    });

/*
    * Test the /POST route
  */
    describe('/POST new customer', () => {
        it('New customer should be created', (done) => {
            let customer = {
                name: "David",
                surname: "Doing some test",
                email: "davidTheTester@gmail.com",
                birthDate: "09/30/1990"
            }
            chai.request('http://localhost:3000')
            .post('/api/customers')
            .send(customer)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });

/*
    * Test the /GET route
  */
    describe('/GET single customer', () => {
        it('Should return a single customer by id', (done) => {
            let customer = new Customer({
                name: "David",
                surname: "Doing some test",
                email: "davidTheTester1@gmail.com",
                birthDate: "09/30/1990"
            });
            customer.save((err, customer) => {
                chai.request('http://localhost:3000')
                .get('/api/customers/' + customer.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        });
    });

    describe('/GET all customers', () => {
        it('Should return all customers', (done) => {
            chai.request('http://localhost:3000')
            .get('/api/customers')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    /*
  * Test the /PUT/:id route
  */
    describe('/PUT single customer', () => {
        it('Should return an updated customer by id', (done) => {
            let customer = new Customer({
                name: "David",
                surname: "Doing some test",
                email: "davidTheTester2@gmail.com",
                birthDate: "09/30/1990"
            });
            customer.save((err, customer) => {
                chai.request('http://localhost:3000')
                    .put('/api/customers/' + customer.id)
                    .send({
                        name: "Ramon",
                        surname: "Testing",
                        email: "ramonTesting@gmail.com",
                        birthDate: "02/20/1991"
                    })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Updated_customer').eql({
                        name: "Ramon",
                        surname: "Testing",
                        email: "ramonTesting@gmail.com",
                        birthDate: "1991-02-20T00:00:00.000Z",
                        __v: 0,
                        _id: customer.id
                    });
                    done();
                });
            });
        });
    });    

    /*
  * Test the /DELETE/:id route
  */
    describe('/DELETE single customer', () => {
        it('Should delete a customer by id', (done) => {
            let customer = new Customer({
                name: "David",
                surname: "Doing some test",
                email: "davidTheTester3@gmail.com",
                birthDate: "09/30/1990"
            });
            customer.save((err, customer) => {
                chai.request('http://localhost:3000')
                .delete('/api/customers/' + customer.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('Response').eql(`This customer, ${customer.name} ${customer.surname}, has been deleted`);
                    done();
                });
            });
        });
    });
});