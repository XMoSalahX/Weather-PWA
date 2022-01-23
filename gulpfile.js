var gulp = require("gulp"),
    swPrecache = require("sw-precache");

gulp.task("generate-sw", function() {
    var swOptions = {
        staticFileGlobs: [
            '../Weather-PWA/*.html',
            './Weather-PWA/images/**/*.*',
            './Weather-PWA/scripts/*.*',
            './Weather-PWA/styles/*.*'
        ],
        stripPrefix: '.',
        runtimeCaching: [{
            urlPattern: /^https:\/\/publicdata-weather\.firebaseio\.com/,
            handler: 'networkFirst',
            options: {
                cache: {
                    name: 'weatherData-v3'
                }
            }
        }]
    };

    return swPrecache.write("sw.js", swOptions)
})