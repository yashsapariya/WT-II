const path= require('path')
console.log(path.join('wt','index.js'));
console.log(path.dirname('/wt/abc/index.js'));
console.log(path.basename('/wt/abc/index.js'));
console.log(path.extname('/wt/abc/index.js'));
console.log(path.normalize('/wt/abc/index.js/..'));
