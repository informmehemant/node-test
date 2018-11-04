// visits 
// https://scotch.io/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs

const expect = require('chai').expect;
const app = require('../app');
const sinon = require('sinon');
const user = {
    addUser: (name) =>{
        this.name = name;
    },
    isLoggedIn : function() {}
}
// Stub isLogged function add make it return true always
const isLoggedInStub = sinon.stub(user,'isLoggedIn').returns(true);

describe("Testing node sinon app", function() {
  it('should return IndexPage', function() {
    let req = {
        user: user
    };
    let res = {
        send: sinon.spy() 
    }
    app.getIndexPage(req, res);
    // console.log(res.send);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.firstCall.args[0]).to.equal("Hey");
  });
  it('should return user', function() {
    sinon.spy(user, 'addUser');
    user.addUser('Hemant Singh');
    // lets log the use to the screen
    expect(user.addUser.calledOnce).to.be.true;
    // assert
    expect(isLoggedInStub.calledOnce).to.be.true;
  });
});