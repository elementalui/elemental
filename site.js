require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  Copyright (c) 2015 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes += ' ' + arg;
			} else if (Array.isArray(arg)) {
				classes += ' ' + classNames.apply(null, arg);
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes += ' ' + key;
					}
				}
			}
		}

		return classes.substr(1);
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _srcConstants = require('../../../src/constants');

var _srcConstants2 = _interopRequireDefault(_srcConstants);

var ALIGN_TRANSFORM = {
	'center': 'center',
	'left': 'flex-start',
	'right': 'flex-end'
};

var DemoBox = _react2['default'].createClass({
	displayName: 'DemoBox',

	propTypes: {
		align: _react2['default'].PropTypes.oneOf(['center', 'left', 'right']),
		children: _react2['default'].PropTypes.node.isRequired,
		className: _react2['default'].PropTypes.string,
		inverted: _react2['default'].PropTypes.bool,
		style: _react2['default'].PropTypes.object
	},
	getDefaultProps: function getDefaultProps() {
		return {
			align: 'center'
		};
	},
	render: function render() {
		var boxStyle = {
			backgroundColor: 'rgba(0,0,0,0.05)',
			borderRadius: 4,
			display: 'flex',
			justifyContent: ALIGN_TRANSFORM[this.props.align],
			msFlexPack: ALIGN_TRANSFORM[this.props.align],
			WebkitJustifyContent: ALIGN_TRANSFORM[this.props.align],
			marginBottom: _srcConstants2['default'].width.gutter,
			padding: '.66em 1.5em'
		};
		if (this.props.inverted) {
			boxStyle.backgroundColor = _srcConstants2['default'].color.appPrimary;
		}
		var className = (0, _classnames2['default'])('DemoBox', this.props.className);

		return _react2['default'].createElement('div', _extends({}, this.props, { style: _extends({}, boxStyle, this.props.style), className: className }));
	}
});

module.exports = DemoBox;

},{"../../../src/constants":16,"classnames":1,"react":undefined}],3:[function(require,module,exports){
/* global Prism */
'use strict';

var classNames = require('classnames');
var React = require('react');

var ExampleSource = React.createClass({
	displayName: 'ExampleSource',

	propTypes: {
		children: React.PropTypes.string.isRequired,
		language: React.PropTypes.string
	},
	getDefaultProps: function getDefaultProps() {
		return {
			language: 'markup'
		};
	},
	componentDidMount: function componentDidMount() {
		this.highlight();
	},
	componentDidUpdate: function componentDidUpdate() {
		this.highlight();
	},
	highlight: function highlight() {
		Prism.highlightElement(this.refs.code, true);
	},
	fixIndentation: function fixIndentation(children) {
		if (typeof children !== 'string') return children;
		var lines = children.split('\n').filter(function (l) {
			return l;
		});
		if (!lines.length) return children;
		var indent = /^\t+/.exec(lines[0]);
		if (indent) {
			indent = indent[0].length;
			lines = lines.map(function (s) {
				return s.substr(indent);
			});
		}
		return lines.join('\n');
	},
	render: function render() {
		var codeClass = classNames('code-example__code', 'language-' + this.props.language);
		return React.createElement(
			'pre',
			{ className: 'code-example__pre' },
			React.createElement(
				'code',
				{ ref: 'code', className: codeClass },
				this.fixIndentation(this.props.children)
			)
		);
	}
});

module.exports = ExampleSource;

},{"classnames":1,"react":undefined}],4:[function(require,module,exports){
// Thank you https://gist.github.com/Keeguon/2310008
'use strict';

module.exports = [{ name: 'Afghanistan', code: 'AF' }, { name: 'Åland Islands', code: 'AX' }, { name: 'Albania', code: 'AL' }, { name: 'Algeria', code: 'DZ' }, { name: 'American Samoa', code: 'AS' }, { name: 'AndorrA', code: 'AD' }, { name: 'Angola', code: 'AO' }, { name: 'Anguilla', code: 'AI' }, { name: 'Antarctica', code: 'AQ' }, { name: 'Antigua and Barbuda', code: 'AG' }, { name: 'Argentina', code: 'AR' }, { name: 'Armenia', code: 'AM' }, { name: 'Aruba', code: 'AW' }, { name: 'Australia', code: 'AU' }, { name: 'Austria', code: 'AT' }, { name: 'Azerbaijan', code: 'AZ' }, { name: 'Bahamas', code: 'BS' }, { name: 'Bahrain', code: 'BH' }, { name: 'Bangladesh', code: 'BD' }, { name: 'Barbados', code: 'BB' }, { name: 'Belarus', code: 'BY' }, { name: 'Belgium', code: 'BE' }, { name: 'Belize', code: 'BZ' }, { name: 'Benin', code: 'BJ' }, { name: 'Bermuda', code: 'BM' }, { name: 'Bhutan', code: 'BT' }, { name: 'Bolivia', code: 'BO' }, { name: 'Bosnia and Herzegovina', code: 'BA' }, { name: 'Botswana', code: 'BW' }, { name: 'Bouvet Island', code: 'BV' }, { name: 'Brazil', code: 'BR' }, { name: 'British Indian Ocean Territory', code: 'IO' }, { name: 'Brunei Darussalam', code: 'BN' }, { name: 'Bulgaria', code: 'BG' }, { name: 'Burkina Faso', code: 'BF' }, { name: 'Burundi', code: 'BI' }, { name: 'Cambodia', code: 'KH' }, { name: 'Cameroon', code: 'CM' }, { name: 'Canada', code: 'CA' }, { name: 'Cape Verde', code: 'CV' }, { name: 'Cayman Islands', code: 'KY' }, { name: 'Central African Republic', code: 'CF' }, { name: 'Chad', code: 'TD' }, { name: 'Chile', code: 'CL' }, { name: 'China', code: 'CN' }, { name: 'Christmas Island', code: 'CX' }, { name: 'Cocos (Keeling) Islands', code: 'CC' }, { name: 'Colombia', code: 'CO' }, { name: 'Comoros', code: 'KM' }, { name: 'Congo', code: 'CG' }, { name: 'Congo, The Democratic Republic of the', code: 'CD' }, { name: 'Cook Islands', code: 'CK' }, { name: 'Costa Rica', code: 'CR' }, { name: 'Cote D\'Ivoire', code: 'CI' }, { name: 'Croatia', code: 'HR' }, { name: 'Cuba', code: 'CU' }, { name: 'Cyprus', code: 'CY' }, { name: 'Czech Republic', code: 'CZ' }, { name: 'Denmark', code: 'DK' }, { name: 'Djibouti', code: 'DJ' }, { name: 'Dominica', code: 'DM' }, { name: 'Dominican Republic', code: 'DO' }, { name: 'Ecuador', code: 'EC' }, { name: 'Egypt', code: 'EG' }, { name: 'El Salvador', code: 'SV' }, { name: 'Equatorial Guinea', code: 'GQ' }, { name: 'Eritrea', code: 'ER' }, { name: 'Estonia', code: 'EE' }, { name: 'Ethiopia', code: 'ET' }, { name: 'Falkland Islands (Malvinas)', code: 'FK' }, { name: 'Faroe Islands', code: 'FO' }, { name: 'Fiji', code: 'FJ' }, { name: 'Finland', code: 'FI' }, { name: 'France', code: 'FR' }, { name: 'French Guiana', code: 'GF' }, { name: 'French Polynesia', code: 'PF' }, { name: 'French Southern Territories', code: 'TF' }, { name: 'Gabon', code: 'GA' }, { name: 'Gambia', code: 'GM' }, { name: 'Georgia', code: 'GE' }, { name: 'Germany', code: 'DE' }, { name: 'Ghana', code: 'GH' }, { name: 'Gibraltar', code: 'GI' }, { name: 'Greece', code: 'GR' }, { name: 'Greenland', code: 'GL' }, { name: 'Grenada', code: 'GD' }, { name: 'Guadeloupe', code: 'GP' }, { name: 'Guam', code: 'GU' }, { name: 'Guatemala', code: 'GT' }, { name: 'Guernsey', code: 'GG' }, { name: 'Guinea', code: 'GN' }, { name: 'Guinea-Bissau', code: 'GW' }, { name: 'Guyana', code: 'GY' }, { name: 'Haiti', code: 'HT' }, { name: 'Heard Island and Mcdonald Islands', code: 'HM' }, { name: 'Holy See (Vatican City State)', code: 'VA' }, { name: 'Honduras', code: 'HN' }, { name: 'Hong Kong', code: 'HK' }, { name: 'Hungary', code: 'HU' }, { name: 'Iceland', code: 'IS' }, { name: 'India', code: 'IN' }, { name: 'Indonesia', code: 'ID' }, { name: 'Iran, Islamic Republic Of', code: 'IR' }, { name: 'Iraq', code: 'IQ' }, { name: 'Ireland', code: 'IE' }, { name: 'Isle of Man', code: 'IM' }, { name: 'Israel', code: 'IL' }, { name: 'Italy', code: 'IT' }, { name: 'Jamaica', code: 'JM' }, { name: 'Japan', code: 'JP' }, { name: 'Jersey', code: 'JE' }, { name: 'Jordan', code: 'JO' }, { name: 'Kazakhstan', code: 'KZ' }, { name: 'Kenya', code: 'KE' }, { name: 'Kiribati', code: 'KI' }, { name: 'Korea, Democratic People\'S Republic of', code: 'KP' }, { name: 'Korea, Republic of', code: 'KR' }, { name: 'Kuwait', code: 'KW' }, { name: 'Kyrgyzstan', code: 'KG' }, { name: 'Lao People\'S Democratic Republic', code: 'LA' }, { name: 'Latvia', code: 'LV' }, { name: 'Lebanon', code: 'LB' }, { name: 'Lesotho', code: 'LS' }, { name: 'Liberia', code: 'LR' }, { name: 'Libyan Arab Jamahiriya', code: 'LY' }, { name: 'Liechtenstein', code: 'LI' }, { name: 'Lithuania', code: 'LT' }, { name: 'Luxembourg', code: 'LU' }, { name: 'Macao', code: 'MO' }, { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' }, { name: 'Madagascar', code: 'MG' }, { name: 'Malawi', code: 'MW' }, { name: 'Malaysia', code: 'MY' }, { name: 'Maldives', code: 'MV' }, { name: 'Mali', code: 'ML' }, { name: 'Malta', code: 'MT' }, { name: 'Marshall Islands', code: 'MH' }, { name: 'Martinique', code: 'MQ' }, { name: 'Mauritania', code: 'MR' }, { name: 'Mauritius', code: 'MU' }, { name: 'Mayotte', code: 'YT' }, { name: 'Mexico', code: 'MX' }, { name: 'Micronesia, Federated States of', code: 'FM' }, { name: 'Moldova, Republic of', code: 'MD' }, { name: 'Monaco', code: 'MC' }, { name: 'Mongolia', code: 'MN' }, { name: 'Montserrat', code: 'MS' }, { name: 'Morocco', code: 'MA' }, { name: 'Mozambique', code: 'MZ' }, { name: 'Myanmar', code: 'MM' }, { name: 'Namibia', code: 'NA' }, { name: 'Nauru', code: 'NR' }, { name: 'Nepal', code: 'NP' }, { name: 'Netherlands', code: 'NL' }, { name: 'Netherlands Antilles', code: 'AN' }, { name: 'New Caledonia', code: 'NC' }, { name: 'New Zealand', code: 'NZ' }, { name: 'Nicaragua', code: 'NI' }, { name: 'Niger', code: 'NE' }, { name: 'Nigeria', code: 'NG' }, { name: 'Niue', code: 'NU' }, { name: 'Norfolk Island', code: 'NF' }, { name: 'Northern Mariana Islands', code: 'MP' }, { name: 'Norway', code: 'NO' }, { name: 'Oman', code: 'OM' }, { name: 'Pakistan', code: 'PK' }, { name: 'Palau', code: 'PW' }, { name: 'Palestinian Territory, Occupied', code: 'PS' }, { name: 'Panama', code: 'PA' }, { name: 'Papua New Guinea', code: 'PG' }, { name: 'Paraguay', code: 'PY' }, { name: 'Peru', code: 'PE' }, { name: 'Philippines', code: 'PH' }, { name: 'Pitcairn', code: 'PN' }, { name: 'Poland', code: 'PL' }, { name: 'Portugal', code: 'PT' }, { name: 'Puerto Rico', code: 'PR' }, { name: 'Qatar', code: 'QA' }, { name: 'Reunion', code: 'RE' }, { name: 'Romania', code: 'RO' }, { name: 'Russian Federation', code: 'RU' }, { name: 'RWANDA', code: 'RW' }, { name: 'Saint Helena', code: 'SH' }, { name: 'Saint Kitts and Nevis', code: 'KN' }, { name: 'Saint Lucia', code: 'LC' }, { name: 'Saint Pierre and Miquelon', code: 'PM' }, { name: 'Saint Vincent and the Grenadines', code: 'VC' }, { name: 'Samoa', code: 'WS' }, { name: 'San Marino', code: 'SM' }, { name: 'Sao Tome and Principe', code: 'ST' }, { name: 'Saudi Arabia', code: 'SA' }, { name: 'Senegal', code: 'SN' }, { name: 'Serbia and Montenegro', code: 'CS' }, { name: 'Seychelles', code: 'SC' }, { name: 'Sierra Leone', code: 'SL' }, { name: 'Singapore', code: 'SG' }, { name: 'Slovakia', code: 'SK' }, { name: 'Slovenia', code: 'SI' }, { name: 'Solomon Islands', code: 'SB' }, { name: 'Somalia', code: 'SO' }, { name: 'South Africa', code: 'ZA' }, { name: 'South Georgia and the South Sandwich Islands', code: 'GS' }, { name: 'Spain', code: 'ES' }, { name: 'Sri Lanka', code: 'LK' }, { name: 'Sudan', code: 'SD' }, { name: 'Suriname', code: 'SR' }, { name: 'Svalbard and Jan Mayen', code: 'SJ' }, { name: 'Swaziland', code: 'SZ' }, { name: 'Sweden', code: 'SE' }, { name: 'Switzerland', code: 'CH' }, { name: 'Syrian Arab Republic', code: 'SY' }, { name: 'Taiwan, Province of China', code: 'TW' }, { name: 'Tajikistan', code: 'TJ' }, { name: 'Tanzania, United Republic of', code: 'TZ' }, { name: 'Thailand', code: 'TH' }, { name: 'Timor-Leste', code: 'TL' }, { name: 'Togo', code: 'TG' }, { name: 'Tokelau', code: 'TK' }, { name: 'Tonga', code: 'TO' }, { name: 'Trinidad and Tobago', code: 'TT' }, { name: 'Tunisia', code: 'TN' }, { name: 'Turkey', code: 'TR' }, { name: 'Turkmenistan', code: 'TM' }, { name: 'Turks and Caicos Islands', code: 'TC' }, { name: 'Tuvalu', code: 'TV' }, { name: 'Uganda', code: 'UG' }, { name: 'Ukraine', code: 'UA' }, { name: 'United Arab Emirates', code: 'AE' }, { name: 'United Kingdom', code: 'GB' }, { name: 'United States', code: 'US' }, { name: 'United States Minor Outlying Islands', code: 'UM' }, { name: 'Uruguay', code: 'UY' }, { name: 'Uzbekistan', code: 'UZ' }, { name: 'Vanuatu', code: 'VU' }, { name: 'Venezuela', code: 'VE' }, { name: 'Viet Nam', code: 'VN' }, { name: 'Virgin Islands, British', code: 'VG' }, { name: 'Virgin Islands, U.S.', code: 'VI' }, { name: 'Wallis and Futuna', code: 'WF' }, { name: 'Western Sahara', code: 'EH' }, { name: 'Yemen', code: 'YE' }, { name: 'Zambia', code: 'ZM' }, { name: 'Zimbabwe', code: 'ZW' }];

},{}],5:[function(require,module,exports){
"use strict";

module.exports = [{ "name": "Hanna Villarreal", "email": "aptent.taciti@euismodacfermentum.com", "password": "ZKG57ZFJ9HK", "age": 39, "gender": "female" }, { "name": "Hermione Maddox", "email": "Curabitur.massa@eu.ca", "password": "ECI38CRA9MB", "age": 55, "gender": "female" }, { "name": "Vladimir Rodgers", "email": "diam@ettristiquepellentesque.com", "password": "ESK96WFK9OD", "age": 36, "gender": "male" }, { "name": "Kelsie Ewing", "email": "rutrum.non@tellus.co.uk", "password": "KVE70PUO5TB", "age": 47, "gender": "female" }, { "name": "Yetta Higgins", "email": "quis.pede@lectusquis.com", "password": "KAE34UXU2QZ", "age": 43, "gender": "female" }, { "name": "Kadeem Montgomery", "email": "facilisis.facilisis@vitaesodalesat.edu", "password": "POX16RXV9HL", "age": 46, "gender": "male" }, { "name": "Martina Dodson", "email": "Cras.lorem@convallis.org", "password": "TIY32LRA7IU", "age": 41, "gender": "female" }, { "name": "Grady Gonzalez", "email": "posuere.cubilia@Aenean.org", "password": "VKN16PHI8PW", "age": 33, "gender": "male" }, { "name": "Lacey Hutchinson", "email": "Maecenas.iaculis@sedpede.net", "password": "LDN67DTE6CC", "age": 29, "gender": "female" }, { "name": "John Santiago", "email": "eleifend.egestas@convallis.ca", "password": "ZEY52DKW3ZZ", "age": 47, "gender": "male" }, { "name": "Philip Floyd", "email": "Proin@enimnisl.ca", "password": "RZK97GMJ7EK", "age": 63, "gender": "male" }, { "name": "Leslie Chavez", "email": "sociis.natoque.penatibus@porttitor.net", "password": "AKN50QNQ8HK", "age": 68, "gender": "female" }, { "name": "Alisa Allison", "email": "vitae@netusetmalesuada.ca", "password": "XLP00XDR9UW", "age": 60, "gender": "female" }, { "name": "Joshua Clarke", "email": "mi@quamPellentesque.net", "password": "LSN56SXD3SH", "age": 47, "gender": "male" }, { "name": "Victoria Holden", "email": "magna@pedeac.net", "password": "BUS61XTJ6KI", "age": 25, "gender": "female" }, { "name": "Kibo Goodwin", "email": "est@nec.org", "password": "GWM68BLL8LN", "age": 64, "gender": "male" }, { "name": "Marvin Justice", "email": "Integer@Quisquetincidunt.co.uk", "password": "NRQ89UJQ5FH", "age": 56, "gender": "male" }, { "name": "Justin Rowland", "email": "magna.a.neque@anequeNullam.ca", "password": "JKQ17ZVE3TE", "age": 21, "gender": "male" }, { "name": "Tiger Blevins", "email": "enim.sit@felisNulla.net", "password": "MLA03EJG4WI", "age": 34, "gender": "male" }, { "name": "Peter Bray", "email": "nascetur@Nullamutnisi.edu", "password": "BAL79WGC4II", "age": 64, "gender": "male" }];

},{}],6:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var ButtonGroup = _require.ButtonGroup;
var Container = _require.Container;
var Dropdown = _require.Dropdown;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

var DROPDOWN_OPTIONS = [{ label: 'Action' }, { label: 'Another action' }, { label: 'Something else here' }, { type: 'divider' }, { type: 'header', label: 'Dropdown header' }, { label: 'Separated link' }];

var BUTTON_SIZES = [{ label: 'Large', value: 'lg' }, { label: 'Default', value: null }, { label: 'Small', value: 'sm' }, { label: 'Extra Small', value: 'xs' }];

var BUTTON_VARIANTS = [{ label: 'Primary', value: 'primary' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Danger', value: 'danger' }];

var BUTTON_DEFAULT_VARIANTS = [{ label: 'Default Primary', value: 'default-primary' }, { label: 'Default Success', value: 'default-success' }, { label: 'Default Warning', value: 'default-warning' }, { label: 'Default Danger', value: 'default-danger' }];

var BUTTON_HOLLOW_VARIANTS = [{ label: 'Hollow Primary', value: 'hollow-primary' }, { label: 'Hollow Success', value: 'hollow-success' }, { label: 'Hollow Warning', value: 'hollow-warning' }, { label: 'Hollow Danger', value: 'hollow-danger' }];

var BUTTON_LINK_VARIANTS = [{ label: 'Link', value: 'link' }, { label: 'Link Text', value: 'link-text' }, { label: 'Link Cancel', value: 'link-cancel' }, { label: 'Link Delete', value: 'link-delete' }];

var Buttons = React.createClass({
	displayName: 'VIEW_Buttons',
	getInitialState: function getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown: function toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},
	renderButtonSizes: function renderButtonSizes() {
		return BUTTON_SIZES.map(function (size) {
			return React.createElement(
				'div',
				{ key: size.value, className: 'code-example__example-element--inline' },
				React.createElement(
					Button,
					{ size: size.value },
					size.label,
					' Button'
				)
			);
		});
	},
	renderButtonVariants: function renderButtonVariants(variantType) {
		return variantType.map(function (type) {
			return React.createElement(
				'div',
				{ key: type.value, className: 'code-example__example-element--inline' },
				React.createElement(
					Button,
					{ type: type.value },
					type.label
				)
			);
		});
	},

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Buttons'
			),
			React.createElement(
				'h2',
				null,
				'Sizes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					this.renderButtonSizes()
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button size="lg">Large Button</Button>\n\t\t\t\t\t\t\t<Button>Default Button</Button>\n\t\t\t\t\t\t\t<Button size="sm">Small Button</Button>\n\t\t\t\t\t\t\t<Button size="xs">Extra Small Button</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Variants'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Fill Buttons'
					),
					this.renderButtonVariants(BUTTON_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="primary">Primary</Button>\n\t\t\t\t\t\t\t<Button type="success">Success</Button>\n\t\t\t\t\t\t\t<Button type="warning">Warning</Button>\n\t\t\t\t\t\t\t<Button type="danger">Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Default Button Alternatives'
					),
					this.renderButtonVariants(BUTTON_DEFAULT_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="default-primary">Default Primary</Button>\n\t\t\t\t\t\t\t<Button type="default-success">Default Success</Button>\n\t\t\t\t\t\t\t<Button type="default-warning">Default Warning</Button>\n\t\t\t\t\t\t\t<Button type="default-danger">Default Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Hollow Button Alternatives'
					),
					this.renderButtonVariants(BUTTON_HOLLOW_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="hollow-primary">Hollow Primary</Button>\n\t\t\t\t\t\t\t<Button type="hollow-success">Hollow Success</Button>\n\t\t\t\t\t\t\t<Button type="hollow-warning">Hollow Warning</Button>\n\t\t\t\t\t\t\t<Button type="hollow-danger">Hollow Danger</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Link Style Buttons'
					),
					this.renderButtonVariants(BUTTON_LINK_VARIANTS)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="link">Link</Button>\n\t\t\t\t\t\t\t<Button type="link-text">Link Text</Button>\n\t\t\t\t\t\t\t<Button type="link-cancel">Link Cancel</Button>\n\t\t\t\t\t\t\t<Button type="link-delete">Link Delete</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'block'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Turns the button into a block-level element which will fill the width of its container'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'href'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'When provided the component will render as an ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<a>'
								),
								' instead of ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<button>'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'component'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'element'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'When provided, ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<Button>'
								),
								' will render the passed in component with the proper styles instead of creating its own. This is useful when integrating with React Router\'s ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<Link>'
								),
								' or using your own custom component'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'size'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Size of the button - one of: ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'lg'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'sm'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'xs'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'submit'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Applies the ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'submit'
								),
								' attribute to the button for use in forms'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-warning'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-danger'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-text'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-cancel'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'link-delete'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Button Groups'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						ButtonGroup,
						null,
						React.createElement(
							Button,
							{ type: 'default' },
							'Left'
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Middle'
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Right'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<ButtonGroup>\n\t\t\t\t\t\t\t\t<Button type="default">Left</Button>\n\t\t\t\t\t\t\t\t<Button type="default">Middle</Button>\n\t\t\t\t\t\t\t\t<Button type="default">Right</Button>\n\t\t\t\t\t\t\t</ButtonGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. Must use Elemental ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<Button />'
								),
								' components for correct styling'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Dropdown'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Dropdown, { items: DROPDOWN_OPTIONS, buttonLabel: 'Default Trigger', className: 'reallyLongCustomClassNameThatStandsOut' })
				),
				React.createElement(
					ExampleSource,
					null,
					'<Dropdown items={[...]} buttonLabel="Default Trigger" />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Custom Trigger'
					),
					React.createElement(
						Dropdown,
						{ items: DROPDOWN_OPTIONS, className: 'reallyLongCustomClassNameThatStandsOut' },
						React.createElement(
							'h3',
							{ style: { marginBottom: 0 } },
							'I am an H3!'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Dropdown items={[...]}>\n\t\t\t\t\t\t\t\t<h3>I am an H3!</h3>\n\t\t\t\t\t\t\t</Dropdown>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'alignRight'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The dropdown menu is aligned left by default, apply this attribute to right align the dropdown menu'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonHasDisclosureArrow'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'true'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Display a disclosure arrow along with the label of the button. Ignore if a custom trigger is employed'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonLabel'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Whatever action the button represents'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'buttonType'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'See above section on button types'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'element'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'A single child, cloned and used as the dropdown\'s trigger element'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'isOpen'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The dropdown menu is controlled by user input. Use this if you need to manually toggle the open state of the dropdown menu'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'items'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'array'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The list of items to display in the menu formatted'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onSelect'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'function() {}'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The function that is called on each menu item when clicked'
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Buttons;

},{"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],7:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');
var classNames = require('classnames');

var ExampleSource = require('../components/ExampleSource');

var _require = require('elemental');

var Container = _require.Container;
var Table = _require.Table;

var USERS = require('../data/users');
var TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

var CSSExamples = React.createClass({
	displayName: 'CSSExamples',

	getInitialState: function getInitialState() {
		return {
			allChecked: false,
			selectedRows: {}
		};
	},

	toggleAllRows: function toggleAllRows() {
		var selectedRows = {};

		if (!this.state.allChecked) {
			for (var i = 0; i < USERS.length; i++) {
				selectedRows[i] = true;
			}
		}

		this.setState({
			selectedRows: selectedRows,
			allChecked: !this.state.allChecked
		});
	},

	handleChange: function handleChange(e) {
		var selectedRows = this.state.selectedRows;
		if (e.target.value in selectedRows) {
			delete selectedRows[e.target.value];
		} else {
			selectedRows[e.target.value] = true;
		}
		this.setState({
			selectedRows: selectedRows
		});
	},
	render: function render() {
		var self = this;

		var tableHeaderCols = TABLE_HEADERS.map(function (thead, i) {
			var row = !i ? React.createElement(
				'th',
				{ key: 'header-' + i },
				React.createElement(
					'label',
					{ title: 'Toggle all users' },
					React.createElement('input', { type: 'checkbox', onChange: self.toggleAllRows })
				)
			) : React.createElement(
				'th',
				{ key: 'header-' + i },
				thead
			);
			return row;
		});

		var tableRows = USERS.map(function (user, i) {
			var checked = (i in self.state.selectedRows);
			var rowClass = classNames({
				'row-selected': checked
			});

			return React.createElement(
				'tr',
				{ key: 'row-' + i, className: rowClass },
				React.createElement(
					'td',
					null,
					React.createElement(
						'label',
						{ className: 'table-checkbox-label' },
						React.createElement('input', { id: 'checkbox-' + i, value: i, onChange: self.handleChange, checked: checked, type: 'checkbox', name: 'users' })
					)
				),
				React.createElement(
					'td',
					null,
					React.createElement(
						'a',
						{ href: 'javascript:;' },
						user.name
					)
				),
				React.createElement(
					'td',
					null,
					user.age
				),
				React.createElement(
					'td',
					null,
					user.gender.substr(0, 1).toUpperCase()
				)
			);
		});

		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'CSS'
			),
			React.createElement(
				'h2',
				null,
				'Typography'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'h1',
						null,
						'h.1 Elemental heading'
					),
					React.createElement(
						'h2',
						null,
						'h.2 Elemental heading'
					),
					React.createElement(
						'h3',
						null,
						'h.3 Elemental heading'
					),
					React.createElement(
						'h4',
						null,
						'h.4 Elemental heading'
					),
					React.createElement(
						'h5',
						null,
						'h.5 Elemental heading'
					),
					React.createElement(
						'h6',
						null,
						'h.6 Elemental heading'
					),
					React.createElement('hr', null),
					React.createElement(
						'div',
						{ className: 'lead' },
						'This is a page lead, it introduces the proceeding content.'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<h1>h.1 Elemental heading</h1>\n\t\t\t\t\t\t\t<h2>h.2 Elemental heading</h2>\n\t\t\t\t\t\t\t<h3>h.3 Elemental heading</h3>\n\t\t\t\t\t\t\t<h4>h.4 Elemental heading</h4>\n\t\t\t\t\t\t\t<h5>h.5 Elemental heading</h5>\n\t\t\t\t\t\t\t<h6>h.6 Elemental heading</h6>\n\t\t\t\t\t\t\t<hr />\n\t\t\t\t\t\t\t<div className="lead">This is a page lead, it introduces the proceeding content.</div>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Tables'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Table,
						null,
						React.createElement(
							'colgroup',
							null,
							React.createElement('col', { width: '50' }),
							React.createElement('col', { width: '' }),
							React.createElement('col', { width: '10%' }),
							React.createElement('col', { width: '10%' })
						),
						React.createElement(
							'thead',
							null,
							React.createElement(
								'tr',
								null,
								tableHeaderCols
							)
						),
						React.createElement(
							'tbody',
							null,
							tableRows
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Table>\n\t\t\t\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t\t\t\t<col width="50" />\n\t\t\t\t\t\t\t\t\t<col width="" />\n\t\t\t\t\t\t\t\t\t<col width="10%" />\n\t\t\t\t\t\t\t\t\t<col width="10%" />\n\t\t\t\t\t\t\t\t</colgroup>\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t\t\t<th>User</th>\n\t\t\t\t\t\t\t\t\t\t<th>Age</th>\n\t\t\t\t\t\t\t\t\t\t<th>Gender</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t{...}\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox" />\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t\t<a href="javascript:;">Hanna Villarreal</a>\n\t\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t\t\t<td>39</td>\n\t\t\t\t\t\t\t\t\t\t<td>F</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t{...}\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</Table>\n\t\t\t\t\t\t'
				)
			)
		);
	}
});

module.exports = CSSExamples;

},{"../components/ExampleSource":3,"../data/users":5,"classnames":1,"elemental":undefined,"react":undefined}],8:[function(require,module,exports){
/* eslint no-alert: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var Checkbox = _require.Checkbox;
var Container = _require.Container;
var EmailInputGroup = _require.EmailInputGroup;
var FileDragAndDrop = _require.FileDragAndDrop;
var FileUpload = _require.FileUpload;
var Form = _require.Form;
var FormField = _require.FormField;
var FormIconField = _require.FormIconField;
var FormInput = _require.FormInput;
var FormNote = _require.FormNote;
var FormRow = _require.FormRow;
var FormSelect = _require.FormSelect;
var InputGroup = _require.InputGroup;
var PasswordInputGroup = _require.PasswordInputGroup;
var Radio = _require.Radio;
var RadioGroup = _require.RadioGroup;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

var controlOptions = [{ label: 'Caramel', value: 'caramel' }, { label: 'Chocolate', value: 'chocolate' }, { label: 'Strawberry', value: 'strawberry' }, { label: 'Vanilla', value: 'vanilla' }];
var COUNTRIES = require('../data/countries');
var COLOR_VARIANTS = [{ label: 'Default', icon: 'star', value: 'default' }, { label: 'Primary', icon: 'info', value: 'primary' }, { label: 'Success', icon: 'check', value: 'success' }, { label: 'Warning', icon: 'alert', value: 'warning' }, { label: 'Danger', icon: 'stop', value: 'danger' }];

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	getInitialState: function getInitialState() {
		return {
			'inputEmail': '',
			'inputPassword': '',
			'inputConfirm': ''
		};
	},

	onDrop: function onDrop(files) {
		var outputFileInfo = files.map(function (file) {
			return '"' + file.name + '" (' + Math.round(file.size / 1024) + 'Kb)';
		});
		alert('Received files: \n' + outputFileInfo.join('\n'));
		this.setState({
			files: files
		});
	},

	handleSearch: function handleSearch() {
		var self = this;
		self.setState({ searching: true });

		setTimeout(function () {
			self.setState({ searching: false });
		}, 1000);
	},

	render: function render() {
		var self = this;

		// handle form input and validation
		function updateSelect(option) {
			self.setState({ inputSelect: option });
		}
		function updateInlineRadios(option) {
			self.setState({ inlineRadioGroup: option });
		}
		function updateEmail(e) {
			self.setState({ inputEmail: e.target.value });
		}
		function updatePassword(e) {
			self.setState({ inputPassword: e.target.value });
		}
		function updateConfirm(e) {
			self.setState({ inputConfirm: e.target.value });
		}
		function validateConfirm(value) {
			return value === self.state.inputPassword;
		}

		// elements
		var countryOptions = COUNTRIES.map(function (country) {
			return { label: country.name, value: country.code };
		});

		// Icon Loops

		var iconContextVariantsColor = COLOR_VARIANTS.map(function (color) {
			return React.createElement(
				FormIconField,
				{ key: color.value, width: 'one-fifth', iconPosition: 'left', iconKey: color.icon, iconColor: color.value },
				React.createElement(FormInput, { placeholder: color.label, name: 'icon-form-context-variants-color' + color.value })
			);
		});

		var iconContextVariantsFill = COLOR_VARIANTS.map(function (color) {
			return React.createElement(
				FormIconField,
				{ key: color.value, width: 'one-fifth', iconPosition: 'left', iconKey: color.icon, iconFill: color.value },
				React.createElement(FormInput, { placeholder: color.label, name: 'icon-form-context-variants-color' + color.value })
			);
		});

		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Forms'
			),
			React.createElement(
				'h2',
				null,
				'Basic Example'
			),
			React.createElement(
				'p',
				null,
				'Individual form controls automatically receive some global styling. All textual ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormInput>'
				),
				', and ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormSelect>'
				),
				' elements with are set to ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'width: 100%;'
				),
				' by default. Wrap controls in ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormField>'
				),
				' for optimum spacing.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						null,
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'basic-form-input-email' },
							React.createElement(FormInput, { autofocus: true, type: 'email', placeholder: 'Enter email', name: 'basic-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'basic-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'basic-form-input-password' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							Button,
							{ type: 'default' },
							'Submit'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form>\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="basic-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput autofocus type="email" placeholder="Enter email" name="basic-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="basic-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="basic-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Horizontal Form'
			),
			React.createElement(
				'p',
				null,
				'Adding the type ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'horizontal'
				),
				' to your ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<Form />'
				),
				' changes the ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'FormField'
				),
				' component to behave like a row. The label width can be updated from inside the LESS variables file where it\'s defined as ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'@form-label-width'
				),
				'. This only applies to forms within viewports that are at least 768px wide.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						{ type: 'horizontal' },
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'horizontal-form-input-email' },
							React.createElement(FormInput, { type: 'email', placeholder: 'Enter email', name: 'horizontal-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'horizontal-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'horizontal-form-input-password' })
						),
						React.createElement(
							FormField,
							{ offsetAbsentLabel: true },
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							FormField,
							{ offsetAbsentLabel: true },
							React.createElement(
								Button,
								{ type: 'default' },
								'Submit'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form type="horizontal">\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="horizontal-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="horizontal-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField offsetAbsentLabel>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField offsetAbsentLabel>\n\t\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Inline Form'
			),
			React.createElement(
				'p',
				null,
				'Add the type ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'inline'
				),
				' to your ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<Form />'
				),
				' for left-aligned and inline-block controls. This only applies to forms within viewports that are at least 768px wide.'
			),
			React.createElement(
				'p',
				null,
				'Note: you should always use labels to improve accessibility - they are only visible to screen readers. Form labels within viewports that are below 768px wide will be rendered regularly to improve usability.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Form,
						{ type: 'inline' },
						React.createElement(
							FormField,
							{ label: 'Email address', htmlFor: 'inline-form-input-email' },
							React.createElement(FormInput, { type: 'email', placeholder: 'Enter email', name: 'inline-form-input-email' })
						),
						React.createElement(
							FormField,
							{ label: 'Password', htmlFor: 'inline-form-input-password' },
							React.createElement(FormInput, { type: 'password', placeholder: 'Password', name: 'inline-form-input-password' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(Checkbox, { label: 'Check it' })
						),
						React.createElement(
							FormField,
							null,
							React.createElement(
								Button,
								{ type: 'default' },
								'Submit'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Form type="inline">\n\t\t\t\t\t\t\t\t<FormField label="Email address" htmlFor="inline-form-input-email">\n\t\t\t\t\t\t\t\t\t<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField label="Password" htmlFor="inline-form-input-password">\n\t\t\t\t\t\t\t\t\t<FormInput type="password" placeholder="Password" name="inline-form-input-password" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check it" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t\t<Button type="default">Submit</Button>\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</Form>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Input Groups'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Contiguous form elements'
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Button'
							)
						)
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							{ type: 'primary' },
							React.createElement(
								Button,
								null,
								React.createElement('span', { className: 'octicon octicon-pencil' })
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Button</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section type="primary">\n\t\t\t\t\t\t\t\t\t<Button><span className="octicon octicon-pencil" /></Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Separate when required'
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Button'
							)
						)
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								React.createElement('span', { className: 'octicon octicon-pencil' })
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Button</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">\n\t\t\t\t\t\t\t\t\t\t<span className="octicon octicon-pencil" />\n\t\t\t\t\t\t\t\t\t</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'More sophisticated formations'
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Alpha'
							)
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Omega'
							)
						)
					),
					React.createElement(
						InputGroup,
						null,
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field 1' })
						),
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(FormInput, { type: 'text', placeholder: 'Input group field 2' })
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Primary'
							)
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								null,
								'Default'
							)
						)
					),
					React.createElement(
						InputGroup,
						{ contiguous: true },
						React.createElement(
							InputGroup.Section,
							{ grow: true },
							React.createElement(
								FormIconField,
								{ width: 'one-half', iconPosition: 'left', iconColor: 'default', iconKey: 'mail' },
								React.createElement(FormInput, { placeholder: 'Email address', name: 'icon-alignment-left' })
							)
						),
						React.createElement(
							InputGroup.Section,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Send'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Alpha</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Omega</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormInput type="text" placeholder="Input group field" />\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Primary</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button>Default</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t\t<InputGroup contiguous>\n\t\t\t\t\t\t\t\t<InputGroup.Section grow>\n\t\t\t\t\t\t\t\t\t<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="mail">\n\t\t\t\t\t\t\t\t\t\t<FormInput placeholder="Email address" name="icon-alignment-left" />\n\t\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t\t<InputGroup.Section>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Send</Button>\n\t\t\t\t\t\t\t\t</InputGroup.Section>\n\t\t\t\t\t\t\t</InputGroup>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Sizes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input', htmlFor: 'supported-controls-input' },
						React.createElement(FormInput, { placeholder: 'Input', name: 'supported-controls-input' })
					),
					React.createElement(
						FormField,
						{ label: 'Large Input', htmlFor: 'supported-controls-input-lg' },
						React.createElement(FormInput, { placeholder: 'Large', name: 'supported-controls-input-lg', size: 'lg' })
					),
					React.createElement(
						FormField,
						{ label: 'Small Input', htmlFor: 'supported-controls-input-sm' },
						React.createElement(FormInput, { placeholder: 'Small', name: 'supported-controls-input-sm', size: 'sm' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input" htmlFor="supported-controls-input">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Input" name="supported-controls-input" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Large Input" htmlFor="supported-controls-input-lg">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Small Input" htmlFor="supported-controls-input-sm">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Supported Controls'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormInput, { placeholder: 'Input' })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormInput placeholder="Input" />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormInput, { placeholder: 'Textarea', multiline: true })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormInput placeholder="Textarea" multiline />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(FormSelect, { options: controlOptions, firstOption: 'Select', onChange: updateSelect })
				),
				React.createElement(
					ExampleSource,
					null,
					'<FormSelect options={[...]} firstOption="Select" onChange={this.handleSelect} />'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Checkboxes' },
						React.createElement(Checkbox, { label: 'Check me out' }),
						React.createElement(Checkbox, { label: 'Check me out' })
					),
					React.createElement(
						FormField,
						{ label: 'Radios' },
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me' }),
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me' })
					),
					React.createElement(
						FormField,
						{ label: 'Inline Checkboxes' },
						React.createElement(
							'div',
							{ className: 'inline-controls' },
							React.createElement(Checkbox, { label: 'Check me out' }),
							React.createElement(Checkbox, { label: 'Check me out' })
						)
					),
					React.createElement(
						FormField,
						{ label: 'Inline Radios' },
						React.createElement(
							'div',
							{ className: 'inline-controls' },
							React.createElement(Radio, { name: 'inline_radios', label: 'Pick me' }),
							React.createElement(Radio, { name: 'inline_radios', label: 'Pick me' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Checkboxes">\n\t\t\t\t\t\t\t\t<Checkbox label="Check me out" />\n\t\t\t\t\t\t\t\t<Checkbox label="I\'m disabled" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Radios">\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Inline Checkboxes">\n\t\t\t\t\t\t\t\t<div className="inline-controls">\n\t\t\t\t\t\t\t\t\t<Checkbox label="Check me out" />\n\t\t\t\t\t\t\t\t\t<Checkbox label="I\'m disabled" disabled />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Inline Radios">\n\t\t\t\t\t\t\t\t<div className="inline-controls">\n\t\t\t\t\t\t\t\t\t<Radio name="inline_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t\t<Radio name="inline_radios" label="Pick me" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Disabled State'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input', htmlFor: 'supported-controls-input-disabled' },
						React.createElement(FormInput, { placeholder: 'Input', name: 'supported-controls-input-disabled', disabled: true })
					),
					React.createElement(
						FormField,
						{ label: 'Textarea', htmlFor: 'supported-controls-textarea' },
						React.createElement(FormInput, { placeholder: 'Textarea', name: 'supported-controls-textarea-disabled', disabled: true, multiline: true })
					),
					React.createElement(FormSelect, { label: 'Select', options: controlOptions, onChange: updateSelect, htmlFor: 'supported-conrols-select-disabled', firstOption: 'Select', disabled: true }),
					React.createElement(
						FormField,
						{ label: 'Checkboxes' },
						React.createElement(Checkbox, { label: 'Check me out', disabled: true })
					),
					React.createElement(
						FormField,
						{ label: 'Radios' },
						React.createElement(Radio, { name: 'default_radios', label: 'Pick me', disabled: true })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input" htmlFor="supported-controls-input-disabled">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Input" name="supported-controls-input-disabled" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Textarea" htmlFor="supported-controls-textarea">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Textarea" name="supported-controls-textarea-disabled" disabled multiline />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormSelect label="Select" options={controlOptions} onChange={updateSelect} htmlFor="supported-conrols-select-disabled" firstOption="Select" disabled />\n\t\t\t\t\t\t\t<FormField label="Checkboxes">\n\t\t\t\t\t\t\t\t<Checkbox label="Check me out" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField label="Radios">\n\t\t\t\t\t\t\t\t<Radio name="default_radios" label="Pick me" disabled />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Notes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormField,
						{ label: 'Input with note' },
						React.createElement(FormInput, null),
						React.createElement(
							FormNote,
							null,
							'A note to help the user understand its associated field; may extend beyond one line.'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormField label="Input with note">\n\t\t\t\t\t\t\t\t<FormInput />\n\t\t\t\t\t\t\t\t<FormNote>A note to help the user understand its associated field; may extend beyond one line.</FormNote>\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Complex Forms'
			),
			React.createElement(
				'p',
				null,
				'Wrap any group of ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormField>'
				),
				' in the ',
				React.createElement(
					'code',
					{ className: 'inline-code' },
					'<FormRow>'
				),
				' component to easily set desired widths.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'Credit Card Number', htmlFor: 'credit-card-number' },
							React.createElement(FormInput, { pattern: '[0-9]*', placeholder: 'Card Number', name: 'credit-card-number' })
						),
						React.createElement(
							FormField,
							{ width: 'one-quarter', label: 'Expiration', htmlFor: 'credit-card-expiration' },
							React.createElement(FormInput, { placeholder: 'MM/YYYY', name: 'credit-card-expiration' })
						),
						React.createElement(
							FormField,
							{ width: 'one-quarter', label: 'Security Code (CCV)', htmlFor: 'credit-card-security' },
							React.createElement(FormInput, { pattern: '[0-9]*', placeholder: '123', name: 'credit-card-security' })
						)
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'First Name', htmlFor: 'first-name' },
							React.createElement(FormInput, { placeholder: 'First Name', name: 'first-name' })
						),
						React.createElement(
							FormField,
							{ width: 'one-half', label: 'Last Name', htmlFor: 'last-name' },
							React.createElement(FormInput, { placeholder: 'Last Name', name: 'last-name' })
						)
					),
					React.createElement(
						FormField,
						{ label: 'Billing Address', htmlFor: 'address-street1' },
						React.createElement(FormInput, { placeholder: 'Address Line 1', name: 'address-street1' })
					),
					React.createElement(
						FormField,
						null,
						React.createElement(FormInput, { placeholder: 'Address Line 2', name: 'address-street2' })
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormField,
							{ width: 'two-thirds' },
							React.createElement(FormInput, { placeholder: 'City', name: 'city' })
						),
						React.createElement(
							FormField,
							{ width: 'one-third' },
							React.createElement(FormInput, { placeholder: 'State', name: 'state' })
						),
						React.createElement(
							FormField,
							{ width: 'one-third' },
							React.createElement(FormInput, { width: 'one-third', placeholder: 'Post Code', name: 'city' })
						),
						React.createElement(
							FormField,
							{ width: 'two-thirds' },
							React.createElement(FormSelect, { options: countryOptions, firstOption: 'Country', onChange: updateSelect })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">\n\t\t\t\t\t\t\t\t\t<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">\n\t\t\t\t\t\t\t\t\t<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="First Name" htmlFor="first-name">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="First Name" name="first-name" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-half" label="Last Name" htmlFor="last-name">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Last Name" name="last-name" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t\t<FormField label="Billing Address" htmlFor="address-street1">\n\t\t\t\t\t\t\t\t<FormInput placeholder="Address Line 1" name="address-street1" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormField>\n\t\t\t\t\t\t\t\t<FormInput placeholder="Address Line 2" name="address-street2" />\n\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormField width="two-thirds">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="City" name="city" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-third">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="State" name="state" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="one-third">\n\t\t\t\t\t\t\t\t\t<FormInput width="one-third" placeholder="Post Code" name="city" />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t\t<FormField width="two-thirds">\n\t\t\t\t\t\t\t\t\t<FormSelect options={countryOptions} firstOption="Country" onChange={updateSelect} />\n\t\t\t\t\t\t\t\t</FormField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'label'
							),
							React.createElement(
								'td',
								null,
								'string'
							),
							React.createElement(
								'td',
								null,
								'\'\''
							),
							React.createElement('td', { className: 'usage-table__description' })
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'offsetAbsentLabel'
							),
							React.createElement(
								'td',
								null,
								'bool'
							),
							React.createElement(
								'td',
								null,
								'false'
							),
							React.createElement('td', { className: 'usage-table__description' })
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'width'
							),
							React.createElement(
								'td',
								null,
								'string'
							),
							React.createElement(
								'td',
								null,
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Declare a width for your field; must be used inside a ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'<FormRow>'
								),
								' component. Possible options:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-half'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-quarters'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-quarter'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-quarters'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-third'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-thirds'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'four-sixths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-fifth'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'two-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'three-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'four-fifths'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'one-sixth'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code inline-code--list-item' },
									'five-sixths'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Icons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses the wonderful ',
				React.createElement(
					'a',
					{ href: 'https://octicons.github.com/', target: '_blank' },
					'Octicons Suite from GitHub'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Alignment'
					),
					React.createElement(
						FormRow,
						null,
						React.createElement(
							FormIconField,
							{ width: 'one-half', iconPosition: 'left', iconColor: 'default', iconKey: 'star' },
							React.createElement(FormInput, { placeholder: 'Left Aligned', name: 'icon-alignment-left' })
						),
						React.createElement(
							FormIconField,
							{ width: 'one-half', iconPosition: 'right', iconColor: 'default', iconKey: 'star' },
							React.createElement(FormInput, { placeholder: 'Right Aligned', name: 'icon-alignment-right' })
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-half" iconPosition="left" iconColor="default" iconKey="star">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Left Aligned" name="icon-alignment-left" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-half" iconPosition="right" iconColor="default" iconKey="star">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Right Aligned" name="icon-alignment-right" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Context Variants: Color'
					),
					React.createElement(
						FormRow,
						null,
						iconContextVariantsColor
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconColor="default">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Default" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconColor="primary">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Primary" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconColor="success">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Success" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconColor="warning">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Warning" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconColor="danger">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Danger" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Context Variants: Fill'
					),
					React.createElement(
						FormRow,
						null,
						iconContextVariantsFill
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormRow>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="star" iconFill="default">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Default" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="info" iconFill="primary">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Primary" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="check" iconFill="success">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Success" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="alert" iconFill="warning">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Warning" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t\t<FormIconField width="one-fifth" iconPosition="left" iconKey="stop" iconFill="danger">\n\t\t\t\t\t\t\t\t\t<FormInput placeholder="Danger" />\n\t\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t\t</FormRow>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Loading Indicator'
					),
					React.createElement(
						FormIconField,
						{ iconPosition: 'right', iconKey: 'search', iconColor: 'default', iconIsLoading: this.state.searching },
						React.createElement(FormInput, { onChange: this.handleSearch, type: 'search', placeholder: 'Search...', name: 'icon-form-search' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<FormIconField iconPosition="right" iconKey="search" iconColor="default" iconIsLoading={this.state.searching}>\n\t\t\t\t\t\t\t\t<FormInput onChange={this.handleSearch} type="search" placeholder="Search..." name="icon-form-search" />\n\t\t\t\t\t\t\t</FormIconField>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Validation'
			),
			React.createElement(
				'form',
				null,
				React.createElement(RadioGroup, { label: 'Radios', value: this.state.inlineRadioGroup, onChange: updateInlineRadios, options: controlOptions, name: 'inlineRadioGroup', required: true, inline: true }),
				React.createElement(FormSelect, { label: 'Select', value: this.state.inputSelect, onChange: updateSelect, options: controlOptions, htmlFor: 'inputSelect', required: true, prependEmptyOption: true }),
				React.createElement(EmailInputGroup, { label: 'Email', value: this.state.inputEmail, onChange: updateEmail, required: true }),
				React.createElement(PasswordInputGroup, { label: 'Password', value: this.state.inputPassword, onChange: updatePassword, required: true }),
				React.createElement(PasswordInputGroup, { label: 'Confirm', value: this.state.inputConfirm, onChange: updateConfirm, required: true, validatePassword: validateConfirm, invalidMessage: 'Password confirmation doesn\'t match password' })
			),
			React.createElement(
				'h2',
				null,
				'File Upload'
			),
			React.createElement(
				Form,
				{ type: 'horizontal' },
				React.createElement(
					FormField,
					{ label: 'Image' },
					React.createElement(FileUpload, { buttonLabelInitial: 'Upload Image', buttonLabelChange: 'Change Image', accept: 'image/jpg, image/gif, image/png' })
				),
				React.createElement(
					FormField,
					{ label: 'Images' },
					React.createElement(FileDragAndDrop, { files: this.state.files, onDrop: this.onDrop })
				)
			)
		);
	}
});

module.exports = Forms;

},{"../components/ExampleSource":3,"../data/countries":4,"elemental":undefined,"react":undefined}],9:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Glyph = _require.Glyph;
var Container = _require.Container;
var Table = _require.Table;
var Col = _require.Col;
var Row = _require.Row;
var Card = _require.Card;
var Button = _require.Button;

var ExampleSource = require('../components/ExampleSource');

var GLYPH_COLOR_TYPES = ['danger', 'default', 'muted', 'primary', 'success', 'warning'];

var Glyphs = React.createClass({
	displayName: 'VIEW_Glyphs',
	renderGlyphColorTypes: function renderGlyphColorTypes() {
		return GLYPH_COLOR_TYPES.map(function (color) {
			return React.createElement(
				'span',
				{ key: 'color_' + color },
				React.createElement(
					'code',
					{ className: 'inline-code' },
					color
				),
				' '
			);
		});
	},
	renderGlyphColors: function renderGlyphColors(icon) {
		return GLYPH_COLOR_TYPES.map(function (color) {
			return React.createElement(
				'div',
				{ key: color + icon, className: 'code-example__example-element--inline' },
				React.createElement(Glyph, { icon: icon, type: color }),
				' ',
				color
			);
		});
	},
	renderGlyphColorsExample: function renderGlyphColorsExample(icon) {
		var stringRep = '';
		GLYPH_COLOR_TYPES.forEach(function (color) {
			stringRep += '<Glyph icon=\'' + icon + '\' type=\'' + color + '\' />\n';
		});
		return stringRep;
	},
	renderGlyphGrid: function renderGlyphGrid(perRow) {
		var rows = [];
		var colSize = '1/' + perRow;

		var row = [];
		Glyph.names.forEach(function (glyph, index) {
			if (index % perRow === 0) {
				rows.push(row);
				row = [];
			}
			row.push(glyph);
		});

		return rows.map(function (row, index) {
			var cols = row.map(function (glyph) {
				return React.createElement(
					Col,
					{ key: 'col_' + glyph, sm: colSize },
					React.createElement(
						Card,
						{ className: 'code-example--glyph__icon' },
						React.createElement(Glyph, { key: glyph, icon: glyph }),
						React.createElement(
							'div',
							{ className: 'code-example--glyph__icon-name' },
							glyph
						)
					)
				);
			});
			return React.createElement(
				Row,
				{ key: 'row_' + index },
				cols
			);
		});
	},
	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Glyphs'
			),
			React.createElement(
				'h2',
				null,
				'Basic Example'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Glyph, { icon: 'thumbsup' })
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Glyph icon="thumbsup" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'icon'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. Icon name from Octicons.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								this.renderGlyphColorTypes()
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Icons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses the wonderful ',
				React.createElement(
					'a',
					{ href: 'https://octicons.github.com/', target: '_blank' },
					'Octicons Suite from GitHub'
				)
			),
			this.renderGlyphGrid(6),
			React.createElement(
				'h2',
				null,
				'Colors'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Glyph colors can be customized.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Glyph colors'
					),
					this.renderGlyphColors('heart')
				),
				React.createElement(
					ExampleSource,
					null,
					this.renderGlyphColorsExample('heart')
				)
			),
			React.createElement(
				'h2',
				null,
				'Buttons'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Glyphs work well with ',
				React.createElement(
					'a',
					{ href: '/buttons' },
					'Buttons'
				),
				'.'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Buttons'
					),
					React.createElement(
						Button,
						{ type: 'primary' },
						React.createElement(Glyph, { icon: 'beaker' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'danger' },
						React.createElement(Glyph, { icon: 'flame' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'success' },
						React.createElement(Glyph, { icon: 'squirrel' })
					),
					' ',
					React.createElement(
						Button,
						{ type: 'warning' },
						React.createElement(Glyph, { icon: 'beaker' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="primary"><Glyph icon="beaker" /></Button>\n\t\t\t\t\t\t\t<Button type="danger"><Glyph icon="flame" /></Button>\n\t\t\t\t\t\t\t<Button type="success"><Glyph icon="squirrel" /></Button>\n\t\t\t\t\t\t\t<Button type="warning"><Glyph icon="beaker" /></Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Link Buttons'
					),
					React.createElement(
						Button,
						{ type: 'link' },
						React.createElement(Glyph, { icon: 'bug' })
					),
					React.createElement(
						Button,
						{ type: 'link' },
						React.createElement(Glyph, { icon: 'squirrel', type: 'danger' })
					),
					React.createElement(
						Button,
						{ type: 'link-delete' },
						React.createElement(Glyph, { icon: 'circle-slash' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button type="link"><Glyph icon="bug" /></Button>\n\t\t\t\t\t\t\t<Button type="link"><Glyph icon="squirrel" type="danger" /></Button>\n\t\t\t\t\t\t\t<Button type="link-delete"><Glyph icon="delete" /></Button>\n\t\t\t\t\t\t'
				)
			)
		);
	}
});

module.exports = Glyphs;

},{"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],10:[function(require,module,exports){
/* eslint no-script-url: 0 */

'use strict';

var React = require('react');

var _require = require('elemental');

var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;
var ResponsiveText = _require.ResponsiveText;

var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var GridExample = React.createClass({
	displayName: 'GridExample',

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Grid'
			),
			React.createElement(
				'h2',
				null,
				'Let\'s start simple'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Elemental uses its own component-based grid system. You can specify column widths in pixels, percentages or fractions (between 1/2 and 1/20).'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Equal Columns'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Unequal Columns'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ sm: '1/4' },
							React.createElement(
								DemoBox,
								null,
								'One Quarter'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/2' },
							React.createElement(
								DemoBox,
								null,
								'One Half'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/4' },
							React.createElement(
								DemoBox,
								null,
								'One Quarter'
							)
						),
						React.createElement(
							Col,
							{ sm: '2/3' },
							React.createElement(
								DemoBox,
								null,
								'Two Thirds'
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								null,
								'One Third'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col sm="1/4">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Quarter</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/2">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Half</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/4">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Quarter</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="2/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>Two Thirds</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col sm="1/3">\n\t\t\t\t\t\t\t\t\t<DemoBox>One Third</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Resize your window'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'We\'ve made sure you can accomodate even the trickiest design combinations'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Columns on a small device'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '33%', sm: '25%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'Quarter', visibleMD: 'One Quarter', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '33%', sm: '50%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'One Half', visibleMD: 'One Half', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '33%', sm: '25%', lg: '33.333%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '⅓', visibleSM: 'Quarter', visibleMD: 'One Quarter', visibleLG: 'One Third' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '66.667%', lg: '20%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'Two Thirds', visibleLG: 'One Fifth' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '66.667%', md: '33.333%', lg: '60%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'Two Thirds', visibleMD: 'One Third', visibleLG: 'Three Fifths' })
							)
						),
						React.createElement(
							Col,
							{ xs: '100%', sm: '33.333%', md: '25%', lg: '20%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '1', visibleSM: 'One Third', visibleMD: 'One Quarter', visibleLG: 'One Fifth' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '50%', lg: '50%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'One Half', visibleLG: 'One Half' })
							)
						),
						React.createElement(
							Col,
							{ xs: '50%', sm: '33.333%', md: '25%', lg: '50%' },
							React.createElement(
								DemoBox,
								null,
								React.createElement(ResponsiveText, { visibleXS: '½', visibleSM: 'One Third', visibleMD: 'One Quarter', visibleLG: 'One Half' })
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="25%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="50%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Half" visibleMD="One Half" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="33%" sm="25%" lg="33.333%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="⅓" visibleSM="One Quarter" visibleMD="One Quarter" visibleLG="One Third" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="66.667%" lg="20%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="Two Thirds" visibleLG="One Fifth" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="66.667%" md="33.333%" lg="60%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="Two Thirds" visibleMD="One Third" visibleLG="Three Fifths" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="100%" sm="33.333%" md="25%" lg="20%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="1" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Fifth" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="50%" lg="50%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Half" visibleLG="One Half" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t\t<Col xs="50%" sm="33.333%" md="25%" lg="50%">\n\t\t\t\t\t\t\t\t\t<DemoBox>\n\t\t\t\t\t\t\t\t\t\t<ResponsiveText visibleXS="½" visibleSM="One Third" visibleMD="One Quarter" visibleLG="One Half" />\n\t\t\t\t\t\t\t\t\t</DemoBox>\n\t\t\t\t\t\t\t\t</Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Columns with a basis'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						),
						React.createElement(
							Col,
							{ basis: '25%' },
							React.createElement(
								DemoBox,
								null,
								'♥'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t\t<Col basis="25%"><DemoBox>♥</DemoBox></Col>\n\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'p',
				null,
				'Using columns without declaring a width or basis will NOT WRAP but evenly distribute their width using the available horizontal space of the row. Be careful with this one.'
			),
			React.createElement(
				'p',
				null,
				'With the release of React.js 0.14.x we\'ll be able to use the more agreeable syntax ',
				React.createElement(
					'span',
					{ className: 'inline-code' },
					'<Row basis="X">...</Row>'
				),
				' through parent-based context.'
			)
		);
	}
});

module.exports = GridExample;
/*
@jossmac - this isn't working like it used to...
<h2>Something completely different</h2>
<p className="lead">What's that you say, a grid that lays itself out? I'll eat my hat!</p>
<div className="code-example">
<div className="code-example__example">
	<div className="code-example__example__heading">Columns without attributes</div>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
</div>
<ExampleSource>
	{`
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	<Row>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
		<Col><DemoBox>♥</DemoBox></Col>
	</Row>
	`}
</ExampleSource>
</div>
*/

},{"../components/DemoBox":2,"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],11:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');

var NavItems = [{ value: 'css', icon: 'paintcan', label: 'CSS' }, { value: 'buttons', icon: 'screen-full', label: 'Buttons' }, { value: 'forms', icon: 'diff-modified', label: 'Forms' }, { value: 'spinner', icon: 'ellipsis', label: 'Spinner' }, { value: 'modal', icon: 'versions', label: 'Modal' }, { value: 'misc', icon: 'code', label: 'Misc' }
// { value: 'date-picker', icon: 'calendar', label: 'Date' }
];

var _require = require('elemental');

var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;

var Home = React.createClass({
	displayName: 'VIEW_Home',

	render: function render() {
		var menuItems = NavItems.map(function (item) {
			return React.createElement(
				Col,
				{ xs: '1/3', sm: '1/6', key: item.label, className: 'demo-banner-nav__col col-xs-4 col-sm-2' },
				React.createElement(
					Router.Link,
					{ key: item.value, className: 'demo-banner-nav__item', to: '/' + item.value },
					React.createElement('span', { className: 'demo-banner-nav__icon octicon octicon-' + item.icon }),
					React.createElement(
						'div',
						{ className: 'demo-banner-nav__label' },
						React.createElement(
							'span',
							{ className: 'demo-banner-nav__label-inner' },
							item.label
						)
					)
				)
			);
		});
		return React.createElement(
			'div',
			null,
			React.createElement(
				'header',
				{ className: 'demo-banner demo-banner--primary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement('span', { className: 'demo-banner-illustration' }),
					React.createElement(
						'h1',
						{ className: 'demo-banner__heading demo-banner__heading-1' },
						'Elemental UI'
					),
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'A UI Toolkit for React.js Websites and Apps'
					),
					React.createElement(
						'div',
						{ className: 'demo-banner__buttons' },
						React.createElement(
							'a',
							{ className: 'Button Button--demo-primary', href: 'https://twitter.com/elementalui', target: '_blank' },
							'Follow @ElementalUI on Twitter'
						),
						React.createElement(
							'a',
							{ className: 'Button Button--demo-link', href: 'https://github.com/elementalui/elemental', target: '_blank' },
							'View the GitHub Project'
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'demo-banner demo-banner--secondary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'Project Status'
					),
					React.createElement(
						'ul',
						{ className: 'demo-banner-list' },
						React.createElement(
							'li',
							null,
							'Currently under development, initially for use in ',
							React.createElement(
								'a',
								{ href: 'http://www.keystonejs.com' },
								'KeystoneJS'
							)
						),
						React.createElement(
							'li',
							null,
							'We are experimenting with Component APIs'
						),
						React.createElement(
							'li',
							null,
							'Potentially, we\'ll transition from stylesheets to more inline styles, and would love feedback'
						)
					),
					React.createElement(
						'h5',
						{ className: 'demo-banner-divider' },
						React.createElement(
							'span',
							{ className: 'demo-banner-divider-inner' },
							'Demos'
						)
					),
					React.createElement(
						Row,
						{ className: 'demo-banner-nav' },
						menuItems
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'demo-banner demo-banner--tertiary' },
				React.createElement(
					Container,
					{ maxWidth: 768, className: 'demo-container' },
					React.createElement(
						'h2',
						{ className: 'demo-banner__heading demo-banner__heading-2' },
						'Why build ',
						React.createElement(
							'em',
							null,
							'another'
						),
						' UI kit?'
					),
					React.createElement(
						'p',
						null,
						'We believe there is a need for a high quality, modular set of UI scaffolding components and controls for React that are built from the outset to natively implement React patterns.'
					),
					React.createElement(
						'p',
						null,
						React.createElement(
							'strong',
							null,
							'Elemental UI'
						),
						' has been born to solve real-world requirements in projects we work on, and for use in the node.js content management platform ',
						React.createElement(
							'a',
							{ href: 'http://www.keystonejs.com', target: '_blank' },
							'KeystoneJS'
						),
						'.'
					),
					React.createElement(
						'p',
						null,
						'Our goal is to create a set of functional and unopinionated components that are useful on their own or together, with an unobtrusive default style and flexible theme capabilities.'
					),
					React.createElement(
						'p',
						null,
						'Thanks and credit go to the many other great CSS Component libraries that have been developed and whose shoulders we stand on, especially Bootstrap.'
					),
					React.createElement(
						'div',
						{ className: 'demo-banner-points' },
						React.createElement(
							Row,
							null,
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Open Source'
								),
								React.createElement(
									'p',
									null,
									'Available for use under the MIT license,  built on foundations of React.js, LESS, Babel and Gulp, and inspired by other great projects.'
								)
							),
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Modern Workflows'
								),
								React.createElement(
									'p',
									null,
									'Elemental is designed to be installed from npm and built into your project with browserify or webpack. You can customise it by including our LESS too.'
								)
							),
							React.createElement(
								Col,
								{ sm: '1/3' },
								React.createElement(
									'h3',
									null,
									'Made by Thinkmill'
								),
								React.createElement(
									'p',
									null,
									'Elemental UI is the cornerstone of Thinkmill\'s development suite, made by people who share a passion for HTML, CSS and JavaScript.'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Home;

},{"elemental":undefined,"react":undefined,"react-router":undefined}],12:[function(require,module,exports){
'use strict';

var React = require('react');
var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var _require = require('elemental');

var Alert = _require.Alert;
var Card = _require.Card;
var Col = _require.Col;
var Container = _require.Container;
var FormField = _require.FormField;
var FormInput = _require.FormInput;
var InputGroup = _require.InputGroup;
var Pagination = _require.Pagination;
var Pill = _require.Pill;
var Row = _require.Row;
var Table = _require.Table;

var MAX_PAGESIZE = 100;
var MAX_RECORDS = 1000;

var Misc = React.createClass({
	displayName: 'VIEW_Misc',

	getInitialState: function getInitialState() {
		return {
			currentPage: 2,
			pageSize: 25,
			plural: 'Potatoes',
			singular: 'Potato',
			total: 123,
			limit: 5
		};
	},

	handlePaginationValueChange: function handlePaginationValueChange(e) {
		var newState = {};
		var fieldName = e.target.name;
		var newValue = e.target.value;

		if (fieldName === 'currentPage' || fieldName === 'pageSize' || fieldName === 'total' || fieldName === 'limit') {
			newValue = parseInt(newValue);

			if (isNaN(newValue) || newValue < 0) {
				newValue = 0;
			}
			if (fieldName !== 'total' && newValue < 1) {
				newValue = 1;
			}
			if (fieldName === 'pageSize' && newValue > MAX_PAGESIZE) {
				newValue = MAX_PAGESIZE;
			}
			if (fieldName === 'total' && newValue > MAX_RECORDS) {
				newValue = MAX_RECORDS;
			}
		}

		newState[fieldName] = newValue;
		this.setState(newState);
	},

	handlePageSelect: function handlePageSelect(page) {
		this.setState({
			currentPage: page
		});
	},

	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Miscellaneous'
			),
			React.createElement(
				'p',
				{ className: 'lead' },
				'Some components march to the beat of their own drum…'
			),
			React.createElement(
				'h2',
				null,
				'Alerts'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Alert,
						{ type: 'info' },
						React.createElement(
							'strong',
							null,
							'Info:'
						),
						' Alerts can contain ',
						React.createElement(
							'a',
							{ href: '/misc' },
							'Anchor Tags'
						)
					),
					React.createElement(
						Alert,
						{ type: 'success' },
						React.createElement(
							'strong',
							null,
							'Success:'
						),
						' Nothing to worry about, everything is going great!'
					),
					React.createElement(
						Alert,
						{ type: 'warning' },
						React.createElement(
							'strong',
							null,
							'Warning:'
						),
						' Pay attention to me, things are not going according to plan.'
					),
					React.createElement(
						Alert,
						{ type: 'danger' },
						React.createElement(
							'strong',
							null,
							'Error:'
						),
						' You need to take action, something has gone terribly wrong!'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Alert type="info"><strong>Info:</strong> Alerts can contain <a href="/misc">Anchor Tags</a></Alert>\n\t\t\t\t\t\t\t<Alert type="success"><strong>Success:</strong> Nothing to worry about, everything is going great!</Alert>\n\t\t\t\t\t\t\t<Alert type="warning"><strong>Warning:</strong> Pay attention to me, things are not going according to plan.</Alert>\n\t\t\t\t\t\t\t<Alert type="danger"><strong>Error:</strong> You need to take action, something has gone terribly wrong!</Alert>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								)
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Cards'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Card,
						null,
						'Hi there, I\'m a card! I\'m pretty simple, but with a little imagination I can be really awesome :)'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'Use'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'me'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/3' },
							React.createElement(
								Card,
								null,
								'in'
							)
						)
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ xs: '1/2' },
							React.createElement(
								Card,
								null,
								'a'
							)
						),
						React.createElement(
							Col,
							{ xs: '1/2' },
							React.createElement(
								Card,
								null,
								'grid'
							)
						)
					),
					React.createElement(
						Card,
						null,
						React.createElement(
							'h3',
							{ style: { marginTop: 0 } },
							'Alternatively'
						),
						React.createElement(
							DemoBox,
							{ style: { color: '#999', paddingBottom: 40, paddingTop: 40 } },
							React.createElement('span', { className: 'mega-octicon octicon-file-media' })
						),
						React.createElement(
							'div',
							null,
							'As part of more complete and sophisticated component. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis maximus nisi, non feugiat ipsum. Vestibulum condimentum massa nec tempus tincidunt.'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Card>Hi there, I\'m a card! I\'m pretty simple, but with a little imagination I can be really awesome :)</Card>\n\t\t\t\t\t\t\t<Row>\n\t\t\t\t\t\t\t\t<Col><Card>Use</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>me</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>in</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>a</Card></Col>\n\t\t\t\t\t\t\t\t<Col><Card>grid</Card></Col>\n\t\t\t\t\t\t\t</Row>\n\t\t\t\t\t\t\t<Card>...</Card>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Pagination'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Pagination, {
						currentPage: this.state.currentPage,
						onPageSelect: this.handlePageSelect,
						pageSize: this.state.pageSize,
						plural: this.state.plural,
						singular: this.state.singular,
						style: { lineHeight: '34px', marginBottom: 0, minHeight: 34 },
						total: this.state.total,
						limit: this.state.limit
					})
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Pagination\n\t\t\t\t\t\t\t\tcurrentPage={this.state.currentPage}\n\t\t\t\t\t\t\t\tonPageSelect={this.handlePageSelect}\n\t\t\t\t\t\t\t\tpageSize={this.state.pageSize}\n\t\t\t\t\t\t\t\tplural={this.state.plural}\n\t\t\t\t\t\t\t\tsingular={this.state.singular}\n\t\t\t\t\t\t\t\ttotal={this.state.total}\n\t\t\t\t\t\t\t\tlimit={this.state.limit}\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				InputGroup,
				null,
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Current page' },
						React.createElement(FormInput, { name: 'currentPage', type: 'number', value: this.state.currentPage, onChange: this.handlePaginationValueChange, placeholder: 'Current page' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Page size' },
						React.createElement(FormInput, { name: 'pageSize', type: 'number', value: this.state.pageSize, onChange: this.handlePaginationValueChange, placeholder: 'Page size' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Plural' },
						React.createElement(FormInput, { name: 'plural', type: 'text', value: this.state.plural, onChange: this.handlePaginationValueChange, placeholder: 'Plural' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Singular' },
						React.createElement(FormInput, { name: 'singular', type: 'text', value: this.state.singular, onChange: this.handlePaginationValueChange, placeholder: 'Singular' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Total records' },
						React.createElement(FormInput, { name: 'total', type: 'number', value: this.state.total, onChange: this.handlePaginationValueChange, placeholder: 'Total records' })
					)
				),
				React.createElement(
					InputGroup.Section,
					{ grow: true },
					React.createElement(
						FormField,
						{ label: 'Limit' },
						React.createElement(FormInput, { name: 'limit', type: 'number', value: this.state.limit, onChange: this.handlePaginationValueChange, placeholder: 'Limit' })
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'currentPage'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The current page number.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onPageSelect'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'How you want to handle page selection by the user.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'pageSize'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The number of records to display per page.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'plural'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Displayed when there are no records "No Items", or the total number of records is less than the records per page "Showing 10 Items".'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'singular'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Displayed when there is a single record "Showing 1 Item".'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'total'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none (required)'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The total number of records.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'limit'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'none'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The number of pages to show in pagination.'
							)
						)
					)
				)
			),
			React.createElement(
				'h2',
				null,
				'Pills'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(Pill, { label: 'Create', type: 'success-inverted' }),
					React.createElement(Pill, { label: 'First Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Second Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Third Pill', type: 'primary', onClear: function () {} }),
					React.createElement(Pill, { label: 'Clear All' })
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Pill label="Create" type="success-inverted" />\n\t\t\t\t\t\t\t<Pill label="First Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Second Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Third Pill" type="primary" onClear={this.handleClear} />\n\t\t\t\t\t\t\t<Pill label="Clear All" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'label'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Required. The tag label'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onClear'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Handle clear events on the pill. The clear button is rendered when this is supplied'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'default\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'One of:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning'
								),
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'danger-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'info-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'success-inverted'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'warning-inverted'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Misc;

},{"../components/DemoBox":2,"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],13:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var Container = _require.Container;
var FormField = _require.FormField;
var FormInput = _require.FormInput;
var Modal = _require.Modal;
var ModalBody = _require.ModalBody;
var ModalFooter = _require.ModalFooter;
var ModalHeader = _require.ModalHeader;
var Spinner = _require.Spinner;
var Table = _require.Table;

var ExampleSource = require('../components/ExampleSource');

module.exports = React.createClass({
	displayName: 'VIEW_Modal',
	getInitialState: function getInitialState() {
		return {
			modalIsOpen: false,
			sizedModalIsOpen: false
		};
	},
	toggleModal: function toggleModal(visible) {
		this.setState({
			modalIsOpen: visible
		});
	},
	toggleSizedModal: function toggleSizedModal(visible, size) {
		this.setState({
			sizedModalIsOpen: visible,
			modalSize: size
		});
	},
	render: function render() {
		var _this = this;

		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Modal'
			),
			React.createElement(
				'h2',
				null,
				'Static Example'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'Modal-content' },
						React.createElement(ModalHeader, { text: 'Modal Header' }),
						React.createElement(
							ModalBody,
							null,
							React.createElement(
								FormField,
								{ label: 'Email' },
								React.createElement(FormInput, { label: 'Email', type: 'email', name: 'email', ref: 'email', placeholder: 'name@example.com', onChange: this.updateInput, required: true })
							),
							React.createElement(
								FormField,
								{ label: 'Password' },
								React.createElement(FormInput, { label: 'Password', type: 'password', name: 'password', ref: 'password', placeholder: 'min. 8 chars', onChange: this.updateInput, required: true })
							)
						),
						React.createElement(
							ModalFooter,
							null,
							React.createElement(
								Button,
								{ type: 'primary' },
								'Submit'
							),
							React.createElement(
								Button,
								{ type: 'link-cancel' },
								'Cancel'
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Modal>\n\t\t\t\t\t\t\t\t<ModalHeader text="Modal Header" />\n\t\t\t\t\t\t\t\t<ModalBody>\n\t\t\t\t\t\t\t\t\t<form>[...]</form>\n\t\t\t\t\t\t\t\t</ModalBody>\n\t\t\t\t\t\t\t\t<ModalFooter>\n\t\t\t\t\t\t\t\t\t<Button type="primary">Modal Footer</Button>\n\t\t\t\t\t\t\t\t\t<Button type="link-cancel">Button</Button>\n\t\t\t\t\t\t\t\t</ModalFooter>\n\t\t\t\t\t\t\t</Modal>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Live Demo'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Button,
						{ onClick: this.toggleModal.bind(this, true) },
						'Launch Modal'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Button onClick={this.toggleModal}>Launch Modal</Button>\n\t\t\t\t\t\t'
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>\n\t\t\t\t\t\t\t\t<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />\n\t\t\t\t\t\t\t\t<ModalBody>[...]</ModalBody>\n\t\t\t\t\t\t\t\t<ModalFooter>\n\t\t\t\t\t\t\t\t\t<Button type="primary" onClick={this.toggleModal}>Close modal</Button>\n\t\t\t\t\t\t\t\t\t<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>\n\t\t\t\t\t\t\t\t</ModalFooter>\n\t\t\t\t\t\t\t</Modal>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Sizes'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						Button,
						{ onClick: function () {
								return _this.toggleSizedModal(true, 'small');
							}, style: { marginRight: 10 } },
						'Small'
					),
					React.createElement(
						Button,
						{ onClick: function () {
								return _this.toggleSizedModal(true, 'large');
							}, style: { marginRight: 10 } },
						'Large'
					),
					React.createElement(
						Button,
						{ onClick: function () {
								return _this.toggleSizedModal(true, 768);
							} },
						'768px'
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t\t<Modal ... size="small">...</Modal>\n\t\t\t\t\t\t\t<Modal ... size="large">...</Modal>\n\t\t\t\t\t\t\t<Modal ... size={768}>...</Modal>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h2',
				null,
				'Usage'
			),
			React.createElement(
				'h3',
				null,
				'Modal'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'backdropClosesModal'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Pass through to make the backdrop available as a target to dismiss the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'isOpen'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Managed by state;  this is how to control the visibility of the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onCancel'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'The function used to handle cancel events on the modal; typically sets the open state to ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'false'
								)
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'width'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'number/enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'medium\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Explicitly set a numeric width or provide one of three sizes; \'small\', \'medium\', \'large\' - 320px, 640px, 960px respectively.'
							)
						)
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Modal Header'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'children'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'node'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Alternative to using the text attribute, for when you need more control over the content.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'showCloseButton'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'bool'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'false'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Allow users to dismiss the modal.'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'onClose'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'func'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'undefined'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'What to do when the user clicks the close button'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'text'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'string'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'\'\''
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Creates a title for the modal. We use "text" because ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'title'
								),
								' is reserved.'
							)
						)
					)
				)
			),
			React.createElement(
				'h3',
				null,
				'Modal Body/Footer'
			),
			React.createElement(
				'p',
				null,
				'These are simple wrappers to abstract the classnames, they may become more functional in the future.'
			),
			React.createElement(
				Modal,
				{ isOpen: this.state.modalIsOpen, onCancel: this.toggleModal.bind(this, false), backdropClosesModal: true },
				React.createElement(ModalHeader, { text: 'Lots of text to show scroll behavior', showCloseButton: true, onClose: this.toggleModal.bind(this, false) }),
				React.createElement(
					ModalBody,
					null,
					React.createElement(
						'p',
						{ style: { color: '#999', fontSize: '.85em' } },
						'From the Wikipedia article ',
						React.createElement(
							'a',
							{ href: 'https://en.wikipedia.org/wiki/Elemental', target: '_blank' },
							'https://en.wikipedia.org/wiki/Elemental'
						)
					),
					React.createElement(
						'p',
						null,
						'An elemental is a mythic being described in occult and alchemical works from around the time of the European Renaissance and particularly elaborated in the 16th century works of Paracelsus.'
					),
					React.createElement(
						'p',
						null,
						'There are four elemental categories: gnomes, undines, sylphs, and salamanders. These correspond to the Classical elements of antiquity: earth, water, air and fire. Aether (quintessence) was not assigned an elemental.'
					),
					React.createElement(
						'p',
						null,
						'Terms employed for beings associated with alchemical elements vary by source and gloss.'
					),
					React.createElement(
						'h2',
						null,
						'History'
					),
					React.createElement(
						'p',
						null,
						'The Paracelsian concept of elementals draws from several much older traditions in mythology and religion. Common threads can be found in folklore, animism, and anthropomorphism. Examples of creatures such as the Pygmy were taken from Greek mythology.'
					),
					React.createElement(
						'p',
						null,
						'The elements of earth, water, air, and fire, were classed as the fundamental building blocks of nature. This system prevailed in the Classical world and was highly influential in medieval natural philosophy. Although Paracelsus uses these foundations and the popular preexisting names of elemental creatures, he is doing so to present new ideas which expand on his own philosophical system. The homunculus is another example of a Paracelsian idea with roots in earlier alchemical, scientific, and folklore traditions.'
					),
					React.createElement(
						'h3',
						null,
						'Paracelsus'
					),
					React.createElement(
						'p',
						null,
						'In his 16th-century alchemical work Liber de Nymphis, sylphis, pygmaeis et salamandris et de caeteris spiritibus, Paracelsus identified mythological beings as belonging to one of the four elements. Part of the Philosophia Magna, this book was first printed in 1566 after Paracelsus\' death. He wrote the book to "describe the creatures that are outside the cognizance of the light of nature, how they are to be understood, what marvellous works God has created". He states that there is more bliss in describing these "divine objects" than in describing fencing, court etiquette, cavalry, and other worldly pursuits.'
					),
					React.createElement(
						'p',
						null,
						'The concept of elementals seems to have been conceived by Paracelsus in the 16th century, though he did not in fact use the term "elemental" or a German equivalent.[5] He regarded them not so much as spirits but as beings between creatures and spirits, generally being invisible to mankind but having physical and commonly humanoid bodies, as well as eating, sleeping, and wearing clothes like humans. Paracelsus gave common names for the elemental types, as well as correct names, which he seems to have considered somewhat more proper, "recht namen". He also referred to them by purely German terms which are roughly equivalent to "water people," "mountain people," and so on, using all the different forms interchangeably.'
					)
				),
				React.createElement(
					ModalFooter,
					null,
					React.createElement(
						Button,
						{ type: 'primary', onClick: this.toggleModal.bind(this, false) },
						'Close modal'
					),
					React.createElement(
						Button,
						{ type: 'link-cancel', onClick: this.toggleModal.bind(this, false) },
						'Also closes modal'
					)
				)
			),
			React.createElement(
				Modal,
				{ isOpen: this.state.sizedModalIsOpen, onCancel: function () {
						return _this.toggleSizedModal(false, null);
					}, backdropClosesModal: true, width: this.state.modalSize },
				React.createElement(ModalHeader, { text: this.state.modalSize, showCloseButton: true, onClose: function () {
						return _this.toggleSizedModal(false, null);
					} }),
				React.createElement(
					ModalBody,
					null,
					React.createElement(
						'p',
						null,
						'…'
					)
				)
			)
		);
	}
});

},{"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],14:[function(require,module,exports){
'use strict';

var React = require('react');

var _require = require('elemental');

var Button = _require.Button;
var Col = _require.Col;
var Container = _require.Container;
var Row = _require.Row;
var Spinner = _require.Spinner;
var Table = _require.Table;

var DemoBox = require('../components/DemoBox');
var ExampleSource = require('../components/ExampleSource');

var Buttons = React.createClass({
	displayName: 'VIEW_Spinner',
	render: function render() {
		return React.createElement(
			Container,
			{ maxWidth: 800, className: 'demo-container' },
			React.createElement(
				'h1',
				null,
				'Spinner'
			),
			React.createElement(
				'h2',
				null,
				'Common use cases'
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Page Element'
					),
					React.createElement(
						Row,
						null,
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 } },
								React.createElement(Spinner, { size: 'md' })
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 } },
								React.createElement(Spinner, { size: 'md', type: 'primary' })
							)
						),
						React.createElement(
							Col,
							{ sm: '1/3' },
							React.createElement(
								DemoBox,
								{ style: { paddingBottom: 20, paddingTop: 20 }, inverted: true },
								React.createElement(Spinner, { size: 'md', type: 'inverted' })
							)
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Spinner size="md" />\n\t\t\t\t\t\t<Spinner size="md" type="primary" />\n\t\t\t\t\t\t<Spinner size="md" type="inverted" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Inside Buttons'
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							null,
							React.createElement(Spinner, null)
						)
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							{ disabled: true },
							React.createElement(Spinner, { type: 'primary' }),
							'Saving'
						)
					),
					React.createElement(
						'div',
						{ className: 'code-example__example-element--inline' },
						React.createElement(
							Button,
							{ type: 'primary' },
							React.createElement(Spinner, { type: 'inverted' }),
							'Submitting'
						)
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Button><Spinner /></Button>\n\t\t\t\t\t\t<Button disabled><Spinner type="primary" />Saving</Button>\n\t\t\t\t\t\t<Button type="primary"><Spinner type="inverted" />Submitting</Button>\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'div',
				{ className: 'code-example' },
				React.createElement(
					'div',
					{ className: 'code-example__example' },
					React.createElement(
						'div',
						{ className: 'code-example__example__heading' },
						'Full Page Load'
					),
					React.createElement(
						'div',
						{ style: { paddingBottom: 60, paddingTop: 60, textAlign: 'center' } },
						React.createElement(Spinner, { size: 'lg' })
					)
				),
				React.createElement(
					ExampleSource,
					null,
					'\n\t\t\t\t\t\t<Spinner size="lg" />\n\t\t\t\t\t\t'
				)
			),
			React.createElement(
				'h3',
				null,
				'Usage'
			),
			React.createElement(
				'div',
				{ className: 'usage-table' },
				React.createElement(
					Table,
					null,
					React.createElement(
						'thead',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'th',
								null,
								'Prop'
							),
							React.createElement(
								'th',
								null,
								'Type'
							),
							React.createElement(
								'th',
								null,
								'Default'
							),
							React.createElement(
								'th',
								null,
								'Description'
							)
						)
					),
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'size'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'sm'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								React.createElement(
									'p',
									null,
									'Declare the size of the dots in the spinner. Possible options:',
									React.createElement('br', null),
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'sm'
									),
									' ',
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'md'
									),
									' ',
									React.createElement(
										'code',
										{ className: 'inline-code' },
										'lg'
									)
								),
								'Spinners automatically become small when inside of buttons'
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								{ className: 'usage-table__prop' },
								'type'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__type' },
								'enum'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__default' },
								'default'
							),
							React.createElement(
								'td',
								{ className: 'usage-table__description' },
								'Declare the colour of the dots in the spinner. Possible options:',
								React.createElement('br', null),
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'default'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'primary'
								),
								' ',
								React.createElement(
									'code',
									{ className: 'inline-code' },
									'inverted'
								)
							)
						)
					)
				)
			)
		);
	}
});

module.exports = Buttons;

},{"../components/DemoBox":2,"../components/ExampleSource":3,"elemental":undefined,"react":undefined}],15:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _history = require('history');

var NavItems = [{ value: '/css', label: 'CSS' }, { value: '/grid', label: 'Grid' }, { value: '/buttons', label: 'Buttons' }, { value: '/glyphs', label: 'Glyphs' }, { value: '/forms', label: 'Forms' }, { value: '/spinner', label: 'Spinner' }, { value: '/modal', label: 'Modal' }, { value: '/misc', label: 'Misc' }
// { value: 'date-picker', label: 'Date Picker' }
];

var PageNav = _react2['default'].createClass({
	displayName: 'PageNav',

	getInitialState: function getInitialState() {
		return {
			mobileMenuIsVisible: false,
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		};
	},
	componentDidMount: function componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	},
	handleResize: function handleResize() {
		this.setState({
			windowHeight: window.innerHeight,
			windowWidth: window.innerWidth
		});
	},
	toggleMenu: function toggleMenu() {
		this.setState({
			mobileMenuIsVisible: !this.state.mobileMenuIsVisible
		});
	},
	render: function render() {
		var self = this;
		var height = this.state.windowWidth < 768 ? this.state.windowHeight : 'auto';
		var menuClass = this.state.mobileMenuIsVisible ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function (item) {
			return _react2['default'].createElement(
				_reactRouter.Link,
				{ key: item.value, className: 'primary-nav__item', activeClassName: 'active', onClick: self.toggleMenu, to: item.value },
				_react2['default'].createElement(
					'span',
					{ className: 'primary-nav__item-inner' },
					item.label
				)
			);
		});
		return _react2['default'].createElement(
			'nav',
			{ className: 'primary-nav' },
			_react2['default'].createElement(
				_reactRouter.Link,
				{ to: '/home', className: 'primary-nav__brand special', title: 'Home' },
				_react2['default'].createElement('img', { src: './images/elemental-logo-paths.svg', className: 'primary-nav__brand-src' })
			),
			_react2['default'].createElement(
				'button',
				{ onClick: this.toggleMenu, className: 'primary-nav__item primary-nav-menu-trigger' },
				_react2['default'].createElement('span', { className: 'primary-nav-menu-trigger-icon octicon octicon-navicon' }),
				_react2['default'].createElement(
					'span',
					{ className: 'primary-nav-menu-trigger-label' },
					this.state.mobileMenuIsVisible ? 'Close' : 'Menu'
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: menuClass, style: { height: height } },
				_react2['default'].createElement(
					'div',
					{ className: 'primary-nav-menu-inner' },
					menuItems
				)
			),
			_react2['default'].createElement(
				'a',
				{ href: 'https://github.com/elementalui/elemental', target: '_blank', title: 'View on GitHub', className: 'primary-nav__brand right' },
				_react2['default'].createElement('img', { src: './images/github-logo.svg', className: 'primary-nav__brand-src' })
			)
		);
	}
});

var App = _react2['default'].createClass({
	displayName: 'App',

	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'page-wrapper' },
			_react2['default'].createElement(PageNav, null),
			_react2['default'].createElement(
				'div',
				{ className: 'page-body' },
				this.props.children
			),
			_react2['default'].createElement(
				'div',
				{ className: 'page-footer' },
				_react2['default'].createElement(
					'div',
					{ className: 'demo-container container' },
					'Copyright © 2015 · (MIT) License · Built by ',
					_react2['default'].createElement(
						'a',
						{ href: 'http://www.thinkmill.com.au', target: '_blank' },
						'Thinkmill'
					),
					', initially for integration with ',
					_react2['default'].createElement(
						'a',
						{ href: 'http://www.keystonejs.com', target: '_blank' },
						'KeystoneJS'
					)
				)
			)
		);
	}
});

var basepath = window.location.pathname.slice(0, 10) === '/elemental' ? '/elemental' : '';
var history = (0, _history.createHistory)();

_reactDom2['default'].render(_react2['default'].createElement(
	_reactRouter.Router,
	{ history: history, onUpdate: function () {
			return window.scrollTo(0, 0);
		} },
	_react2['default'].createElement(
		_reactRouter.Route,
		{ path: '/', component: App },
		_react2['default'].createElement(_reactRouter.IndexRoute, { component: require('./pages/Home') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'home', component: require('./pages/Home') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'css', component: require('./pages/CSS') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'grid', component: require('./pages/Grid') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'buttons', component: require('./pages/Buttons') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'glyphs', component: require('./pages/Glyphs') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'forms', component: require('./pages/Forms') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'spinner', component: require('./pages/Spinner') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'modal', component: require('./pages/Modal') }),
		_react2['default'].createElement(_reactRouter.Route, { path: 'misc', component: require('./pages/Misc') }),
		_react2['default'].createElement(_reactRouter.Route, { path: '*', component: require('./pages/Home') })
	)
), document.getElementById('app'));
/*<Link to="home">Home</Link>*/

},{"./pages/Buttons":6,"./pages/CSS":7,"./pages/Forms":8,"./pages/Glyphs":9,"./pages/Grid":10,"./pages/Home":11,"./pages/Misc":12,"./pages/Modal":13,"./pages/Spinner":14,"history":undefined,"react":undefined,"react-dom":undefined,"react-router":undefined}],16:[function(require,module,exports){
'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.canUseDOM = canUseDOM;

// breakpoints
exports.breakpoint = {
	xs: 480,
	sm: 768,
	md: 992,
	lg: 1200
};

// border radii
exports.borderRadius = {
	xs: 2,
	sm: 4,
	md: 8,
	lg: 16,
	xl: 32
};

// color
exports.color = {
	appDanger: '#d64242',
	appInfo: '#56cdfc',
	appPrimary: '#1385e5',
	appSuccess: '#34c240',
	appWarning: '#fa9f47',
	brandPrimary: '#31adb8'
};

// spacing
exports.spacing = {
	xs: 5,
	sm: 10,
	md: 20,
	lg: 40,
	xl: 80
};

// widths
exports.width = {
	container: 1170,
	gutter: 20
};

// fractions (for col widths)

function perc(n) {
	return n * 100 + '%';
}

function denominators(n) {
	for (var d = 2; d <= 20; d++) {
		if (n < d) {
			exports.fractions[n + '/' + d] = perc(n / d);
		}
	}
}

exports.fractions = {};

for (var numerator = 1; numerator <= 19; numerator++) {
	denominators(numerator);
}

},{}]},{},[15]);
