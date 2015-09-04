# Elemental

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
