var Sails = require('sails'),
    should = require('should'),
    rc = require('rc'),
    sails;

var testConfig = {
  environment: 'test',
  port: 1338,
  log: {
    level: 'error'
  },
  connections: {
    testDB: {
      adapter: 'sails-memory'
    }
  },
  connection: 'testDB',
  migrate: 'drop'
};

before(function (done){

  var config = rc('sails', testConfig);

  Sails.lift(
    config,
    function(err, server){
      sails = server;
      if (err){ return done(err);}

      done(err, sails);
    });
});

after(function (done){
  sails.lower(done);
});
