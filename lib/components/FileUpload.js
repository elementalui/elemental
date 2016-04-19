'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var blacklist = require('blacklist');

var Button = require('./Button');
var Spinner = require('./Spinner');

module.exports = React.createClass({
	displayName: 'FileUpload',
	propTypes: {
		buttonLabelChange: React.PropTypes.string,
		buttonLabelInitial: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		file: React.PropTypes.object, // https://developer.mozilla.org/en/docs/Using_files_from_web_applications
		onChange: React.PropTypes.func
	},
	getDefaultProps: function getDefaultProps() {
		return {
			buttonLabelInitial: 'Upload File',
			buttonLabelChange: 'Change File'
		};
	},
	getInitialState: function getInitialState() {
		return {
			dataURI: null,
			file: {},
			loading: false
		};
	},
	componentDidMount: function componentDidMount() {
		this.refs.fileInput.addEventListener('click', function () {
			this.value = '';
		}, false);
	},
	triggerFileBrowser: function triggerFileBrowser() {
		this.refs.fileInput.click();
	},
	handleChange: function handleChange(e) {
		var _this = this;

		var reader = new FileReader();
		var file = e.target.files[0];

		reader.readAsDataURL(file);

		reader.onloadstart = function () {
			_this.setState({
				loading: true
			});
		};
		reader.onloadend = function (upload) {
			_this.setState({
				loading: false,
				file: file,
				dataURI: upload.target.result
			});
			if (typeof _this.props.onChange === 'function') {
				_this.props.onChange(e, {
					file: file,
					dataURI: upload.target.result
				});
			}
		};
	},
	cancelUpload: function cancelUpload(e) {
		this.setState({
			dataURI: null,
			file: {}
		});
		this.props.onChange(e, null);
	},
	render: function render() {
		var _state = this.state;
		var dataURI = _state.dataURI;
		var file = _state.file;

		// props
		var props = blacklist(this.props, 'buttonClassChange', 'buttonClassInitial', 'buttonLabelChange', 'buttonLabelInitial', 'disabled', 'file', 'onChange');
		// elements
		var component = dataURI ? React.createElement(
			'div',
			{ className: 'FileUpload' },
			React.createElement(
				'div',
				{ className: 'FileUpload__image' },
				React.createElement('img', { className: 'FileUpload__image-src', src: dataURI })
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
						Button,
						{ onClick: this.triggerFileBrowser, disabled: this.state.loading },
						this.state.loading && React.createElement(Spinner, null),
						this.props.buttonLabelChange
					),
					React.createElement(
						Button,
						{ onClick: this.cancelUpload, type: 'link-cancel', disabled: this.state.loading },
						'Cancel'
					)
				)
			)
		) : React.createElement(
			Button,
			{ onClick: this.triggerFileBrowser, disabled: this.props.disabled || this.state.loading },
			this.state.loading ? React.createElement(Spinner, null) : null,
			this.props.buttonLabelInitial
		);

		return React.createElement(
			'div',
			null,
			component,
			React.createElement('input', _extends({ style: { display: 'none' }, type: 'file', ref: 'fileInput', onChange: this.handleChange }, props))
		);
	}
});