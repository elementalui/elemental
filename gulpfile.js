var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Elemental',
		lib: 'lib',
		dependencies: [
			'blacklist',
			'classnames',
			'react',
			'react/addons'
		],
		less: {
			path: 'less',
			entry: 'elemental.less'
		}
	},

	example: {
		src: 'site/src',
		dist: 'site/dist',
		files: [
			'.gitignore',
			'404.html',
			'404.html',
			'CNAME',
			'images/*',
			'index.html',
			'prism.css',
			'prism.js'
		],
		scripts: [
			'site.js'
		],
		less: [
			'site.less'
		]
	}

};

initGulpTasks(gulp, taskConfig);
