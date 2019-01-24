/**
 * Created by elizabeth.venner on 11/05/2018.
 */

function Tea () {
    this.isReady = false;
}

Tea.prototype.makeTea = function() {
    this.isReady = true;
    return this.isReady;
}

Tea.prototype.checkTeaIsBrewed = function() {
    return this.isReady;
}
var Teapot = function(height, girth, handle, spout) {
    this.height = height;
    this.girth = girth;
    this.handle = handle;
    this.spout = spout;
}

Teapot.prototype.isTeaReady = function(tea) {
    // if (tea instanceof Tea) {
        if (tea.checkTeaIsBrewed()) {
            return "TIP ME OVER AND POUR ME OUT!!";
        }
    // } else {
    //     throw('You can only put tea in a teapot!!!');
    // }
}


var Coffee = function(water, granules) {
    this.water = water;
    this.granules = granules;
}

module.exports = {
    Teapot: Teapot,
    Tea: Tea,
    Coffee: Coffee
}



// export class Height {
//
//     private MAX_SHORTNESS = 20;
//     private dimension;
//
//     constructor(dimension) {
//         this.dimension = dimension;
//     }
//
//     checkIfShort() {
//         if (this.dimension > this.MAX_SHORTNESS) return false;
//         return true
//     }
// }
//
// export class Girth {
//
//     private MAX_STOUTNESS = 20;
//     private dimension;
//
//     constructor(dimension){
//         this.dimension = dimension;
//     }
//
//     checkIfStout() {
//         if (this.dimension > this.MAX_STOUTNESS) return false;
//         return true;
//     }
//
// }
//
// export class Handle {
//
//     private variety;
//
//     constructor(variety) {
//         this.variety = variety;
//     }
//
// }
//
// export class Spout {
//
//     private variety;
//
//     constructor(variety) {
//         this.variety = variety;
//     }
// }
//
//