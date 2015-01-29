describe('User Model', function () {
  describe('#create', function(){
    it('shoud create a new user', function(done){
      User.create({
        username:'juanito'
      }).exec(function (err, user){
        if (err) {return done(err); }
        done();
      });
    });
    it('must have username', function(done) {
      User.create().exec( function(err, user) {
        (user === undefined).should.be.true;
        done();
      });
    })
  });
});
