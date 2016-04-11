"use strict";
module.exports = function (app, cb) {
  return cb();
  app.models.User.findOne({ where: { username: 'davide' } },
    (err, user) => {
      if (err) {
        cb(err);
        return;
      }
      if (!user) {
        console.log('2');
        return app.models.User.create({
          username: 'davide',
          email: 'davide@sytac.io',
          password: 'test'
        }, (errCreate, result) => {
          cb(errCreate, result)
        })
      }
      cb(null, null);
    })


  // app.models.User.findOne({ where: { username: 'davide' } }).then(
  //   (user)=> {
  //     console.log('1');
  //     console.log(user);
  //     if (!user) {
  //       console.log('2');
  //       return user.create({
  //         username: 'davide',
  //         email: 'davide@sytac.io',
  //         password: 'test'
  //       }).then(() => cb())
  //     }
  //     console.log('3');
  //     cb();
  //   }
  // )
};
