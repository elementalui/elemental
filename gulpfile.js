var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

var taskConfig = {

	component: {
		name: 'Elemental',
		lib: 'lib',
		dependencies: [
			'blacklist',
			'classnames',
			'moment',
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
			'CNAME',
			'index.html',
			'404.html',
			'images/*'
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
