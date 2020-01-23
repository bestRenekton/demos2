const gulp = require('gulp');
const Uglify = require('gulp-uglify');          // 压缩js
const Babel = require('gulp-babel');
const Minifycss = require('gulp-minify-css');   // 压缩css
const cleanCSS = require('gulp-clean-css');

const Less = require('gulp-less');              // 编译less
const Autoprefixer = require('gulp-autoprefixer');  // 浏览器前缀
const FileInclude = require('gulp-file-include'); // 文件模块化
const Imagemin = require('gulp-imagemin');
const Pngquant = require('imagemin-pngquant');  //png图片压缩插件
const Cache = require('gulp-cache');
const Clean = require('gulp-clean');            // 清理目录
const { dist } = require('./config');





// html
async function html() {
    return gulp.src('src/views/*.html')
        .pipe(FileInclude({ // HTML模板替换，具体用法见下文
            prefix: '##',
            basepath: '@file'
        }))
        .on('error', function (err) {
            console.error('Task:copy-html,', err.message);
            this.end();
        })
        .pipe(gulp.dest(dist)) // 拷贝 
}

// css
async function css() {
    return await gulp.src('src/css/**')
        .pipe(Less())       //编译less
        .pipe(Autoprefixer({
            cascade: true, //是否美化属性值
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(cleanCSS())//压缩css
        .pipe(gulp.dest(dist + '/css'))
        .pipe(gulp.dest(dist + '/css')) //当前对应css文件
}

// js
async function js() {
    return await gulp.src('src/js/**')
        .pipe(Babel(
            {
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            "targets": {
                                "browsers": ["last 2 versions", "ie >= 7"]
                            }
                        }
                    ]
                ]
            }
        ))
        .pipe(Uglify()) // 压缩js
        .pipe(gulp.dest(dist + '/js'))
}

// image
async function image() {
    return await gulp.src('src/images/*')
        .pipe(Cache(Imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            svgoPlugins: [{ removeViewBox: false }],//不要移除svg的viewbox属性
            use: [Pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest(dist + '/images'));
}


// clean dir
async function clean() {
    // 不设置allowEmpty: true会报File not found with singular glob
    return await gulp.src(dist, { allowEmpty: true }).pipe(Clean());
}



module.exports = {
    html,
    css,
    js,
    image,
    clean
}