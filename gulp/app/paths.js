module.exports = {
  dist: 'dist/',
  js: ['App/main.js', 'App/**/*.js'],
  theme: ['App/theme/app.scss'],
  views: ['App/**/*.pug', '!App/index.pug'],
  viewIndex: 'App/index.pug',
  imgs: 'App/theme/imgs/**/*',
  svgs: 'App/theme/svgs/**/*',
  fonts: 'App/theme/fonts/**/*.woff2',

  cssLibs: [
    'bower_components/animate.css/animate.min.css',
    'bower_components/angular-material/angular-material.min.css',
    'bower_components/angular-material-data-table/dist/md-data-table.min.css',
    //pickers
    'bower_components/mdPickers/dist/mdPickers.min.css',
    //markdown
    'bower_components/simplemde/dist/simplemde.min.css'
  ],

  jsLibs: [
    'bower_components/jQuery/dist/jquery.min.js',
    'bower_components/lodash/dist/lodash.min.js',
    //angular
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/angular-i18n/angular-locale_pt-br.js',
    'bower_components/angular-jwt/dist/angular-jwt.min.js',
    'bower_components/angular-material/angular-material.min.js',
    'bower_components/angular-material-data-table/dist/md-data-table.min.js',
    'bower_components/angular-messages/angular-messages.min.js',
    'bower_components/angular-jwt/dist/angular-jwt.min.js',
    'bower_components/angular-sanitize/angular-sanitize.min.js',
    //mask
    'bower_components/angular-input-masks/angular-input-masks-dependencies.min.js',
    'bower_components/angular-input-masks/angular-input-masks.min.js',
    //Maps
    'bower_components/angular-simple-logger/dist/angular-simple-logger.min.js',
    'bower_components/angular-google-maps/dist/angular-google-maps.min.js',
    //markdown
    'bower_components/marked/marked.min.js',
    'bower_components/simplemde/dist/simplemde.min.js',
    //pickers
    'bower_components/moment/min/moment.min.js',
    'bower_components/moment/locale/pt-br.js',
    'bower_components/mdPickers/dist/mdPickers.min.js',
    //validator
    'bower_components/md-form-validator/dist/md-form-validator.min.js',
    'bower_components/angular-validator-async/dist/angular-validator-async.min.js'
  ]
};
