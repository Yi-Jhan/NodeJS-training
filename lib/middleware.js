const result = {
    checkDomain: (req, res, next) => {
        const reqPort = req.headers.host;
        if (reqPort !== "localhost:3000") {
            res.send('Domain Error')
        }
        next()
    },
    checkAdmin: (req, res, next) => {
        // const name = req.params.path;

        var usernameCookie = req.cookies.username;
        var usernameSession = req.session.username;
        console.log('usernameCookie', usernameCookie);
        console.log('usernameSession', usernameSession)

        if (usernameCookie !== 'Chris' && usernameSession !== 'Chris') {
            res.send(usernameCookie + ', You are not Admin!!!')
        } else {
            
        }
        next()
    },
    checkUser: (req, res, next) => {
        const name = req.body.username;

        res.cookie('username', name);
        req.session.username = name;
        console.log('Cookie', req.cookies.username);
        console.log('Session', req.session.username);

        if (name !== 'Chris') {
            // res.send('You are not User!!!')

        }
        next()
    }
}
module.exports = result;