const middle = function isLoggedIn(req, res, next) {
    if(req.originalUrl === '/users' )
    {
        console.log('LOGGED Middleware'+ req.originalUrl)
        next();
    }else{
        res.send('Request from wrong url ');
    }
    
  };

module.exports = middle