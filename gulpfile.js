const projectFolder = "dist";
const sourceFolder = "src";

const path = {
    
    build: {
        html: projectFolder + "/",
        css: projectFolder + "/css/",
        js: projectFolder + "/js/",
        assets: projectFolder + "/assets/"
    },

    src: {
        html: sourceFolder + "/*.html",
        css: sourceFolder + "/scss/style.scss",
        js: sourceFolder + "/js/script.js",
        assets: sourceFolder + "/assets/*.{jpg, png, svg, webp}"
    },

    watch: {
        html: sourceFolder + "/**/*.html",
        css: sourceFolder + "/scss/**/*.scss",
        js: sourceFolder + "/js/**/*.js",
        assets: sourceFolder + "/assets/*.{jpg, png, svg, webp}"
    },

    clean: "./" + projectFolder + "/"
}


const gulp = require('gulp');
const {src, dest} = require('gulp');
const fileInclude = require('gulp-file-include');
const browserSync = require('browser-sync').create();
const scss = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const webphtml = require("gulp-webp-html");



function watchChanges() {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.assets], assets);
}

function sync() {
    browserSync.init({
        server: {
            baseDir: "./" + projectFolder + '/'
        },
        port: 5500,
    })
}

function html() {
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(scss(
            {
                outputStyle: "expanded"
            }
        ))

        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}

function assets() {
    return src(path.src.assets)
        .pipe(
            webp({
                quality: 70
            })
        )

        .pipe(dest(path.build.assets))
        .pipe(src(path.src.assets))

        .pipe(
            imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                interlaced: true,
                optimizationLevel: 3
            })
        )
        .pipe(dest(path.build.assets))
        .pipe(browserSync.stream())
}

const build = gulp.series(gulp.parallel(js, assets, css, html));
const watch = gulp.parallel(build, watchChanges, sync);


exports.html = html;
exports.assets = assets;
exports.css = css;
exports.js = js;
exports.build = build;
exports.watch = watch;
exports.default = watch;
