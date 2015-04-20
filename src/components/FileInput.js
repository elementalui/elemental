var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

module.exports = React.createClass({
	displayName: 'FileInput',
	propTypes: {
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		buttonLabel: React.PropTypes.string,
		buttonClass: React.PropTypes.string,
		inputClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			buttonLabel: 'Upload File'
		};
	},
	getInitialState() {
		return {
			file: this.props.value
		};
	},

	triggerFileBrowser() {
		this.refs.fileInput.getDOMNode().click();
	},
	handleChange(e) {
		this.setState({
			file: e.target.value
		});
	},
	cancelUpload() {
		this.setState({
			file: false
		});
	},

	render() {
		// classes
		var buttonClass = classNames('btn btn-default',
			this.props.buttonClass);
		
		var inputClass = classNames('form-input',
			this.props.inputClass);

		
		// elements

		var component = <button type="button" onClick={this.triggerFileBrowser} className={buttonClass}>Upload Image</button>;
		
		if (this.state.file) {
			var fileName = this.state.file.replace('C:\\fakepath\\', ''); // chrome embelishes
			component = <div className="file-upload">
				<div className="file-upload-message success">Image selected: "{fileName}" - save to upload</div>
				<div className="file-upload-buttons">
					<button type="button" onClick={this.triggerFileBrowser} className={buttonClass}>Change Image</button>
					<button type="button" onClick={this.cancelUpload} className="btn btn-link-cancel">Cancel</button>
				</div>
			</div>
		};

		return (
			<div>
				{component}
				<input style={{display: 'none' }} type="file" ref="fileInput" onChange={this.handleChange} className={inputClass} />
			</div>
		);
	}
});
