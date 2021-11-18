const chai = require('chai');
const request = require('supertest');
let User = require('../models/user.model');
const app = require('../server.js');
const expect = chai.expect;
describe('User routes', () => {
  var id = '';
  const data = {
    email: 'test@gmail.com',
    title: 'tutor',
    userName: 'test',
    subject: 'maths',
    tutor: 'tutor',
    coachingName: 'coaching',
    qualification: 'phd',
    about: 'about',
    c1: 9,
    c2: 10,
    c3: 11,
    c4: 12,
    address: 'address',
    city: 'city',
    pin: 500007,
    phone: 9876543210,
    isAdmin: true,
  };
  before(async () => {
    const user = await User.create({
      ...data,
      class1: 9,
      coaching: 'coaching',
      username: 'test',
    });
    id = user._id;
  });
  after(async () => {
    await User.deleteMany({});
  });

  it('should add a user', async () => {
    const response = await request(app)
      .post('/users/add')
      .set('content-type', 'application/json')
      .send(JSON.stringify(data));
    expect(response.status).to.equal(200);
    expect(response.body).to.equal('profile added');
  });

  

  

  
  

  
});
