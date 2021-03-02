module.exports = function(grunt){




   //load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass'); // load in the sass plugin. after that we need to config  this plugin.

// ------------ Runs Grunt functions --------------\\

grunt.registerTask('work', function(){
    console.log('doing homework');   

});

grunt.registerTask('fun', function(){
    console.log('watching tv');   

});

grunt.registerTask('all', ['work', 'fun']);



// ----------- configuration -- working with plugins --- \\

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


concat: {
    js: {
        src: ['gruntExample/js/*.js'], // add all the files in js folder
        dest: 'gruntExample/build/scripts.js', //destination folder. will be created when run the task
        // run grunt concat will create a build folder for all js folder.
    },
    css: {
    src: ['gruntExample/style/*.scss'],
    dest: 'gruntExample/build/styles.css'
    }
},

//another config. for sass
sass: {
    //keep our new files
    build: {
        files: [{
            src:'gruntExample/style/*.css',
            dest: 'css/style.css',
        }]

    }
},

uglify:{
    build: {
        files: [{
             src: 'gruntExample/build/scripts.js',
             dest: 'gruntExample/build/scripts.js'
        }]
    },
  
}

});





//Register tasks that need to be run - ask for one task to do.
grunt.registerTask('concat-js', ['concat: js']); // will only concat the js files.
grunt.registerTask('concat-css', ['concat: css']); // will only concat the css files.
//grunt.registerTask('concat-css', ['concat:css']); // will only concat the css files.

}
