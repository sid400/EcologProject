const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    // JS landings roots
    .js('resources/js/Ekolog.js', 'public/js')
    //END JS landings roots
    .sass('resources/sass/app.scss', 'public/css')
    // SASS landings roots
    .sass('resources/sass/EK.scss', 'public/css')
    // END SASS landings roots
    .options({
        processCssUrls: false
    });
