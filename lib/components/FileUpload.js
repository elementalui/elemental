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