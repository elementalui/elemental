import glob from 'glob';

glob.sync('**/*-test.js', { realpath: true, cwd: __dirname }).forEach(require);
