/**
 * Created by elizabeth.venner on 15/05/2018.
 */

var teaSet = require('./main/teapot');
var coffee = require('./main/coffee');

const myTeapot = new teaSet.Teapot(20, 20, 'curly', 'non-drip');
const cuppaJoe = new coffee.Coffee('filtered', 'Nescafe');

console.log(myTeapot.isTeaReady(cuppaJoe));

// const height = new Height(20);
// const girth = new Girth(20);
// const handle = new Handle('curly');
// const spout = new Spout('non-drip');
// console.log(myTeapot.isTeaReady(coffee));



