module.exports = function enableAuthentication(server) {
  console.log('boot/authentication called');
  // enable authentication
  server.enableAuth();
};
