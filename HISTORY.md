# Elemental

## v0.5.3 / 2015-10-18

* fixed; `react-dom` and `react-addons-*` need to be declared as peerDependencies

## v0.5.2 / 2015-10-16

* added; Button: `component` prop to provide custom components for buttons, e.g. enables use of react-router's `Router.Link`, thanks [Christian Legnitto](https://github.com/LegNeato)

## v0.5.1 / 2015-10-16

* fixed; arrow positioning on `FormSelect` thanks to [NogsMPLS](https://github.com/NogsMPLS)
* added; setting custom widths on `Modal`, explicitly set a numeric width or provide one of three sizes; 'small', 'medium', 'large' - 320px, 640px, 960px respectively.

## v0.5.0 / 2015-10-12

Elemental UI is updated for React 0.14. If you're still using React 0.13, please continue to use `elemental@0.4.x`. There are no functional differences between v0.5.0 and v0.4.8.

## v0.4.8 / 2015-09-19

* added; New `Glyph` component, thanks to [Christian Legnitto](https://github.com/LegNeato)
* fixed; FileUpload: onChange isn't always triggered correctly, thanks [Jinks](https://github.com/JinksPeng)

## v0.4.7 / 2015-09-18

* fixed; Modal position is now fixed with CSS, and addresses previously janky scrolling behaviour

## v0.4.6 / 2015-09-17

* fixed; InputGroup: contiguous section's border behaviour
* fixed; Dropdown: return value from onSelect (not label)
* fixed; Dropdown: escape closes menu
* added; Pagination: new limit prop to limit total number of pages displayed, thanks [Shmavon](https://github.com/MunGell)

## v0.4.5 / 2015-09-16

* fixed; React dependency allows any version of 0.14 beta or rc
* fixed; FormSelect component now allows setting value via props

## v0.4.4 / 2015-09-11

* fixed; Col component is allowed to have no children, thanks [Christian Legnitto](https://github.com/LegNeato)
* fixed; Pill buttons are now of type `button` so they don’t submit forms
* improved; Reduced Pill props by relying on a clear function to show the clear button

## v0.4.3 / 2015-09-09

* fixed; `.u-text-truncate` no longer applies !important
* fixed; multiline no-edit inputs no longer truncate tex...
* fixed; block images
* fixed; horizontal form stacking on mobile
* added; `@thumbnail-gutter-width` variable

## v0.4.2 / 2015-09-04

* improved; Container: provide a way to clear floated children without hiding overflow
* improved; InputGroup(Section) has been simplified
* added; Alert: type "error" as an alias for "danger"
* updated; Octicons to v3.1.0

_Warning: the update to Octicons 3.x may be a breaking change; some icons have been removed_

## v0.4.1 / 2015-09-03

* added; custom password validator in PasswordInputGroup, thanks [Lawrence Tseng](https://github.com/teaualune)
* updated; beta dependency for react is now `0.14.0-beta3`
* fixed; bug where descendent InputGroups + FormRows would add bottom margin in horizontal form
* fixed; links in tables no longer have custom styling
* fixed; consistent spacing between FormRow and InputGroup
* fixed; Col: default width behaviour
* fixed; Pagination: height no longer jumps around

## v0.4.0 / 2015-08-28

This release contains a significant breaking change, as we've implemented a completely new Grid system. See the site for docs and examples.

* removed; css classes and less mixins for className-based Grid system
* added; new Component-based Grid system, including `Container`, `Row` and `Col` components
* added; new `Card` component
