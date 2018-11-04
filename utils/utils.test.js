const utils = require('./utils');
const expect = require('chai').expect;

it('should add two number', () => {
  let res = utils.add(33, 11);
  expect(res).to.be.equal(44).to.be.a('number');
});

it('should square two number', () => {
  let res = utils.square(2);
  expect(res).to.equal(4).to.be.a('number');
});

it('should expect some value', () => {
  expect([1,2, 4, 5]).to.contain(2);
});

it('Async add simulations', (done) => {
  utils.asyncAdd(2,3,(sum) => {
    expect(sum).to.equal(5).to.be.a('number');
    done();
  });
});

it('Async substractions ', (done) => {
  utils.asyncSub(3,2, (sub) => {
    expect(sub).to.equal(1).to.be.a('number');
    done();
  });
});

it('should return a first name and last name' , () => {
   let userObj = { location: 'Bengluru', age: 28 }
   let user = utils.setName(userObj,'hemant singh');
   expect(user).to.contain({firstName: 'hemant', lastName: 'singh'}, 'should have this properties');
   expect(user.firstName).to.equal('hemant');
   expect(user).to.contain({lastName: 'singh'});
});