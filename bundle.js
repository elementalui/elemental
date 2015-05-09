require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var list = [{ label: 'Alert', value: 'alert', className: 'octicon octicon-alert' }, { label: 'Alignment Align', value: 'alignment-align', className: 'octicon octicon-alignment-align' }, { label: 'Alignment Aligned To', value: 'alignment-aligned-to', className: 'octicon octicon-alignment-aligned-to' }, { label: 'Alignment Unalign', value: 'alignment-unalign', className: 'octicon octicon-alignment-unalign' }, { label: 'Arrow Down', value: 'arrow-down', className: 'octicon octicon-arrow-down' }, { label: 'Arrow Left', value: 'arrow-left', className: 'octicon octicon-arrow-left' }, { label: 'Arrow Right', value: 'arrow-right', className: 'octicon octicon-arrow-right' }, { label: 'Arrow Small Down', value: 'arrow-small-down', className: 'octicon octicon-arrow-small-down' }, { label: 'Arrow Small Left', value: 'arrow-small-left', className: 'octicon octicon-arrow-small-left' }, { label: 'Arrow Small Right', value: 'arrow-small-right', className: 'octicon octicon-arrow-small-right' }, { label: 'Arrow Small Up', value: 'arrow-small-up', className: 'octicon octicon-arrow-small-up' }, { label: 'Arrow Up', value: 'arrow-up', className: 'octicon octicon-arrow-up' }, { label: 'Beer', value: 'beer', className: 'octicon octicon-beer' }, { label: 'Book', value: 'book', className: 'octicon octicon-book' }, { label: 'Bookmark', value: 'bookmark', className: 'octicon octicon-bookmark' }, { label: 'Briefcase', value: 'briefcase', className: 'octicon octicon-briefcase' }, { label: 'Broadcast', value: 'broadcast', className: 'octicon octicon-broadcast' }, { label: 'Browser', value: 'browser', className: 'octicon octicon-browser' }, { label: 'Bug', value: 'bug', className: 'octicon octicon-bug' }, { label: 'Calendar', value: 'calendar', className: 'octicon octicon-calendar' }, { label: 'Check', value: 'check', className: 'octicon octicon-check' }, { label: 'Checklist', value: 'checklist', className: 'octicon octicon-checklist' }, { label: 'Chevron Down', value: 'chevron-down', className: 'octicon octicon-chevron-down' }, { label: 'Chevron Left', value: 'chevron-left', className: 'octicon octicon-chevron-left' }, { label: 'Chevron Right', value: 'chevron-right', className: 'octicon octicon-chevron-right' }, { label: 'Chevron Up', value: 'chevron-up', className: 'octicon octicon-chevron-up' }, { label: 'Circle Slash', value: 'circle-slash', className: 'octicon octicon-circle-slash' }, { label: 'Circuit Board', value: 'circuit-board', className: 'octicon octicon-circuit-board' }, { label: 'Clippy', value: 'clippy', className: 'octicon octicon-clippy' }, { label: 'Clock', value: 'clock', className: 'octicon octicon-clock' }, { label: 'Cloud Download', value: 'cloud-download', className: 'octicon octicon-cloud-download' }, { label: 'Cloud Upload', value: 'cloud-upload', className: 'octicon octicon-cloud-upload' }, { label: 'Code', value: 'code', className: 'octicon octicon-code' }, { label: 'Color Mode', value: 'color-mode', className: 'octicon octicon-color-mode' }, { label: 'Comment', value: 'comment', className: 'octicon octicon-comment' }, { label: 'Comment Discussion', value: 'comment-discussion', className: 'octicon octicon-comment-discussion' }, { label: 'Credit Card', value: 'credit-card', className: 'octicon octicon-credit-card' }, { label: 'Dash', value: 'dash', className: 'octicon octicon-dash' }, { label: 'Dashboard', value: 'dashboard', className: 'octicon octicon-dashboard' }, { label: 'Database', value: 'database', className: 'octicon octicon-database' }, { label: 'Device Camera', value: 'device-camera', className: 'octicon octicon-device-camera' }, { label: 'Device Camera Video', value: 'device-camera-video', className: 'octicon octicon-device-camera-video' }, { label: 'Device Desktop', value: 'device-desktop', className: 'octicon octicon-device-desktop' }, { label: 'Device Mobile', value: 'device-mobile', className: 'octicon octicon-device-mobile' }, { label: 'Diff', value: 'diff', className: 'octicon octicon-diff' }, { label: 'Diff Added', value: 'diff-added', className: 'octicon octicon-diff-added' }, { label: 'Diff Ignored', value: 'diff-ignored', className: 'octicon octicon-diff-ignored' }, { label: 'Diff Modified', value: 'diff-modified', className: 'octicon octicon-diff-modified' }, { label: 'Diff Removed', value: 'diff-removed', className: 'octicon octicon-diff-removed' }, { label: 'Diff Renamed', value: 'diff-renamed', className: 'octicon octicon-diff-renamed' }, { label: 'Ellipsis', value: 'ellipsis', className: 'octicon octicon-ellipsis' }, { label: 'Eye', value: 'eye', className: 'octicon octicon-eye' }, { label: 'File Binary', value: 'file-binary', className: 'octicon octicon-file-binary' }, { label: 'File Code', value: 'file-code', className: 'octicon octicon-file-code' }, { label: 'File Directory', value: 'file-directory', className: 'octicon octicon-file-directory' }, { label: 'File Media', value: 'file-media', className: 'octicon octicon-file-media' }, { label: 'File Pdf', value: 'file-pdf', className: 'octicon octicon-file-pdf' }, { label: 'File Submodule', value: 'file-submodule', className: 'octicon octicon-file-submodule' }, { label: 'File Symlink Directory', value: 'file-symlink-directory', className: 'octicon octicon-file-symlink-directory' }, { label: 'File Symlink File', value: 'file-symlink-file', className: 'octicon octicon-file-symlink-file' }, { label: 'File Text', value: 'file-text', className: 'octicon octicon-file-text' }, { label: 'File Zip', value: 'file-zip', className: 'octicon octicon-file-zip' }, { label: 'Flame', value: 'flame', className: 'octicon octicon-flame' }, { label: 'Fold', value: 'fold', className: 'octicon octicon-fold' }, { label: 'Gear', value: 'gear', className: 'octicon octicon-gear' }, { label: 'Gift', value: 'gift', className: 'octicon octicon-gift' }, { label: 'Gist', value: 'gist', className: 'octicon octicon-gist' }, { label: 'Gist Secret', value: 'gist-secret', className: 'octicon octicon-gist-secret' }, { label: 'Git Branch', value: 'git-branch', className: 'octicon octicon-git-branch' }, { label: 'Git Commit', value: 'git-commit', className: 'octicon octicon-git-commit' }, { label: 'Git Compare', value: 'git-compare', className: 'octicon octicon-git-compare' }, { label: 'Git Merge', value: 'git-merge', className: 'octicon octicon-git-merge' }, { label: 'Git Pull Request', value: 'git-pull-request', className: 'octicon octicon-git-pull-request' }, { label: 'Globe', value: 'globe', className: 'octicon octicon-globe' }, { label: 'Graph', value: 'graph', className: 'octicon octicon-graph' }, { label: 'Heart', value: 'heart', className: 'octicon octicon-heart' }, { label: 'History', value: 'history', className: 'octicon octicon-history' }, { label: 'Home', value: 'home', className: 'octicon octicon-home' }, { label: 'Horizontal Rule', value: 'horizontal-rule', className: 'octicon octicon-horizontal-rule' }, { label: 'Hourglass', value: 'hourglass', className: 'octicon octicon-hourglass' }, { label: 'Hubot', value: 'hubot', className: 'octicon octicon-hubot' }, { label: 'Inbox', value: 'inbox', className: 'octicon octicon-inbox' }, { label: 'Info', value: 'info', className: 'octicon octicon-info' }, { label: 'Issue Closed', value: 'issue-closed', className: 'octicon octicon-issue-closed' }, { label: 'Issue Opened', value: 'issue-opened', className: 'octicon octicon-issue-opened' }, { label: 'Issue Reopened', value: 'issue-reopened', className: 'octicon octicon-issue-reopened' }, { label: 'Jersey', value: 'jersey', className: 'octicon octicon-jersey' }, { label: 'Jump Down', value: 'jump-down', className: 'octicon octicon-jump-down' }, { label: 'Jump Left', value: 'jump-left', className: 'octicon octicon-jump-left' }, { label: 'Jump Right', value: 'jump-right', className: 'octicon octicon-jump-right' }, { label: 'Jump Up', value: 'jump-up', className: 'octicon octicon-jump-up' }, { label: 'Key', value: 'key', className: 'octicon octicon-key' }, { label: 'Keyboard', value: 'keyboard', className: 'octicon octicon-keyboard' }, { label: 'Law', value: 'law', className: 'octicon octicon-law' }, { label: 'Light Bulb', value: 'light-bulb', className: 'octicon octicon-light-bulb' }, { label: 'Link', value: 'link', className: 'octicon octicon-link' }, { label: 'Link External', value: 'link-external', className: 'octicon octicon-link-external' }, { label: 'List Ordered', value: 'list-ordered', className: 'octicon octicon-list-ordered' }, { label: 'List Unordered', value: 'list-unordered', className: 'octicon octicon-list-unordered' }, { label: 'Location', value: 'location', className: 'octicon octicon-location' }, { label: 'Lock', value: 'lock', className: 'octicon octicon-lock' }, { label: 'Logo Github', value: 'logo-github', className: 'octicon octicon-logo-github' }, { label: 'Mail', value: 'mail', className: 'octicon octicon-mail' }, { label: 'Mail Read', value: 'mail-read', className: 'octicon octicon-mail-read' }, { label: 'Mail Reply', value: 'mail-reply', className: 'octicon octicon-mail-reply' }, { label: 'Mark Github', value: 'mark-github', className: 'octicon octicon-mark-github' }, { label: 'Markdown', value: 'markdown', className: 'octicon octicon-markdown' }, { label: 'Megaphone', value: 'megaphone', className: 'octicon octicon-megaphone' }, { label: 'Mention', value: 'mention', className: 'octicon octicon-mention' }, { label: 'Microscope', value: 'microscope', className: 'octicon octicon-microscope' }, { label: 'Milestone', value: 'milestone', className: 'octicon octicon-milestone' }, { label: 'Mirror', value: 'mirror', className: 'octicon octicon-mirror' }, { label: 'Mortar Board', value: 'mortar-board', className: 'octicon octicon-mortar-board' }, { label: 'Move Down', value: 'move-down', className: 'octicon octicon-move-down' }, { label: 'Move Left', value: 'move-left', className: 'octicon octicon-move-left' }, { label: 'Move Right', value: 'move-right', className: 'octicon octicon-move-right' }, { label: 'Move Up', value: 'move-up', className: 'octicon octicon-move-up' }, { label: 'Mute', value: 'mute', className: 'octicon octicon-mute' }, { label: 'No Newline', value: 'no-newline', className: 'octicon octicon-no-newline' }, { label: 'Octoface', value: 'octoface', className: 'octicon octicon-octoface' }, { label: 'Organization', value: 'organization', className: 'octicon octicon-organization' }, { label: 'Package', value: 'package', className: 'octicon octicon-package' }, { label: 'Paintcan', value: 'paintcan', className: 'octicon octicon-paintcan' }, { label: 'Pencil', value: 'pencil', className: 'octicon octicon-pencil' }, { label: 'Person', value: 'person', className: 'octicon octicon-person' }, { label: 'Pin', value: 'pin', className: 'octicon octicon-pin' }, { label: 'Playback Fast Forward', value: 'playback-fast-forward', className: 'octicon octicon-playback-fast-forward' }, { label: 'Playback Pause', value: 'playback-pause', className: 'octicon octicon-playback-pause' }, { label: 'Playback Play', value: 'playback-play', className: 'octicon octicon-playback-play' }, { label: 'Playback Rewind', value: 'playback-rewind', className: 'octicon octicon-playback-rewind' }, { label: 'Plug', value: 'plug', className: 'octicon octicon-plug' }, { label: 'Plus', value: 'plus', className: 'octicon octicon-plus' }, { label: 'Podium', value: 'podium', className: 'octicon octicon-podium' }, { label: 'Primitive Dot', value: 'primitive-dot', className: 'octicon octicon-primitive-dot' }, { label: 'Primitive Square', value: 'primitive-square', className: 'octicon octicon-primitive-square' }, { label: 'Pulse', value: 'pulse', className: 'octicon octicon-pulse' }, { label: 'Puzzle', value: 'puzzle', className: 'octicon octicon-puzzle' }, { label: 'Question', value: 'question', className: 'octicon octicon-question' }, { label: 'Quote', value: 'quote', className: 'octicon octicon-quote' }, { label: 'Radio Tower', value: 'radio-tower', className: 'octicon octicon-radio-tower' }, { label: 'Repo', value: 'repo', className: 'octicon octicon-repo' }, { label: 'Repo Clone', value: 'repo-clone', className: 'octicon octicon-repo-clone' }, { label: 'Repo Force Push', value: 'repo-force-push', className: 'octicon octicon-repo-force-push' }, { label: 'Repo Forked', value: 'repo-forked', className: 'octicon octicon-repo-forked' }, { label: 'Repo Pull', value: 'repo-pull', className: 'octicon octicon-repo-pull' }, { label: 'Repo Push', value: 'repo-push', className: 'octicon octicon-repo-push' }, { label: 'Rocket', value: 'rocket', className: 'octicon octicon-rocket' }, { label: 'Rss', value: 'rss', className: 'octicon octicon-rss' }, { label: 'Ruby', value: 'ruby', className: 'octicon octicon-ruby' }, { label: 'Screen Full', value: 'screen-full', className: 'octicon octicon-screen-full' }, { label: 'Screen Normal', value: 'screen-normal', className: 'octicon octicon-screen-normal' }, { label: 'Search', value: 'search', className: 'octicon octicon-search' }, { label: 'Server', value: 'server', className: 'octicon octicon-server' }, { label: 'Settings', value: 'settings', className: 'octicon octicon-settings' }, { label: 'Sign In', value: 'sign-in', className: 'octicon octicon-sign-in' }, { label: 'Sign Out', value: 'sign-out', className: 'octicon octicon-sign-out' }, { label: 'Split', value: 'split', className: 'octicon octicon-split' }, { label: 'Squirrel', value: 'squirrel', className: 'octicon octicon-squirrel' }, { label: 'Star', value: 'star', className: 'octicon octicon-star' }, { label: 'Steps', value: 'steps', className: 'octicon octicon-steps' }, { label: 'Stop', value: 'stop', className: 'octicon octicon-stop' }, { label: 'Sync', value: 'sync', className: 'octicon octicon-sync' }, { label: 'Tag', value: 'tag', className: 'octicon octicon-tag' }, { label: 'Telescope', value: 'telescope', className: 'octicon octicon-telescope' }, { label: 'Terminal', value: 'terminal', className: 'octicon octicon-terminal' }, { label: 'Three Bars', value: 'three-bars', className: 'octicon octicon-three-bars' }, { label: 'Thumbsdown', value: 'thumbsdown', className: 'octicon octicon-thumbsdown' }, { label: 'Thumbsup', value: 'thumbsup', className: 'octicon octicon-thumbsup' }, { label: 'Tools', value: 'tools', className: 'octicon octicon-tools' }, { label: 'Trashcan', value: 'trashcan', className: 'octicon octicon-trashcan' }, { label: 'Triangle Down', value: 'triangle-down', className: 'octicon octicon-triangle-down' }, { label: 'Triangle Left', value: 'triangle-left', className: 'octicon octicon-triangle-left' }, { label: 'Triangle Right', value: 'triangle-right', className: 'octicon octicon-triangle-right' }, { label: 'Triangle Up', value: 'triangle-up', className: 'octicon octicon-triangle-up' }, { label: 'Unfold', value: 'unfold', className: 'octicon octicon-unfold' }, { label: 'Unmute', value: 'unmute', className: 'octicon octicon-unmute' }, { label: 'Versions', value: 'versions', className: 'octicon octicon-versions' }, { label: 'X', value: 'x', className: 'octicon octicon-x' }, { label: 'Zap', value: 'zap', className: 'octicon octicon-zap' }];

var map = {};
list.forEach(function (icon) {
	map[icon.value] = icon;
});

module.exports = {
	list: list,
	map: map
};

},{}],2:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

var ALERT_TYPES = ['danger', 'info', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'ElementalAlert',
	propTypes: {
		className: React.PropTypes.string,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		var componentClass = classNames('Alert', 'Alert--' + this.props.type, this.props.className);

		var props = blacklist(this.props, ['type', 'className']);

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

var BUTTON_TYPES = ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-cancel'];

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func,
		size: React.PropTypes.string,
		submit: React.PropTypes.bool,
		type: React.PropTypes.oneOf(BUTTON_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('Button', 'Button--' + this.props.type, this.props.size ? 'Button--' + this.props.size : null, this.props.className);

		// props
		var props = blacklist(this.props, ['type', 'size', 'className']);
		props.className = componentClass;

		var tag = 'a';

		if (!props.href) {
			tag = 'button';
			props.type = this.props.submit ? 'submit' : 'button';
		}

		return React.createElement(tag, props, this.props.children);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],4:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var moment = require('moment');
var classNames = require('classnames');

var DatePickerCalendar = require('./DatePickerCalendar');

var DEFAULT_RANGES = [{ value: moment().subtract(1, 'weeks'), label: 'Past week' }, { value: moment().subtract(1, 'months'), label: 'Past month' }, { value: moment().subtract(3, 'months'), label: 'Past 3 months' }, { value: moment().subtract(6, 'months'), label: 'Past 6 months' }, { value: moment().subtract(12, 'months'), label: 'Past 12 months' }];

module.exports = React.createClass({
	displayName: 'DatePicker',
	propTypes: {
		isOpen: React.PropTypes.bool,
		isMulti: React.PropTypes.bool,
		showPredefinedRanges: React.PropTypes.bool,
		predefinedRangeOptions: React.PropTypes.array,
		backdropClosesDatePicker: React.PropTypes.bool,

		isExpanded: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,

		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			predefinedRangeOptions: DEFAULT_RANGES
		};
	},
	getInitialState: function getInitialState() {
		return {
			startDate: '',
			endDate: ''
		};
	},
	toggleDropdown: function toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	render: function render() {
		var self = this;

		// ranges

		var ranges;
		if (this.props.showPredefinedRanges) {
			var rangeItems = this.props.predefinedRangeOptions.map(function (r, i) {
				function action() {
					self.setState({
						startDate: moment().format('D'),
						endDate: r.value.format('D')
					});
					console.log(moment().format() + ' to ' + r.value.format());
				};
				return React.createElement(
					'button',
					{ key: 'range-button' + i, onClick: action, className: 'date-picker-range' },
					r.label
				);
			});

			ranges = React.createElement(
				'div',
				{ className: 'date-picker-ranges' },
				React.createElement(
					'div',
					{ className: 'date-picker-ranges-header' },
					'Select:'
				),
				React.createElement(
					'div',
					{ className: 'date-picker-ranges-body' },
					rangeItems
				)
			);
		}

		// classes

		var componentClass = classNames('date-picker', {
			'single-picker': !this.props.isMulti,
			'multi-picker': this.props.isMulti,
			'range-picker': this.props.showPredefinedRanges
		}, this.props.className);

		// build the components

		var datePickerBackground = this.props.isOpen ? React.createElement('div', { className: 'modal-backdrop date-picker-backdrop', onClick: this.props.backdropClosesDatePicker ? this.props.onChange : null }) : null;
		var datePickerDialog = this.props.isOpen ? React.createElement(
			'div',
			{ className: 'modal-dialog date-picker-dialog' },
			React.createElement(
				'div',
				{ className: 'date-picker-content' },
				React.createElement(
					'div',
					{ className: 'date-picker-body' },
					React.createElement(DatePickerCalendar, { selectedDate: this.state.startDate, isHeaderless: this.props.isHeaderless, isInstant: this.props.isInstant }),
					this.props.isMulti && React.createElement(DatePickerCalendar, { selectedDate: this.state.endDate, isHeaderless: this.props.isHeaderless })
				),
				ranges,
				!this.props.isInstant && React.createElement(
					'div',
					{ className: 'date-picker-footer' },
					React.createElement(
						'button',
						{ onClick: this.props.onChange, className: 'date-picker-footer-button primary' },
						'Confirm'
					),
					React.createElement(
						'button',
						{ onClick: this.props.onChange, className: 'date-picker-footer-button' },
						'Cancel'
					)
				)
			)
		) : null;

		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-dialog', component: 'div' },
				datePickerDialog
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'modal-background', component: 'div' },
				datePickerBackground
			)
		);
	}
});

},{"./DatePickerCalendar":5,"classnames":undefined,"moment":undefined,"react/addons":undefined}],5:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

var DatePickerHeader = require('./DatePickerHeader');

module.exports = React.createClass({
	displayName: 'DatePickerHeader',
	propTypes: {
		isExpanded: React.PropTypes.bool,
		isHeaderless: React.PropTypes.bool,
		isInstant: React.PropTypes.bool,
		selectedDate: React.PropTypes.string,
		weekStartsOn: React.PropTypes.string,
		yearRange: React.PropTypes.arrayOf(React.PropTypes.number)
	},
	getDefaultProps: function getDefaultProps() {
		var yearRange = [];
		yearRange.push(parseInt(moment().subtract(10, 'years').format('YYYY')));
		yearRange.push(parseInt(moment().add(10, 'years').format('YYYY')));

		return {
			weekStartsOn: 'Monday',
			yearRange: yearRange
		};
	},
	getInitialState: function getInitialState() {
		return {
			selectedDate: this.props.selectedDate
		};
	},

	handleDaySelection: function handleDaySelection(day) {
		this.setState({ selectedDate: day });
	},

	render: function render() {
		console.log('calendar selected day', this.props.selectedDate);
		var self = this;
		var firstDayOfMonth = moment().startOf('month').format('D');
		var lastDayOfMonth = moment().endOf('month').format('D');
		var currentDayOfMonth = moment().format('D');

		var calendarClass = classNames('date-picker-calendar', {
			'date-picker-calendar--start': this.props.startDate,
			'date-picker-calendar--end': this.props.endDate
		});

		// variables
		var currentMonth = moment().format('MMMM');
		var currentYear = moment().format('YYYY');
		var years = [];
		var months = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var daysOfTheMonth = [];
		var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
		for (var i = firstDayOfMonth; i < lastDayOfMonth; i++) {
			daysOfTheMonth.push(i);
		}
		for (var i = this.props.yearRange[0]; i < this.props.yearRange[1]; i++) {
			years.push(i);
		}

		// elements

		var weekDays = daysOfTheWeek.map(function (day, i) {
			return React.createElement(
				'abbr',
				{ key: 'day' + i, className: 'date-picker-calendar-legend-day', title: day },
				day.slice(0, 1)
			);
		});
		var monthDays = daysOfTheMonth.map(function (day) {
			var dayClass = classNames('date-picker-calendar-month-day', {
				'current-day': day == currentDayOfMonth,
				'selected-day': day == self.state.selectedDate,
				'before-selected-day': self.state.selectedDate && day < self.state.selectedDate,
				'after-selected-day': self.state.selectedDate && day > self.state.selectedDate
			});
			return React.createElement(
				'button',
				{ key: 'day' + day, onClick: self.handleDaySelection.bind(this, day), className: dayClass },
				day
			);
		});

		var titleMonths = months.map(function (month, i) {
			return React.createElement(
				'option',
				{ key: 'month' + i, value: month },
				month.slice(0, 3)
			);
		});
		var titleYears = years.map(function (year, i) {
			return React.createElement(
				'option',
				{ key: 'year' + i, value: year },
				year
			);
		});

		var calendar = React.createElement(
			'div',
			{ className: calendarClass },
			!this.props.isHeaderless && React.createElement(DatePickerHeader, { selectedDate: this.state.selectedDate, isExpanded: this.props.isExpanded }),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-toolbar' },
				React.createElement(
					'button',
					{ className: 'date-picker-calendar-toolbar-button-prev' },
					'Previous Month'
				),
				React.createElement(
					'select',
					{ className: 'date-picker-calendar-toolbar-select', defaultValue: currentMonth },
					titleMonths
				),
				React.createElement(
					'select',
					{ className: 'date-picker-calendar-toolbar-select', defaultValue: currentYear },
					titleYears
				),
				React.createElement(
					'button',
					{ className: 'date-picker-calendar-toolbar-button-next' },
					'Next Month'
				)
			),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-legend' },
				weekDays
			),
			React.createElement(
				'div',
				{ className: 'date-picker-calendar-month' },
				monthDays
			)
		);

		return calendar;
	}
});

},{"./DatePickerHeader":6,"classnames":undefined,"moment":undefined,"react/addons":undefined}],6:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var moment = require('moment');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'DatePickerHeader',
	propTypes: {
		expanded: React.PropTypes.bool,
		date: React.PropTypes.object
	},
	render: function render() {
		// helpers
		var date = moment(this.props.date);

		// classes
		var componentClass = classNames('date-picker-calendar-header', {
			'date-picker-calendar-header--expanded': this.props.expanded,
			'date-picker-calendar-header--condensed': !this.props.expanded,
			'no-date': !this.props.date
		});

		// elements

		var header = this.props.expanded ? React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-day' },
				date.format('D')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-year' },
				date.format('YYYY')
			)
		) : React.createElement(
			'div',
			{ className: componentClass },
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-dow' },
				date.format('dddd')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-day' },
				date.format('Do')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-month' },
				date.format('MMMM')
			),
			React.createElement(
				'span',
				{ className: 'date-picker-calendar-header-year' },
				date.format('YYYY')
			)
		);

		if (this.props.date) {
			header = this.props.expanded ? React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-day' },
					date.format('D')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-year' },
					date.format('YYYY')
				)
			) : React.createElement(
				'div',
				{ className: componentClass },
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-dow' },
					date.format('dddd')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-day' },
					date.format('Do')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-month' },
					date.format('MMMM')
				),
				React.createElement(
					'span',
					{ className: 'date-picker-calendar-header-year' },
					date.format('YYYY')
				)
			);
		}

		return header;
	}
});

},{"classnames":undefined,"moment":undefined,"react/addons":undefined}],7:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

var Button = require('./Button');

module.exports = React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		items: React.PropTypes.array.isRequired,
		className: React.PropTypes.string,
		buttonClass: React.PropTypes.string,
		buttonLabel: React.PropTypes.string,
		buttonHasDisclosureArrow: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonHasDisclosureArrow: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			isOpen: false
		};
	},
	openDropdown: function openDropdown() {
		this.setState({ isOpen: true });
	},
	closeDropdown: function closeDropdown() {
		this.setState({ isOpen: false });
	},
	renderChildren: function renderChildren() {
		var _this = this;

		return React.Children.map(this.props.children, function (child) {
			child.props.onClick = _this.openDropdown;
			return child;
		});
	},
	renderButton: function renderButton() {
		var buttonClass = classNames('Dropdown-toggle', this.props.buttonClass);
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? React.createElement('span', { className: 'Dropdown-toggle__arrow' }) : null;
		return React.createElement(
			Button,
			{ onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown, className: buttonClass },
			this.props.buttonLabel,
			disclosureArrow
		);
	},
	renderDropdownMenu: function renderDropdownMenu() {
		if (!this.state.isOpen) return;

		var dropdownMenuItems = this.props.items.map((function (item, i) {
			var menuItem;
			if (item.type === 'header') {
				menuItem = React.createElement(
					'li',
					{ key: 'item-' + i, className: 'Dropdown-menu__header' },
					item.label
				);
			} else if (item.type === 'divider') {
				menuItem = React.createElement('li', { key: 'item-' + i, className: 'Dropdown-menu__divider' });
			} else {
				if (item.href) {
					menuItem = React.createElement(
						'li',
						{ key: 'item-' + i, className: 'Dropdown-menu__item' },
						React.createElement(
							'a',
							{ className: 'Dropdown-menu__action', href: item.anchor },
							item.label
						)
					);
				} else {
					menuItem = React.createElement(
						'li',
						{ key: 'item-' + i, className: 'Dropdown-menu__item' },
						React.createElement(
							'span',
							{ className: 'Dropdown-menu__action', onClick: item.action },
							item.label
						)
					);
				}
			}
			return menuItem;
		}).bind(this));

		return React.createElement(
			'ul',
			{ key: 'Dropdown-menu', className: 'Dropdown-menu', role: 'menu' },
			dropdownMenuItems
		);
	},
	renderDropdownMenuBackground: function renderDropdownMenuBackground() {
		if (!this.state.isOpen) return;
		return React.createElement('div', { className: 'Dropdown-menu-backdrop', onClick: this.closeDropdown });
	},
	render: function render() {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);

		return React.createElement(
			'div',
			{ className: dropdownClass },
			React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton(),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Dropdown-menu', component: 'div' },
				this.renderDropdownMenu()
			),
			this.renderDropdownMenuBackground()
		);
	}
});

},{"./Button":3,"classnames":undefined,"react/addons":undefined}],8:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

var REGEXP_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validateEmail(value) {
	return REGEXP_EMAIL.test(value);
}

module.exports = React.createClass({
	displayName: 'EmailInputGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		required: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		requiredMessage: React.PropTypes.string,
		invalidMessage: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'Email address is required',
			invalidMessage: 'Please enter a valid email address'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (value.length && !validateEmail(value) || !value.length && this.props.required) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage
			);
		}
		var formGroupClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: 'inputEmail' },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: formGroupClass },
			componentLabel,
			React.createElement('input', { onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value, type: 'email', className: 'FormInput', placeholder: 'Enter email', id: 'inputEmail' }),
			validationMessage
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],9:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

/*
	Based on: https://github.com/paramaggarwal/react-dropzone
*/

var Dropzone = React.createClass({
	displayName: 'Dropzone',

	propTypes: {
		label: React.PropTypes.string,
		labelActive: React.PropTypes.string,
		onDrop: React.PropTypes.func.isRequired
	},
	getDefaultProps: function getDefaultProps() {
		return {
			label: 'Drag Files Here',
			labelActive: 'Drop to Upload'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isDragActive: false
		};
	},

	onDragLeave: function onDragLeave(e) {
		this.setState({
			isDragActive: false
		});
	},

	onDragOver: function onDragOver(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';

		this.setState({
			isDragActive: true
		});
	},

	onDrop: function onDrop(e) {
		e.preventDefault();

		this.setState({
			isDragActive: false
		});

		var files;
		if (e.dataTransfer) {
			files = e.dataTransfer.files;
		} else if (e.target) {
			files = e.target.files;
		}

		if (this.props.onDrop) {
			files = Array.prototype.slice.call(files);
			this.props.onDrop(files);
		}
	},

	onClick: function onClick() {
		this.refs.fileInput.getDOMNode().click();
	},

	render: function render() {

		var className = classNames('FileDragAndDrop', {
			'active': this.state.isDragActive
		}, this.props.className);

		return React.createElement(
			'button',
			{ className: className, onClick: this.onClick, onDragLeave: this.onDragLeave, onDragOver: this.onDragOver, onDrop: this.onDrop },
			React.createElement('input', { style: { display: 'none' }, type: 'file', multiple: true, ref: 'fileInput', onChange: this.onDrop }),
			React.createElement(
				'div',
				{ className: 'FileDragAndDrop__label' },
				this.state.isDragActive ? this.props.labelActive : this.props.label
			),
			this.props.children
		);
	}

});

module.exports = Dropzone;

},{"classnames":undefined,"react/addons":undefined}],10:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FileUpload',
	propTypes: {
		buttonClassChange: React.PropTypes.string,
		buttonClassInitial: React.PropTypes.string,
		buttonLabelChange: React.PropTypes.string,
		buttonLabelInitial: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		file: React.PropTypes.object, // https://developer.mozilla.org/en/docs/Using_files_from_web_applications
		onChange: React.PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonLabelInitial: 'Upload File',
			buttonLabelChange: 'Change File',
			buttonClassInitial: 'Button Button--default',
			buttonClassChange: 'Button Button--default'
		};
	},
	getInitialState: function getInitialState() {
		return {
			file: {},
			loading: false
		};
	},

	triggerFileBrowser: function triggerFileBrowser() {
		this.refs.fileInput.getDOMNode().click();
	},
	handleChange: function handleChange(e) {
		var self = this;
		var reader = new FileReader();
		var file = e.target.files[0];

		reader.readAsDataURL(file);

		reader.onloadstart = function () {
			self.setState({
				loading: true
			});
		};
		reader.onloadend = function (upload) {
			self.setState({
				loading: false,
				file: file,
				data_uri: upload.target.result
			});
		};
	},
	cancelUpload: function cancelUpload() {
		this.setState({
			file: false
		});
	},

	render: function render() {
		// helpers
		function isEmptyObject(obj) {
			return Object.keys(obj).length === 0;
		};
		var file = this.state.file;

		// props

		var props = blacklist(this.props, 'buttonClassChange', 'buttonClassInitial', 'buttonLabelChange', 'buttonLabelInitial', 'disabled', 'file', 'onChange');

		// elements

		var component = React.createElement(
			'button',
			{ type: 'button', onClick: this.triggerFileBrowser, className: this.props.buttonClassInitial, disabled: this.props.disabled },
			this.props.buttonLabelInitial
		);

		if (!isEmptyObject(file)) {
			component = React.createElement(
				'div',
				{ className: 'FileUpload' },
				React.createElement(
					'div',
					{ className: 'FileUpload__image' },
					React.createElement('img', { className: 'FileUpload__image-src', src: this.state.data_uri })
				),
				React.createElement(
					'div',
					{ className: 'FileUpload__content' },
					React.createElement(
						'div',
						{ className: 'FileUpload__message' },
						file.name,
						' (',
						Math.round(file.size / 1024),
						'Kb)'
					),
					React.createElement(
						'div',
						{ className: 'FileUpload__buttons' },
						React.createElement(
							'button',
							{ type: 'button', onClick: this.triggerFileBrowser, className: this.props.buttonClassChange },
							this.props.buttonLabelChange
						),
						React.createElement(
							'button',
							{ type: 'button', onClick: this.cancelUpload, className: 'Button Button--link-cancel' },
							'Cancel'
						)
					)
				)
			);
		};

		return React.createElement(
			'div',
			null,
			component,
			React.createElement('input', _extends({ style: { display: 'none' }, type: 'file', ref: 'fileInput', onChange: this.handleChange }, props))
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],11:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'FormField',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		label: React.PropTypes.string,
		multiline: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.string,
		width: React.PropTypes.oneOf(['one-half', 'two-quarters', 'three-sixths', 'one-quarter', 'three-quarters', 'one-third', 'two-sixths', 'two-thirds', 'four-sixths', 'one-fifth', 'two-fifths', 'three-fifths', 'four-fifths', 'one-sixth', 'five-sixths'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('form-field', this.props.width, this.props.className);

		// props
		var props = _.omit(this.props, ['label', 'width', 'className']);

		// elements
		var componentLabel = !!this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: this.props.id || this.props.htmlFor },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: componentClass },
			componentLabel,
			this.props.children
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],12:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');
var Spinner = require('elemental').Spinner;

var icons = require('../Octicons').map;

module.exports = React.createClass({
	displayName: 'FormIcon',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.string,
		fill: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		color: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		isLoading: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('IconField__icon', icons[this.props.icon].className, this.props.fill ? 'IconField__icon-fill--' + this.props.fill : null, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);

		var component = this.props.isLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('div', { className: className });

		return component;
	}
});

},{"../Octicons":1,"classnames":undefined,"elemental":"elemental","lodash":undefined,"react/addons":undefined}],13:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

var FormField = require('elemental').FormField;
var Spinner = require('elemental').Spinner;
var icons = require('../Octicons').map;

var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconPosition: React.PropTypes.oneOf(['left', 'right']),
		iconKey: React.PropTypes.string.isRequired,
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render: function render() {
		// props
		var props = _.omit(this.props, ['className', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading']);

		// classes
		var fieldClass = classNames('IconField', {
			'has-fill-icon': this.props.iconFill,
			'is-loading-icon': this.props.iconIsLoading
		}, this.props.iconFill ? 'field-context-' + this.props.iconFill : null, this.props.iconColor ? 'field-context-' + this.props.iconColor : null, this.props.iconPosition);

		var iconClass = classNames('IconField__icon', this.props.iconFill ? 'IconField__icon-fill--' + this.props.iconFill : null, this.props.iconColor ? 'IconField__icon-color--' + this.props.iconColor : null, icons[this.props.iconKey].className, this.props.className);

		var icon = this.props.iconIsLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('span', { className: iconClass });

		return React.createElement(
			FormField,
			props,
			React.createElement(
				'div',
				{ className: fieldClass },
				this.props.children,
				icon
			)
		);
	}
});

},{"../Octicons":1,"classnames":undefined,"elemental":"elemental","lodash":undefined,"react/addons":undefined}],14:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormInput',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		multiline: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		size: React.PropTypes.oneOf(['lg', 'sm', 'xs']),
		type: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'text'
		};
	},
	render: function render() {
		// classes
		var className = classNames('FormInput', this.props.size ? 'FormInput--' + this.props.size : null, this.props.className);

		var props = _extends(blacklist(this.props, 'className'), {
			onBlur: this.handleBlur,
			className: className,
			id: this.props.id || this.props.name
		});

		return React.createElement(this.props.multiline ? 'textarea' : 'input', props);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],15:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'FormLabel',
	propTypes: {
		verticalAlign: React.PropTypes.oneOf(['baseline', 'bottom', 'inherit', 'initial', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top']),
		className: React.PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('form-label', this.props.className);

		// props
		var props = _.omit(this.props, ['htmlFor', 'id', 'className', 'style']);

		// style
		var style;
		if (this.props.verticalAlign) {
			style = {
				verticalAlign: this.props.verticalAlign
			};
		}

		return React.createElement(
			'label',
			_extends({ className: className, htmlFor: this.props.htmlFor || this.props.id, style: style || this.props.style }, props),
			this.props.children
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],16:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('form-row', this.props.className);

		// props
		var props = _.omit(this.props, ['className']);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],17:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var _ = require('lodash');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormSelect',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		prependEmptyOption: React.PropTypes.bool,
		firstOption: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string,
		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'This field is required'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e.target.value);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (this.props.required && (!value || value && !value.length)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		// props
		var props = _.extend({}, this.props);
		var props = _.omit(this.props, ['prependEmptyOption', 'firstOption', 'alwaysValidate', 'htmlFor', 'id', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value', 'className']);

		// classes
		var componentClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.requiredMessage
			);
		}

		// dynamic elements
		var forAndID = this.props.htmlFor || this.props.id;
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: forAndID },
			this.props.label
		) : null;

		// options
		var options = this.props.options.map(function (opt, i) {
			return React.createElement(
				'option',
				{ key: 'option-' + i, value: opt.value },
				opt.label
			);
		});
		if (this.props.prependEmptyOption || this.props.firstOption) {
			options.unshift(React.createElement(
				'option',
				{ key: 'option-blank', value: '' },
				this.props.firstOption ? this.props.firstOption : 'Select...'
			));
		}

		return React.createElement(
			'div',
			{ className: componentClass },
			componentLabel,
			React.createElement(
				'select',
				_extends({ className: 'FormInput', id: forAndID, onChange: this.handleChange, onBlur: this.handleBlur }, props),
				options
			),
			validationMessage
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],18:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// props
		var props = _.omit(this.props, ['className']);

		// classes
		var className = classNames('InputGroup', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],19:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
// var _ = require('lodash');

var Button = require('elemental').Button;

module.exports = React.createClass({
	displayName: 'InputGroupAddon',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		return React.createElement(
			'span',
			{ className: 'InputGroup_addon' },
			React.createElement(
				Button,
				this.props,
				this.props.children
			)
		);
	}
});

},{"classnames":undefined,"elemental":"elemental","react/addons":undefined}],20:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		isOpen: React.PropTypes.bool,
		backdropClosesModal: React.PropTypes.bool,
		headerTitle: React.PropTypes.string,
		headerHasCloseButton: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var dialogClass = classNames('Modal-dialog', this.props.className);

		// elements
		var header = this.props.headerTitle ? React.createElement(
			'div',
			{ className: 'Modal-header' },
			this.props.headerHasCloseButton ? React.createElement('span', { onClick: this.props.onChange, className: 'Modal-close' }) : null,
			React.createElement(
				'h4',
				{ className: 'Modal-title' },
				'Modal Header'
			)
		) : null;

		var modalBackground = this.props.isOpen ? React.createElement('div', { className: 'Modal-backdrop', onClick: this.props.backdropClosesModal ? this.props.onChange : null }) : null;
		var modalDialog = this.props.isOpen ? React.createElement(
			'div',
			{ className: dialogClass },
			React.createElement(
				'div',
				{ className: 'Modal-content' },
				header,
				this.props.children
			)
		) : null;

		return React.createElement(
			'div',
			{ className: 'Modal' },
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-dialog', component: 'div' },
				modalDialog
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-background', component: 'div' },
				modalBackground
			)
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],21:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

function validatePassword(value) {
	return value.length >= 8;
}

module.exports = React.createClass({
	displayName: 'PasswordInputGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		required: React.PropTypes.bool,
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		requiredMessage: React.PropTypes.string,
		invalidMessage: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'Password is required',
			invalidMessage: 'Password must be at least 8 characters in length'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (value.length && !validatePassword(value) || !value.length && this.props.required) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.value.length ? this.props.invalidMessage : this.props.requiredMessage
			);
		}
		var formGroupClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: 'inputPassword' },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			{ className: formGroupClass },
			componentLabel,
			React.createElement('input', { onChange: this.handleChange, onBlur: this.handleBlur, value: this.props.value, type: 'password', className: 'FormInput', placeholder: 'Enter password', id: 'inputPassword' }),
			validationMessage
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],22:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var _ = require('lodash');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			requiredMessage: 'This field is required'
		};
	},
	getInitialState: function getInitialState() {
		return {
			isValid: true,
			validationIsActive: this.props.alwaysValidate
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		if (this.state.validationIsActive) {
			if (newProps.value !== this.props.value && newProps.value !== this._lastChangeValue && !newProps.alwaysValidate) {
				// reset validation state if the value was changed outside the component
				return this.setState({
					isValid: true,
					validationIsActive: false
				});
			}
			this.validateInput(newProps.value);
		}
	},
	componentDidMount: function componentDidMount() {
		if (this.state.validationIsActive) {
			this.validateInput(this.props.value);
		}
	},
	handleChange: function handleChange(e) {
		this._lastChangeValue = e.target.value;
		this.props.onChange && this.props.onChange(e.target.value);
	},
	handleBlur: function handleBlur() {
		if (!this.props.alwaysValidate) {
			this.setState({ validationIsActive: false });
		}
		this.validateInput(this.props.value);
	},
	validateInput: function validateInput(value) {
		var newState = {
			isValid: true
		};
		if (this.props.required && (!value || value && !value.length)) {
			newState.isValid = false;
		}
		if (!newState.isValid) {
			newState.validationIsActive = true;
		}
		this.setState(newState);
	},
	render: function render() {
		var self = this;
		// props
		var props = _.extend({}, this.props);
		delete props.alwaysValidate;
		delete props.label;
		delete props.onChange;
		delete props.options;
		delete props.required;
		delete props.requiredMessage;
		delete props.value;

		// classes
		var componentClass = classNames('form-field', {
			'is-invalid': !this.state.isValid
		}, this.props.className);

		// validation message
		var validationMessage;
		if (!this.state.isValid) {
			validationMessage = React.createElement(
				'div',
				{ className: 'form-validation is-invalid' },
				this.props.requiredMessage
			);
		}

		// dynamic elements
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label' },
			this.props.label
		) : null;

		// options
		var radios = this.props.options.map(function (radio, i) {
			return React.createElement(
				'div',
				{ key: 'radio-' + i, className: 'radio' },
				React.createElement(
					'label',
					{ className: 'radio-label' },
					React.createElement('input', { value: radio.value, type: 'radio', onChange: self.handleChange, onBlur: self.handleBlur, name: self.props.name, className: 'radio-input' }),
					' ',
					radio.label
				)
			);
		});
		if (this.props.inline) {
			radios = React.createElement(
				'div',
				{ className: 'inline-controls' },
				radios
			);
		}

		return React.createElement(
			'div',
			_extends({ className: componentClass }, props),
			componentLabel,
			radios,
			validationMessage
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],23:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		className: React.PropTypes.string,
		size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
		type: React.PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			size: 'md',
			type: 'default'
		};
	},
	render: function render() {
		var componentClass = classNames('Spinner', 'Spinner--' + this.props.type, 'Spinner--' + this.props.size, this.props.className);

		return React.createElement(
			'div',
			{ className: componentClass },
			React.createElement('i', { className: 'Spinner_dot Spinner_dot--first' }),
			React.createElement('i', { className: 'Spinner_dot Spinner_dot--second' }),
			React.createElement('i', { className: 'Spinner_dot Spinner_dot--third' })
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],24:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var classNames = require('classnames');
var _ = require('lodash');

module.exports = React.createClass({
	displayName: 'Tooltip',
	propTypes: {
		content: React.PropTypes.string,
		placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		className: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState: function getInitialState() {
		return {
			hover: false
		};
	},
	componentDidMount: function componentDidMount() {
		var target = React.findDOMNode(this.refs.target);
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	handleHover: function handleHover() {
		this.setState({ hover: true });
	},
	handleUnHover: function handleUnHover() {
		this.setState({ hover: false });
	},

	render: function render() {
		// classes
		var componentClass = classNames('TooltipOuter', this.props.className);

		// props
		var props = _.omit(this.props, ['content', 'className', 'placement', 'target']);

		// style
		var tooltipStyle = {};

		if (this.props.placement === 'top') {
			tooltipStyle.top = '-100%';
			tooltipStyle.left = '50%';
			tooltipStyle.msTransform = 'translateX(-50%)';
			tooltipStyle.WebkitTransform = 'translateX(-50%)';
			tooltipStyle.transform = 'translateX(-50%)';
			tooltipStyle.marginTop = -4;
		} else if (this.props.placement === 'bottom') {
			tooltipStyle.bottom = '-100%';
			tooltipStyle.left = '50%';
			tooltipStyle.msTransform = 'translateX(-50%)';
			tooltipStyle.WebkitTransform = 'translateX(-50%)';
			tooltipStyle.transform = 'translateX(-50%)';
			tooltipStyle.marginBottom = -4;
		} else if (this.props.placement === 'left') {
			tooltipStyle.top = '50%';
			tooltipStyle.right = '100%';
			tooltipStyle.marginTop = -(this.state.targetHeight / 2);
			tooltipStyle.marginRight = 4;
		} else if (this.props.placement === 'right') {
			tooltipStyle.top = '50%';
			tooltipStyle.left = '100%';
			tooltipStyle.marginTop = -(this.state.targetHeight / 2);
			tooltipStyle.marginLeft = 4;
		}

		// content
		var tooltip = this.state.hover ? React.createElement(
			'span',
			{ style: tooltipStyle, className: 'Tooltip ' + this.props.placement },
			React.createElement(
				'span',
				{ className: 'TooltipContent' },
				this.props.content
			),
			React.createElement('span', { className: 'TooltipArrow' })
		) : null;

		return React.createElement(
			'span',
			_extends({ onMouseOver: this.handleHover, onMouseOut: this.handleUnHover, className: componentClass, style: { display: 'inline-block', position: 'relative' } }, props),
			React.createElement(
				'span',
				{ ref: 'target', style: { display: 'inline-block' } },
				this.props.children
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Tooltip', component: 'span' },
				tooltip
			)
		);
	}
});

},{"classnames":undefined,"lodash":undefined,"react/addons":undefined}],"elemental":[function(require,module,exports){
'use strict';

exports.Alert = require('./components/Alert');
exports.Button = require('./components/Button');
exports.DatePicker = require('./components/DatePicker');
exports.DatePickerCalendar = require('./components/DatePickerCalendar');
exports.DatePickerHeader = require('./components/DatePickerHeader');
exports.Dropdown = require('./components/Dropdown');
exports.EmailInputGroup = require('./components/EmailInputGroup');
exports.Modal = require('./components/Modal');
exports.PasswordInputGroup = require('./components/PasswordInputGroup');
exports.RadioGroup = require('./components/RadioGroup');
exports.Spinner = require('./components/Spinner');
exports.Tooltip = require('./components/Tooltip');

exports.FormField = require('./components/FormField');
exports.FormRow = require('./components/FormRow');
exports.FormIcon = require('./components/FormIcon');
exports.FormIconField = require('./components/FormIconField');
exports.FormInput = require('./components/FormInput');
exports.FormLabel = require('./components/FormLabel');
exports.FormSelect = require('./components/FormSelect');

exports.FileDragAndDrop = require('./components/FileDragAndDrop');
exports.FileUpload = require('./components/FileUpload');

exports.InputGroup = require('./components/InputGroup');
exports.InputGroupAddon = require('./components/InputGroupAddon');

},{"./components/Alert":2,"./components/Button":3,"./components/DatePicker":4,"./components/DatePickerCalendar":5,"./components/DatePickerHeader":6,"./components/Dropdown":7,"./components/EmailInputGroup":8,"./components/FileDragAndDrop":9,"./components/FileUpload":10,"./components/FormField":11,"./components/FormIcon":12,"./components/FormIconField":13,"./components/FormInput":14,"./components/FormLabel":15,"./components/FormRow":16,"./components/FormSelect":17,"./components/InputGroup":18,"./components/InputGroupAddon":19,"./components/Modal":20,"./components/PasswordInputGroup":21,"./components/RadioGroup":22,"./components/Spinner":23,"./components/Tooltip":24}]},{},[]);
