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

		return React.createElement(
			'div',
			{ className: componentClass },
			this.props.children
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],3:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

var BUTTON_TYPES = ['default', 'default-primary', 'default-success', 'default-warning', 'default-danger', 'hollow-primary', 'hollow-success', 'hollow-warning', 'hollow-danger', 'primary', 'success', 'warning', 'danger', 'link', 'link-text', 'link-cancel', 'link-delete'];

module.exports = React.createClass({
	displayName: 'Button',
	propTypes: {
		block: React.PropTypes.bool,
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
		var componentClass = classNames('Button', 'Button--' + this.props.type, this.props.size ? 'Button--' + this.props.size : null, {
			'Button--block': this.props.block
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'type', 'size', 'className');
		props.className = componentClass;

		var tag = 'button';
		props.type = this.props.submit ? 'submit' : 'button';

		if (props.href) {
			tag = 'a';
			props.type = null;
		}

		return React.createElement(tag, props, this.props.children);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],4:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

var Button = require('./Button');

module.exports = React.createClass({
	displayName: 'Dropdown',
	propTypes: {
		alignRight: React.PropTypes.bool,
		buttonHasDisclosureArrow: React.PropTypes.bool,
		buttonLabel: React.PropTypes.string,
		buttonType: React.PropTypes.string,
		className: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		items: React.PropTypes.array.isRequired,
		onSelect: React.PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonHasDisclosureArrow: true,
			onSelect: function onSelect() {}
		};
	},
	getInitialState: function getInitialState() {
		return {
			isOpen: this.props.isOpen || false
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
			child.props.onClick = _this.state.isOpen ? _this.closeDropdown : _this.openDropdown;
			child.props.className = classNames(child.props.className, 'Dropdown-toggle');
			return child;
		});
	},
	renderButton: function renderButton() {
		var disclosureArrow = this.props.buttonHasDisclosureArrow ? React.createElement('span', { className: 'disclosure-arrow' }) : null;

		return React.createElement(
			Button,
			{ type: this.props.buttonType, onClick: this.state.isOpen ? this.closeDropdown : this.openDropdown, className: 'Dropdown-toggle' },
			this.props.buttonLabel,
			disclosureArrow
		);
	},

	onClick: function onClick(selectedItem) {
		this.setState({
			isOpen: !this.state.isOpen
		});

		this.props.onSelect(selectedItem);
	},
	renderDropdownMenu: function renderDropdownMenu() {
		var self = this;
		if (!this.state.isOpen) return null;

		var dropdownMenuItems = this.props.items.map(function (item, i) {
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
				menuItem = React.createElement(
					'li',
					{ key: 'item-' + i, className: 'Dropdown-menu__item' },
					React.createElement(
						'span',
						{ className: 'Dropdown-menu__action', onClick: self.onClick.bind(self, item.label) },
						item.label
					)
				);
			}
			return menuItem;
		});

		return React.createElement(
			'ul',
			{ key: 'Dropdown-menu', className: 'Dropdown-menu', role: 'menu' },
			dropdownMenuItems
		);
	},
	renderDropdownMenuBackground: function renderDropdownMenuBackground() {
		if (!this.state.isOpen) return null;
		return React.createElement('div', { className: 'Dropdown-menu-backdrop', onClick: this.closeDropdown });
	},

	render: function render() {
		// classes
		var dropdownClass = classNames('Dropdown', {
			'is-open': this.state.isOpen,
			'align-right': this.props.alignRight
		}, this.props.className);

		// props
		var props = blacklist(this.props, 'alignRight', 'buttonHasDisclosureArrow', 'buttonLabel', 'buttonType', 'className', 'isOpen', 'items');

		return React.createElement(
			'span',
			_extends({ className: dropdownClass }, props),
			React.Children.count(this.props.children) ? this.renderChildren() : this.renderButton(),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Dropdown-menu' },
				this.renderDropdownMenu()
			),
			this.renderDropdownMenuBackground()
		);
	}
});

},{"./Button":3,"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],5:[function(require,module,exports){
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
		className: React.PropTypes.string,
		invalidMessage: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string
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
		if (this.props.onChange) this.props.onChange(e);
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

},{"classnames":undefined,"react/addons":undefined}],6:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

/*
	Based on: https://github.com/paramaggarwal/react-dropzone
*/

var Dropzone = React.createClass({
	displayName: 'Dropzone',

	propTypes: {
		className: React.PropTypes.string,
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

	onDragLeave: function onDragLeave() {
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

},{"classnames":undefined,"react/addons":undefined}],7:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');

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
				dataURI: upload.target.result
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
		}
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
					React.createElement('img', { className: 'FileUpload__image-src', src: this.state.dataURI })
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
		}

		return React.createElement(
			'div',
			null,
			component,
			React.createElement('input', _extends({ style: { display: 'none' }, type: 'file', ref: 'fileInput', onChange: this.handleChange }, props))
		);
	}
});

},{"blacklist":undefined,"react/addons":undefined}],8:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormField',
	propTypes: {
		className: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		multiline: React.PropTypes.bool,
		offsetAbsentLabel: React.PropTypes.bool,
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
		var componentClass = classNames('form-field', {
			'offset-absent-label': this.props.offsetAbsentLabel
		}, this.props.width, this.props.className);

		// props
		var props = blacklist(this.props, 'className', 'label', 'type', 'width');

		// elements
		var componentLabel = this.props.label ? React.createElement(
			'label',
			{ className: 'form-label', htmlFor: this.props.id || this.props.htmlFor },
			this.props.label
		) : null;

		return React.createElement(
			'div',
			_extends({ className: componentClass }, props),
			componentLabel,
			this.props.children
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],9:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');
var Spinner = require('./Spinner');

var icons = require('../Octicons').map;

module.exports = React.createClass({
	displayName: 'FormIcon',
	propTypes: {
		className: React.PropTypes.string,
		color: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		fill: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
		icon: React.PropTypes.string,
		isLoading: React.PropTypes.bool
	},
	render: function render() {
		// classes
		var className = classNames('IconField__icon', icons[this.props.icon].className, this.props.fill ? 'IconField__icon-fill--' + this.props.fill : null, this.props.type ? 'IconField__icon-color--' + this.props.type : null, this.props.className);

		var component = this.props.isLoading ? React.createElement(Spinner, { size: 'sm' }) : React.createElement('div', { className: className });

		return component;
	}
});

},{"../Octicons":1,"./Spinner":22,"classnames":undefined,"react/addons":undefined}],10:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var FormField = require('./FormField');
var Spinner = require('./Spinner');
var icons = require('../Octicons').map;

var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool,
		iconKey: React.PropTypes.string.isRequired,
		iconPosition: React.PropTypes.oneOf(['left', 'right'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading');

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

},{"../Octicons":1,"./FormField":8,"./Spinner":22,"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],11:[function(require,module,exports){
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
		noedit: React.PropTypes.bool,
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
		var className = classNames({
			'FormInput-noedit': this.props.noedit,
			'FormInput-noedit--multiline': this.props.noedit && this.props.multiline,
			'FormInput': !this.props.noedit
		}, this.props.size ? 'FormInput--' + this.props.size : null, this.props.className);

		var props = _extends(blacklist(this.props, 'className'), {
			onBlur: this.handleBlur,
			className: className,
			id: this.props.id || this.props.name
		});

		// element
		var componentElement = 'input';
		if (this.props.noedit && this.props.href) {
			componentElement = 'a';
			props.type = null;
		} else if (this.props.noedit) {
			componentElement = 'div';
			props.type = null;
		} else if (this.props.multiline) {
			componentElement = 'textarea';
		}

		return React.createElement(componentElement, props);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],12:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormLabel',
	propTypes: {
		className: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		style: React.PropTypes.object,
		verticalAlign: React.PropTypes.oneOf(['baseline', 'bottom', 'inherit', 'initial', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top'])
	},
	render: function render() {
		// classes
		var className = classNames('form-label', this.props.className);

		// props
		var props = blacklist(this.props, 'htmlFor', 'id', 'className', 'style');

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

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],13:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var NOTE_TYPES = ['default', 'primary', 'success', 'warning', 'danger'];

module.exports = React.createClass({
	displayName: 'FormNote',
	propTypes: {
		className: React.PropTypes.string,
		note: React.PropTypes.string,
		type: React.PropTypes.oneOf(NOTE_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render: function render() {
		// classes
		var componentClass = classNames('FormNote', this.props.type ? 'FormNote--' + this.props.type : null, this.props.className);

		// props
		var props = blacklist(this.props, 'className', 'note', 'type');

		// allow users to pass through the note as an attribute or as children
		return React.createElement(
			'div',
			_extends({ className: componentClass, dangerouslySetInnerHTML: this.props.note ? { __html: this.props.note } : null }, props),
			this.props.children
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],14:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormRow',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// classes
		var className = classNames('form-row', this.props.className);

		return React.createElement(
			'div',
			{ className: className },
			this.props.children
		);
	}
});

},{"classnames":undefined,"react/addons":undefined}],15:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormSelect',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		className: React.PropTypes.string,
		firstOption: React.PropTypes.string,
		htmlFor: React.PropTypes.string,
		id: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func.isRequired,
		options: React.PropTypes.array.isRequired,
		prependEmptyOption: React.PropTypes.bool,
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
		if (this.props.onChange) this.props.onChange(e.target.value);
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
		var props = blacklist(this.props, 'prependEmptyOption', 'firstOption', 'alwaysValidate', 'htmlFor', 'id', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value', 'className');

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

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],16:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroup',
	propTypes: {
		className: React.PropTypes.string,
		contiguous: React.PropTypes.bool
	},
	getDefaultProps: function getDefaultProps() {
		return {
			contiguous: true
		};
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('InputGroup', {
			'is-contiguous': this.props.contiguous
		}, this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});

// expose the addon to the top level export
module.exports.Section = require('./InputGroupSection');

},{"./InputGroupSection":17,"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],17:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'InputGroupSection',
	propTypes: {
		className: React.PropTypes.string,
		grow: React.PropTypes.bool
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('InputGroup_section', {
			'InputGroup_section--grow': this.props.grow
		}, this.props.className);
		props.className = className;

		return React.createElement(
			'span',
			props,
			this.props.children
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],18:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Modal',
	propTypes: {
		backdropClosesModal: React.PropTypes.bool,
		className: React.PropTypes.string,
		headerHasCloseButton: React.PropTypes.bool,
		headerTitle: React.PropTypes.string,
		isOpen: React.PropTypes.bool,
		onCancel: React.PropTypes.func
	},
	renderDialog: function renderDialog() {
		if (!this.props.isOpen) return null;

		// elements
		var header = this.props.headerTitle ? React.createElement(
			'div',
			{ className: 'Modal-header' },
			this.props.headerHasCloseButton ? React.createElement('span', { onClick: this.props.onCancel, className: 'Modal-close' }) : null,
			React.createElement(
				'h4',
				{ className: 'Modal-title' },
				this.props.headerTitle
			)
		) : null;

		return React.createElement(
			'div',
			{ className: 'Modal-dialog' },
			React.createElement(
				'div',
				{ className: 'Modal-content' },
				header,
				this.props.children
			)
		);
	},
	renderBackdrop: function renderBackdrop() {
		if (!this.props.isOpen) return null;

		return React.createElement('div', { className: 'Modal-backdrop', onClick: this.props.backdropClosesModal ? this.props.onCancel : null });
	},
	render: function render() {
		// classes
		var className = classNames('Modal', this.props.className);

		// props
		var props = blacklist(this.props, 'backdropClosesModal', 'className', 'headerHasCloseButton', 'headerTitle', 'isOpen');
		props.className = className;

		return React.createElement(
			'div',
			props,
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-dialog', component: 'div' },
				this.renderDialog()
			),
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Modal-background', component: 'div' },
				this.renderBackdrop()
			)
		);
	}
});

// create simple children for the modal
module.exports.Body = React.createClass({
	displayName: 'ModalBody',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('Modal-body', this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});
module.exports.Footer = React.createClass({
	displayName: 'ModalFooter',
	propTypes: {
		className: React.PropTypes.string
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var className = classNames('Modal-footer', this.props.className);

		return React.createElement(
			'div',
			_extends({ className: className }, props),
			this.props.children
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],19:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Pagination',
	propTypes: {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		pagination: React.PropTypes.shape({
			currentPage: React.PropTypes.number,
			first: React.PropTypes.number,
			last: React.PropTypes.number,
			next: React.PropTypes.bool,
			pages: React.PropTypes.array,
			previous: React.PropTypes.bool,
			total: React.PropTypes.number,
			totalPages: React.PropTypes.number
		})
	},
	renderCount: function renderCount() {
		var count = this.props.pagination;
		return React.createElement(
			'div',
			{ className: 'Pagination__count' },
			'Showing ',
			count.first,
			' to ',
			count.last,
			' of ',
			count.total
		);
	},
	renderList: function renderList() {
		if (!this.props.pagination.pages) return 'No pages...';

		var self = this;

		var pages = this.props.pagination.pages.map(function (page) {
			var className = classNames('Pagination__list__item', {
				'is-selected': self.props.pagination.currentPage === page
			});
			return React.createElement(
				'button',
				{ key: 'page_' + page, className: className, onClick: self.props.onClick },
				page
			);
		});

		return React.createElement(
			'div',
			{ className: 'Pagination__list' },
			pages
		);
	},
	render: function render() {
		// props
		var props = blacklist(this.props, 'className');

		// classes
		var componentClass = classNames('Pagination', this.props.className);
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			this.renderCount(),
			this.renderList()
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],20:[function(require,module,exports){
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
		className: React.PropTypes.string,
		invalidMessage: React.PropTypes.string,
		label: React.PropTypes.string,
		onChange: React.PropTypes.func,
		required: React.PropTypes.bool,
		requiredMessage: React.PropTypes.string,
		value: React.PropTypes.string
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
		if (this.props.onChange) this.props.onChange(e);
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

},{"classnames":undefined,"react/addons":undefined}],21:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'RadioGroup',
	propTypes: {
		alwaysValidate: React.PropTypes.bool,
		className: React.PropTypes.string,
		inline: React.PropTypes.bool,
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
		if (this.props.onChange) this.props.onChange(e.target.value);
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
		var props = blacklist(this.props, 'alwaysValidate', 'label', 'onChange', 'options', 'required', 'requiredMessage', 'value');

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

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],22:[function(require,module,exports){
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

},{"classnames":undefined,"react/addons":undefined}],23:[function(require,module,exports){
'use strict';

var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

var ALERT_TYPES = ['danger', 'default', 'info', 'primary', 'success', 'warning', 'default-inverted', 'info-inverted', 'primary-inverted', 'success-inverted', 'warning-inverted'];

module.exports = React.createClass({
	displayName: 'Tag',
	propTypes: {
		className: React.PropTypes.string,
		hasClearButton: React.PropTypes.bool,
		label: React.PropTypes.string.isRequired,
		onClear: React.PropTypes.func,
		onClick: React.PropTypes.func,
		type: React.PropTypes.oneOf(ALERT_TYPES)
	},
	getDefaultProps: function getDefaultProps() {
		return {
			type: 'default'
		};
	},
	renderClearButton: function renderClearButton() {
		if (!this.props.hasClearButton) return null;
		return React.createElement(
			'button',
			{ onClick: this.props.onClear, className: 'Tag__clear' },
			'×'
		);
	},
	render: function render() {
		var componentClass = classNames('Tag', 'Tag--' + this.props.type, this.props.className);

		var props = blacklist(this.props, 'className', 'hasClearButton', 'label', 'onClear', 'onClick', 'type');
		props.className = componentClass;

		return React.createElement(
			'div',
			props,
			React.createElement(
				'button',
				{ onClick: this.props.onClick, className: 'Tag__label' },
				this.props.label
			),
			this.renderClearButton()
		);
	}
});

},{"blacklist":undefined,"classnames":undefined,"react/addons":undefined}],24:[function(require,module,exports){
/* eslint react/no-did-mount-set-state: 0 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'Tooltip',
	propTypes: {
		className: React.PropTypes.string,
		content: React.PropTypes.string,
		placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left'])
	},
	getDefaultProps: function getDefaultProps() {
		return {
			placement: 'top'
		};
	},
	getInitialState: function getInitialState() {
		return {
			visible: false
		};
	},
	componentDidMount: function componentDidMount() {
		var target = this.refs.target.getDOMNode();
		this.setState({
			targetHeight: target.offsetHeight,
			targetWidth: target.offsetWidth
		});
	},

	showTooltip: function showTooltip() {
		this.setState({ visible: true });
	},
	hideTooltip: function hideTooltip() {
		this.setState({ visible: false });
	},

	renderTooltip: function renderTooltip() {
		if (!this.state.visible) return null;

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

		return React.createElement(
			'span',
			{ style: tooltipStyle, className: 'Tooltip ' + this.props.placement },
			React.createElement(
				'span',
				{ className: 'TooltipContent' },
				this.props.content
			),
			React.createElement('span', { className: 'TooltipArrow' })
		);
	},

	render: function render() {
		// props
		var props = blacklist(this.props, 'content', 'placement', 'target');

		return React.createElement(
			'span',
			_extends({ ref: 'target', onMouseOver: this.showTooltip, onMouseOut: this.hideTooltip, onFocus: this.showTooltip, onBlur: this.hideTooltip, style: { position: 'relative' } }, props),
			this.props.children,
			React.createElement(
				ReactCSSTransitionGroup,
				{ transitionName: 'Tooltip', component: 'span' },
				this.renderTooltip()
			)
		);
	}
});

},{"blacklist":undefined,"react/addons":undefined}],"elemental":[function(require,module,exports){
'use strict';

exports.Alert = require('./components/Alert');
exports.Button = require('./components/Button');
exports.Dropdown = require('./components/Dropdown');
exports.EmailInputGroup = require('./components/EmailInputGroup');
exports.FileDragAndDrop = require('./components/FileDragAndDrop');
exports.FileUpload = require('./components/FileUpload');
exports.FormField = require('./components/FormField');
exports.FormIcon = require('./components/FormIcon');
exports.FormIconField = require('./components/FormIconField');
exports.FormInput = require('./components/FormInput');
exports.FormLabel = require('./components/FormLabel');
exports.FormNote = require('./components/FormNote');
exports.FormRow = require('./components/FormRow');
exports.FormSelect = require('./components/FormSelect');
exports.InputGroup = require('./components/InputGroup');
exports.Modal = require('./components/Modal');
exports.Pagination = require('./components/Pagination');
exports.PasswordInputGroup = require('./components/PasswordInputGroup');
exports.RadioGroup = require('./components/RadioGroup');
exports.Spinner = require('./components/Spinner');
exports.Tag = require('./components/Tag');
exports.Tooltip = require('./components/Tooltip');

},{"./components/Alert":2,"./components/Button":3,"./components/Dropdown":4,"./components/EmailInputGroup":5,"./components/FileDragAndDrop":6,"./components/FileUpload":7,"./components/FormField":8,"./components/FormIcon":9,"./components/FormIconField":10,"./components/FormInput":11,"./components/FormLabel":12,"./components/FormNote":13,"./components/FormRow":14,"./components/FormSelect":15,"./components/InputGroup":16,"./components/Modal":18,"./components/Pagination":19,"./components/PasswordInputGroup":20,"./components/RadioGroup":21,"./components/Spinner":22,"./components/Tag":23,"./components/Tooltip":24}]},{},[]);
