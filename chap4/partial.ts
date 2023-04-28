import _ from "lodash"

// String.prototype.first = _.partial(String.prototype.substring, 0, _)

const Scheduler = (function () {
  const delayedFn = _.bind(setTimeout, undefined, _, _)
  return {
    delay5: _.partial(delayedFn, _, 5000),
    delay10: _.partial(delayedFn, _, 10000),
    delay: _.partial(delayedFn, _, _),
  }
})()

Scheduler.delay5(function () {
  console.log('after 5 secs')
})