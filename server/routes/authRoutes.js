const passport = require('passport');

module.exports = (app) => {
    // Route handler for authenticating a user with Google
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    // After user grants permission
    app.get('/auth/google/callback', passport.authenticate('google'));
};