function timeout(ms) {
  return function (done) {
    setTimeout(done, ms);
  };
}
module.exports = function *() {
  yield timeout(1000);
  this.set('Content-Type', 'text/javascript');
  this.body = ('define(function(){});');
};
