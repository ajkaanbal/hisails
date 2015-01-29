describe('Message Model', function() {
  describe('#create', function() {
    it('should create new message', function(done) {
      Message.create({
        text: 'Hola',
        author: 1
      }).exec( function(err, message) {
        console.log(err);
        if (err) {return done(err);}
        console.log(message);
        done();
      });
    });
  });
});
