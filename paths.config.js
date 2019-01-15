module.exports = {
    src: {
        root: 'src',
        js: 'src/js/**/*.{m,}js',
        css: 'src/css/**/*.scss',
        img: 'src/img/**/*',
        copy: 'src/{*,}.*',
        entry: {
            js: 'src/js/{main,head}.{m,}js',
            css: 'src/css/main.scss'
        }
    },
    dist: {
        root: 'dist',
        js: 'dist/js',
        css: 'dist/css',
        img: 'dist/img'
    }
};