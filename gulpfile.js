// var gulp = require("gulp"),
//     swPrecache = require("sw-precache");

// gulp.task("generate-sw", function() {
//     var swOptions = {
//         staticFileGlobs: [
//             './*.html',
//             './images/**/*.*',
//             './scripts/*.*',
//             './styles/*.*'
//         ],
//         stripPrefix: '.',
//         runtimeCaching: [{
//             urlPattern: /^https:\/\/publicdata-weather\.firebaseio\.com/,
//             handler: 'networkFirst',
//             options: {
//                 cache: {
//                     name: 'weatherData-v2'
//                 }
//             }
//         }]
//     };

//     return swPrecache.write("sw.js", swOptions)
// })