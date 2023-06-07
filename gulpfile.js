const argv = require('yargs').argv
const config = require('./frasco.config.js')
const { src, dest, watch, series, parallel } = require('gulp')
const autoprefixer = require('autoprefixer')
const babel = require('gulp-babel')
const browserSync = require('browser-sync')
const cp = require('child_process')
const eslint = require('gulp-eslint')
const imagemin = require('gulp-imagemin')
const named = require('vinyl-named')
const newer = require('gulp-newer')
const plumber = require('gulp-plumber')
const postcss = require('gulp-postcss')
const pngquant = require('imagemin-pngquant')
const sass = require('gulp-sass')(require('sass'))
const t2 = require('through2')
const log = require('fancy-log')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')

const server = browserSync.create()

/*----------  SASS  ----------*/

function sassTask() {
  return src(config.assets + '/' + config.sass.src + '/**/*.scss')
    .pipe(
      sass({ outputStyle: config.sass.outputStyle }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer(config.sass.autoprefixer)]))
    .pipe(
      t2.obj((chunk, enc, cb) => {
        // Execute through2
        let date = new Date()
        chunk.stat.atime = date
        chunk.stat.mtime = date
        cb(null, chunk)
      })
    )
    .pipe(dest(config.assets + '/' + config.sass.dest))
    .pipe(server.stream({ match: '**/*.css' }))
    .on('end', () => log('SASS updated'))
}

exports.sass = sassTask

/*----------  JavaScript  ----------*/

const jsFiles = []
for (var i = 0; i <= config.js.entry.length - 1; i++) {
  jsFiles.push(config.assets + '/' + config.js.src + '/' + config.js.entry[i])
}

if (config.tasks.eslint) config.webpack.module.rules.push(config.eslintLoader)

config.webpack.watch = argv.watch
config.webpack.mode = argv.mode || config.webpack.mode

function webpackTask() {
  return src(jsFiles)
    .pipe(plumber())
    .pipe(named())
    .pipe(babel())
    .pipe(webpackStream(config.webpack, webpack))
    .pipe(dest(config.assets + '/' + config.js.dest))
}

/*----------  esLint  ----------*/
const runEslint = function() {
  return src([
    config.assets + '/' + config.js.src + '/**/*.js',
    '!node_modules/**'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
}
exports.eslint = runEslint

/*----------  Images  ----------*/

function imagesTask() {
  return src(config.assets + '/' + config.imagemin.src + '/**/*')
    .pipe(plumber())
    .pipe(newer(config.assets + '/' + config.imagemin.dest))
    .pipe(
      imagemin({
        progressive: config.imagemin.progressive,
        svgoPlugins: config.imagemin.svgoPlugins,
        use: [pngquant()]
      })
    )
    .pipe(dest(config.assets + '/' + config.imagemin.dest))
}

exports.imagemin = imagesTask

/*----------  Browsersync  ----------*/

let browser =
  config.browsersync.browsers[0] != null
    ? config.browsersync.browsers
    : 'default'

function reload(done) {
  server.reload()
  done()
}

function serve(done) {
  server.init({
    port: config.port,
    browser: browser,
    server: {
      baseDir: config.jekyll.dest
    }
  })
  done()
}

/*----------  Watch  ----------*/

const filesToWatch = [
  '!./node_modules/**/*',
  '!./README.md',
  '!' + config.jekyll.dest + '/**/*',
  '_config*.yml',
  '*.html',
  './**/*.md',
  './**/*.markdown',
  '*.json',
  config.jekyll.includes + '/**/*',
  config.jekyll.layouts + '/**/*',
  config.jekyll.posts + '/**/*',
  config.assets + '/' + config.sass.dest + '/**/*',
  config.assets + '/' + config.js.dest + '/**/*',
  config.assets + '/' + config.imagemin.dest + '/**/*'
]

function watchTask() {
  watch(config.assets + '/' + config.sass.src + '/**/*', sassTask)

  watch(config.assets + '/' + config.js.src + '/**/*', series(webpackTask))

  watch(config.assets + '/' + config.imagemin.src + '/**/*', series(imagesTask))

  watch(filesToWatch, series(jekyllBuild, reload))
}

/*----------  Jekyll  ----------*/

function jekyllBuild(done) {
  let jekyllConfig = config.jekyll.config.default
  if (argv.jekyllEnv == 'production') {
    process.env.JEKYLL_ENV = 'production'
    jekyllConfig += config.jekyll.config.production
      ? ',' + config.jekyll.config.production
      : ''
  } else {
    jekyllConfig += config.jekyll.config.development
      ? ',' + config.jekyll.config.development
      : ''
  }

  let buildArgs = ['exec', 'jekyll', 'build', '--config', jekyllConfig]

  if (argv.preview) {
    buildArgs.push('--drafts')
    buildArgs.push('--unpublished')
    buildArgs.push('--future')
  }

  if (argv.forestry) {
    buildArgs.push('--destination')
    buildArgs.push('_forestry_site')
  }

  return cp
    .spawn('bundle', buildArgs, { stdio: 'inherit', env: process.env })
    .on('close', done)
}

exports.default = series(
  parallel(sassTask, webpackTask, imagesTask),
  jekyllBuild,
  serve,
  watchTask
)

exports.build = series(parallel(sassTask, webpackTask, imagesTask), jekyllBuild)
