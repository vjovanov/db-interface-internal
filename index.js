function enabled() {
  var isPolyglot = typeof Polyglot == 'object' &&
    typeof Polyglot.import == 'function';
  if (!isPolyglot) {
    return false;
  }
  var mle = Polyglot.import('mle');
  return mle != undefined  && mle.__mle_magic_number == 2668046;
}

var mle = enabled() ? Polyglot.import('mle') : undefined;
function env() {
  if (!enabled()) {
    return undefined;
  }
  return {
    connector: function(options) {
      if (options != undefined && options.synchronous == true) {
        return mle.syncConnector;
      }
      return undefined;
    }
  }
}

module.exports.enabled = enabled;

module.exports.env = env;
