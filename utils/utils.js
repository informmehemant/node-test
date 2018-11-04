add = ( a, b) => a + b ;
square = ( x ) => x * x;
setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
asyncAdd = (a, b, callback ) => {
    //  This is an add implementations
    setTimeout(() => {
        callback(a + b);
    },1000);
 
};
asyncSub = (a, b, callback ) => {
 //  This is substraction implementations
 setTimeout(() => {
    callback( a - b );
 }, 1500);   
};

module.exports = {
    add,
    square,
    setName,
    asyncAdd,
    asyncSub,
    getIndexPage: function(req, res ) {
        res.send('hey')
    }
};