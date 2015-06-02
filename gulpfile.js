var postcss = require('gulp-postcss'),
  gulp = require('gulp'),
  inspector = function(css){
    css.eachDecl(function(decl){
      console.log(decl.parent.selector);
    });
  },
  commenter = function(css){
    css.eachDecl(function(decl){
      if(decl.parent.selector.match('.screwIt')){
        decl.parent.before = decl.parent.before + '/* This was written by a very uncivilized css coder */\n';
      }
    });
  };



gulp.task('css', function(){
  return gulp.src('css/**/*.css')
    .pipe(postcss([inspector, commenter]))
    .pipe(gulp.dest('build/'))
});

gulp.task('default', ['css']);
