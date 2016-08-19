# Elemental

## v0.6.1 / 2016-08-04

* fixed; issue passing unrecognised attributes to DOM elements that was missed in 0.6.0

## v0.6.0 / 2016-07-26

This release fixes warnings in React 15.2.x, and includes a small breaking change to do with the calitalisation of `autoFocus`.

* fixed; issues with passing unrecognised attributes to DOM elements, which caused warnings in React 15.2.x, thanks to [Monday Chen](https://github.com/mondaychen)
* fixed; capitalisation inconsistencies with React on the `autoFocus` prop (Focus is now capitalised)

## v0.5.14 / 2016-04-10

Elemental is now compatible with React 15.x.x

* added; Card: CSS is now actual CSS
* fixed; Pagination: First page appears correctly, thanks [Nuno Campos](https://github.com/nfcampos)
* fixed; Button: link button variants match other buttons, thanks [Christian Legnitto](https://github.com/LegNeato)
* fixed; FileDragAndDrop: button now always specifies `type="button"`, thanks [Jinks](https://github.com/JinksPeng)

## v0.5.13 / 2016-02-22

* fixed; FileInput: `onChange` prop fires when file selection is cancelled

## v0.5.12 / 2016-02-16

* fixed; Table className is correctly retained, thanks [Rafee Memon](https://github.com/rafeememon)
* cleanup; Pagination is now two components (internal)
* fixed; Pagination: reference error
* fixed; Button: component propType is element
* added; Col: now accepts `1` for `100%` width, thanks [Nathan Smith](https://github.com/NogsMPLS)
* fixed; FileInput: `onChange` prop fires with data, thanks [Cameron Roe](https://github.com/cameronjroe)

## v0.5.11 / 2015-12-29

Accessibility features provided by `ally.js` have been removed from the Modal component for now; they've caused several issues and need a comprehensive review and possibly a different implementation before being reintroduced to the stable version.

## v0.5.10 / 2015-12-22

* fixed? Updated ally.js dependency, next attempt to fix server-side rendering

## v0.5.9 / 2015-12-18

* fixed: Modal component nulls document overflow on close
* fixed; The Modal component _should_ be safe for server-side rendering

## v0.5.8 / 2015-12-14

* fixed; Accessibility handlers in the Modal component are only bound when the `isOpen` prop changes
* changed; The `Modal` component will only focus the first element when you tell it to, with the new `autofocusFirstElement` prop

## v0.5.7 / 2015-12-07

* fixed; Pagination component works with even page limits, thanks [Shmavon Gazanchyan](https://github.com/MunGell)
* added; Accessibility fixes for the `Modal` component, thanks [Jonathan Persson](https://github.com/jonathanp)
* fixed; Safari style bug in the dropdown component, thanks [Jonathan Persson](https://github.com/jonathanp)

## v0.5.6 / 2015-11-18

* changed; default info colour darkened slightly for better legibility
* fixed; anchor text colour in alerts

## v0.5.5 / 2015-11-14

* fixed; Server-side rendering issues with the `Col` component, thanks [Daniil Pokrovsky](https://github.com/danii1)

## v0.5.4 / 2015-11-08

* fixed; `input.focus()` works again
* changed; `focusOnMount` prop on Input and Checkbox components has become `autofocus` and is now working again

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
* added; Pagination: new limit prop to limit total number of pages displayed, thanks [Shmavon Gazanchyan](https://github.com/MunGell)

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
