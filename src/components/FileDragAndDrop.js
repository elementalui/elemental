var React = require('react/addons');
var classNames = require('classnames');

/*
	Based on: https://github.com/paramaggarwal/react-dropzone
*/

var Dropzone = React.createClass({
	propTypes: {
		label: React.PropTypes.string,
		labelActive: React.PropTypes.string,
		onDrop: React.PropTypes.func.isRequired
	},
	getDefaultProps: function() {
		return {
			label: 'Drag Files Here',
			labelActive: 'Drop to Upload'
		}
	},
	getInitialState: function() {
		return {
			isDragActive: false
		}
	},

	onDragLeave: function(e) {
		this.setState({
			isDragActive: false
		});
	},

	onDragOver: function(e) {
		e.preventDefault();
		e.dataTransfer.dropEffect = "copy";

		this.setState({
			isDragActive: true
		});
	},

	onDrop: function(e) {
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

	onClick: function () {
		this.refs.fileInput.getDOMNode().click();
	},

	render: function() {

		var className = classNames('FileDragAndDrop', {
			'active': this.state.isDragActive
		}, this.props.className);

		return (
			<button className={className} onClick={this.onClick} onDragLeave={this.onDragLeave} onDragOver={this.onDragOver} onDrop={this.onDrop}>
				<input style={{display: 'none' }} type='file' multiple ref='fileInput' onChange={this.onDrop} />
				<div className="FileDragAndDrop__label">{this.state.isDragActive ? this.props.labelActive : this.props.label}</div>
				{this.props.children}
			</button>
		);
	}

});

module.exports = Dropzone;