
# network

  Measure network latency.

## Installation

    $ component install component/network

## API

### network.measure(options)

  Start a measurement with the given byte `.size` specified. A function
  is returned which should be called _after_ the data transfer is complete. This
  function returns the measurements:

```js
{
  duration: 5749,
  size: 994868,
  bps: 1408912.01,
  kbps: 1375.89,
  mbps: 1.34
}
```

## Example

  The following example measures image s3 download latency, and may be used
  to detect a poor connection and respond with smaller images.

```js
var network = require('network');
var latency = network.measure({ size: 994868 });

var url = 'http://i.cloudup.com/iSVZF2meyeA.jpg?' + Date.now();
var img = new Image;

img.onload = function(){
  var res = latency();
  console.log('%s mbps', res.mbps.toFixed(2));
};

img.src = url;
```

## License

  MIT
