// var profile = require('./lib/profile');
// profile('tj', function(err, profile){
//   console.log(profile);
// })

// var repos = require('./lib/repos');
// repos('iteles', function(err, list){
//   console.log(list);
// })

// var feed = require('./lib/feed');
// feed('nelsonic', function(err, list){
//   console.log(err);
//   console.log(list, list.entries.length)
//
// })

// var repo = require('./lib/repo');
// repo('nelsonic/adoro', function(err, stats){
//   console.log(stats);
// })

// var issues = require('./lib/issues');
// issues('dwyl/tudo', function(err, list){
//   console.log(list);
// })

// var issues = require('./lib/issues');
// issues('dwyl/ignored', function(err, list){
//   console.log(list);
// })

// var issues_search = require('./lib/issues_search');
// var options = { username : 'iteles' };
// issues_search(options, function(err, list){
//   console.log(list);
// })

var labels = require('./lib/labels');
labels('dwyl/tudo', function(err, list){
  console.log(list);
})
