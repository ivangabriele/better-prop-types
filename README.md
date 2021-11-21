# better-prop-types

[![License][img-license]][lnk-license]
[![CI Status][img-github]][lnk-github]
[![Code Coverage][img-codecov]][lnk-codecov]
[![NPM Version][img-npm]][lnk-npm]

## Features

- Add `.isNotNull` and `.isNullable` modifiers to all validators, besides the original `.isRequired` prop:
  - `.isNotNull` keeps the prop optional but rejects `null` (= accepts `undefined` but not `null` values)
  - `.isNullable` marks the prop as required but accepts `null` (= accepts `null` but not `undefined` values)

## Usage

## Installation

```sh
yarn add -E better-prop-types@alpha
```

or:

```sh
npm i -E better-prop-types@alpha
```

## Example

```ts
import BetterPropTypes from 'better-prop-types'

export const MyComponent = ({
  anOptionalButNonNullStringProp = 'A default string',
  aRequiredButNullableNumberProp,
  aRequiredAndNonNullableBooleanProp,
}) => (
  // ...
)

MyComponent.propTypes = {
  anOptionalButNonNullStringProp: BetterPropTypes.string.isNotNull,
  aRequiredButNullableNumberProp: BetterPropTypes.number.isNullable,
  aRequiredAndNonNullableBooleanProp: BetterPropTypes.bool.isRequired,
}
```

You can also use them with all the functional validators: `objectOf(/* */).isNullable`, `shape(/* */).isNotNull`, etc.

## Roadmap

- Integrate some [prop-types-extra](https://github.com/react-bootstrap/prop-types-extra) extra types:
  - `all(...validators)` => `BetterPropsTypes.all(...validators)`
  - `deprecated(validator, reason)` => `BetterPropsTypes.string.isDeprecated(reason)`
  - `isRequiredForA11y(validator)` => `BetterPropsTypes.string.isRequiredForA11y`

---

[img-codecov]: https://img.shields.io/codecov/c/github/ivangabriele/better-prop-types/alpha?style=flat-square
[img-github]: https://img.shields.io/github/workflow/status/ivangabriele/better-prop-types/Check/alpha?style=flat-square
[img-license]: https://img.shields.io/github/license/ivangabriele/better-prop-types?style=flat-square
[img-npm]: https://img.shields.io/npm/v/better-prop-types/alpha?style=flat-square
[lnk-codecov]: https://codecov.io/gh/ivangabriele/better-prop-types/branch/alpha
[lnk-github]: https://github.com/ivangabriele/better-prop-types/actions?query=branch%3Aalpha++
[lnk-license]: https://github.com/ivangabriele/better-prop-types/blob/alpha/LICENSE
[lnk-npm]: https://www.npmjs.com/package/better-prop-types/v/alpha
