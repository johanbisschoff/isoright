'use strict';
var generators = require('yeoman-generator');


module.exports = generators.NamedBase.extend({
  paths: function() {
    this.destinationRoot();
    // returns '~/projects'

    this.destinationPath('index.js');
    // returns '~/projects/index.js'

    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  },
  writing: {
    components: function(name) {
      this.fs.copyTpl(
        this.templatePath('index.ts'),
        this.destinationPath('app/' + name + '/' + name + '.ts'), {
          title: name
        }
      );
      this.fs.copyTpl(
        this.templatePath('index.scss'),
        this.destinationPath('app/' + name + '/' + name + '.scss'), {
          title: name
        }
      );
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('app/' + name + '/' + name + '.html'), {
          title: name
        }
      );
    }
  }

});
