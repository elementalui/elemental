/* global Prism */
var classNames = require('classnames');
var React = require('react');

var ExampleSource = React.createClass({
	propTypes: {
		children: React.PropTypes.string.isRequired
	},
	getDefaultProps () {
		return {
			language: 'markup'
		}
	},
	componentDidMount () {
		this.highlight();
	},
	componentDidUpdate () {
		this.highlight();
	},
	highlight () {
		Prism.highlightElement(this.refs.code.getDOMNode(), true);
	},
	fixIndentation (children) {
		if (typeof children !== 'string') return children;
		var lines = children.split('\n').filter(l => l);
		if (!lines.length) return children;
		var indent = /^\t+/.exec(lines[0]);
		if (indent) {
			indent = indent[0].length;
			lines = lines.map(s => s.substr(indent));
		}
		return lines.join('\n');
	},
	render () {
		var codeClass = classNames('code-example__code', (
			'language-' + this.props.language
		));
		return (
			<pre className="code-example__pre">
				<code ref="code" className={codeClass}>
					{this.fixIndentation(this.props.children)}
				</code>
			</pre>
		);
	}
});

module.exports = ExampleSource;
