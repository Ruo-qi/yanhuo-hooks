const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const del = require('del');

// 清除原有文件
gulp.task('clear', async () => {
  await del(['es/**']);
  await del(['lib/**']);
  await del(['dist/**']);
  await del(['README.md']);
});

// 生成ESM包
gulp.task('es', function () {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 生成CJS包
gulp.task('cjs', () => {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

// 生成DTS文件
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// copy声明文件
gulp.task('copyREADME', async () => {
  gulp.src('../../README.md').pipe(gulp.dest('./'));
});

exports.default = gulp.series('clear', 'es', 'cjs', 'declaration', 'copyREADME');
