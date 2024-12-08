const redis = require('redis');
const client = redis.createClient();

// Set a value in the cache
client.set('key', 'value', 'EX', 3600, (error, reply) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Value added to cache');
  }
});

// Get a value from the cache
client.get('key', (error, reply) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Value from cache:', reply);
  }
});
