const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
// .js('resources/js/app.js', 'public/js')
.vue()
.js('resources/js/admin/admin-dashboard/admin-dashboard.js', 'public/js').version()
.js('resources/js/admin/admin-settings/admin-settings.js', 'public/js').version()
.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
]);
