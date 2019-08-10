const passport = require('passport')
const LocalStrategy = require('passport-local')

const localOptions = {passReqToCallback:true}
const localLogin = new LocalStrategy(localOptions, function(req, username, password, done){
    req.getConnection((err, connection) =>{
        if(err) return next(err)
        connection.query("select * from user where username=?", [username], (err, row) => {
            if(err) return done(err)
            if(!row.length) return done(null, false)
            if(row[0].password !== password){
                return done(null, false)
            }else{
                return done(null, row[0])
            }
        })
    })
})

passport.use(localLogin)