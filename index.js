
/**
 * Measure with the given `.size`.
 *
 * @param {Object} options
 * @return {Function}
 * @api public
 */

exports.measure = function(options){
  var start = new Date;

  return function(){
    var delta = new Date - start;
    var seconds = delta / 1000;
    var bytes = options.size;
    var bits = bytes * 8;
    var bps = bits / seconds;
    var kbps = bps / 1024;
    var mbps = kbps / 1024;

    return {
      duration: delta,
      size: bytes,
      bps: bps,
      kbps: kbps,
      mbps: mbps
    }
  }
};
