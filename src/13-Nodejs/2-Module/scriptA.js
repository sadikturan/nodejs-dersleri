// // browser

// // IIFE

// var controllerA = (function () {
//     // scope A
//     // private
//     var age = 20;
//     var firstName = 'Sadık';

//     var log = function(){
//         console.log(this.firstName);
//     }

//     // public
//     return {
//         firstName,
//         log
//     }


// })();


// nodejs

// private members
var age = 30;

// public members
var firstName = 'Sadık';
var log = function (name) {
    console.log(name);
}

// module.exports.name = firstName;
// module.exports.log = log;

// module.exports = {
//     name: firstName,
//     log: log
// }

module.exports = {
    firstName,
    log
}



