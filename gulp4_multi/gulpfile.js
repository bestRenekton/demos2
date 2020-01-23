const gulp = require('gulp');



// 根据环境引入不同的配置文件
let buildConfig;
if (process.env.NODE_ENV === 'dev') {
    buildConfig = require('./build/gulp.dev');
} else {
    buildConfig = require('./build/gulp.prod');
}


//-------------------------sources-------------------------
gulp.task('html', buildConfig.html);      // 打包html
gulp.task('js', buildConfig.js);          // 打包js
gulp.task('css', buildConfig.css);        // 打包css
gulp.task('images', buildConfig.image);   // 打包image
gulp.task('sources', gulp.series('html', gulp.parallel('js', 'css', 'images')));


//-------------------------clean-------------------------
gulp.task('clean', buildConfig.clean);    // 清理目录   



//-------------------------server-------------------------
gulp.task('server', buildConfig.server);  // 本地服务


//-------------------------watch-------------------------
gulp.task('watch', async () => {
    gulp.watch('src/views/*', gulp.series('html')); // 监听HTML变化
    gulp.watch('src/js/**', gulp.series('js')); // 监听js变化
    gulp.watch('src/css/*', gulp.series('css')); // 监听css变化
    gulp.watch('src/images/*', gulp.series('images')); // 监听image变化
});

//-------------------------dev & build-------------------------
if (process.env.NODE_ENV === 'dev') {
    gulp.task('dev', gulp.series('sources', 'server', 'watch'));
} else {
    gulp.task('build', gulp.series('sources'));
}

