// Simple EventEmitter demo (CommonJS)
const EventEmitter = require('events');

const login = new EventEmitter();

login.on('login successful', (username) => {
  console.log('login successful for user', username);
});

login.on('login successful', (username) => {
  console.log('also handled login for', username);
});

login.on('login successful', (username) => {
  console.log('welcome,', username);
});

// emit events with example usernames
login.emit('login successful', 'alice');
login.emit('login successful', 'bob');
login.emit('login successful', 'carol');
