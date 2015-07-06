var React = require('react/addons');
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
	getDefaultProps() {
		return {
			buttonLabelInitial: 'Upload File',
			buttonLabelChange:  'Change File'
		};
	},
	getInitialState() {
		return {
			file: {},
			loading: false
		};
	},

	triggerFileBrowser() {
		this.refs.fileInput.getDOMNode().click();
	},
	handleChange(e) {
		var self = this;
		var reader = new FileReader();
		var file = e.target.files[0];

		reader.readAsDataURL(file);

		reader.onloadstart = function() {
			console.time('onLoad')
			self.setState({
				loading: true
			});
		};
		reader.onloadend = function(upload) {
			console.timeEnd('onLoad')
			self.setState({
				loading: false,
				file: file,
				dataURI: upload.target.result
			});
		};
	},
	cancelUpload() {
		this.setState({
			dataURI: false,
			file: {}
		});
	},

	render() {
		// helpers
		function isEmptyObject(obj) {
			return Object.keys(obj).length === 0;
		}
		var { dataURI, file } = this.state;


		// props
		var props = blacklist(this.props, 'buttonClassChange', 'buttonClassInitial', 'buttonLabelChange', 'buttonLabelInitial', 'disabled', 'file', 'onChange');


		// elements
		var component = <Button onClick={this.triggerFileBrowser} disabled={this.props.disabled || this.state.loading}>{this.state.loading && <Spinner />}{this.props.buttonLabelInitial}</Button>;

		if (dataURI) {
			component = (
				<div className="FileUpload">
					<div className="FileUpload__image">
						<img className="FileUpload__image-src" src={dataURI} />
					</div>
					<div className="FileUpload__content">
						<div className="FileUpload__message">
							{file.name} ({Math.round(file.size / 1024)}Kb)
						</div>
						<div className="FileUpload__buttons">
							<Button onClick={this.triggerFileBrowser} disabled={this.state.loading}>
								{this.state.loading && <Spinner />}
								{this.props.buttonLabelChange}
							</Button>
							<Button onClick={this.cancelUpload} type="link-cancel" disabled={this.state.loading}>Cancel</Button>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				{component}
				<input style={{ display: 'none' }} type="file" ref="fileInput" onChange={this.handleChange} {...props} />
			</div>
		);
	}
});
