/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

let mix = require('laravel-mix')

mix.disableSuccessNotifications()
  .js('resources/src/main.js', 'public/js')
  .sass('resources/src/assets/scss/argon.scss', 'public/css')