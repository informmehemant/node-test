module.exports = {
    getIndexPage: function(req, res) {
        if(req.user.isLoggedIn()){
            return res.send('Hey') 
        }
        res.send('Opps you need access to this page ');
    }
}