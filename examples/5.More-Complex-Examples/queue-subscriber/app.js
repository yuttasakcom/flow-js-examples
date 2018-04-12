// @flow

const subscriber = require('./queue-subscriber')

const consumer = (message) =>
  ({success: true})

subscriber.subscribe(consumer)
