# better-prop-types

[![License][img-license]][lnk-license]
[![CI Status][img-github]][lnk-github]
[![Code Coverage][img-codecov]][lnk-codecov]
[![NPM Version][img-npm]][lnk-npm]

**better-prop-types** is a wrapper for the original **[prop-types][lnk-prop-types]** library adding a few more validators and
modifiers to accurately handle `null` and `undefined` values (which shouldn't be considered similar!).

The code is fully test-covered and actively used in production.

The library includes the original `prop-types` as a dependency.

And that's important to note that **better-prop-types** is only bundled as a full JavaScript module (ESM).

## Features

- Add `.isOptionalButNotNull` and `.isRequiredButNullable` modifiers to all validators, besides the original
  `.isRequired` one:
  - `.isOptionalButNotNull` keeps the prop as **optional** (accepting `undefined`) but rejects `null` values
  - `.isRequired` marks the prop as **required** but rejects both `null` & `undefined` values
  - `.isRequiredButNullable` marks the prop as **required** (rejecting `undefined`) but accepts `null` values

## Usage

### Installation

```sh
yarn add -E better-prop-types@alpha
```

or:

```sh
npm i -E better-prop-types@alpha
```

### Example

```ts
import BetterPropTypes from 'better-prop-types'

export const MyComponent = ({
  anOptionalButNonNullStringProp = 'A default string',
  aRequiredAndNonNullableBooleanProp,
  aRequiredButNullableNumberProp,
}) => (
  // ...
)

MyComponent.propTypes = {
  anOptionalButNonNullStringProp: BetterPropTypes.string.isOptionalButNotNull,
  aRequiredAndNonNullableBooleanProp: BetterPropTypes.bool.isRequired,
  aRequiredButNullableNumberProp: BetterPropTypes.number.isRequiredButNullable,
}
```

You can also use them with all the functional validators:

- `objectOf(/* */).isRequiredButNullable`
- `shape(/* */).isOptionalButNotNull`
- etc

## Roadmap

- Integrate some [prop-types-extra](https://github.com/react-bootstrap/prop-types-extra) extra types:
  - `all(...validators)` => `BetterPropsTypes.all(...validators)`
  - `deprecated(validator, reason)` => `BetterPropsTypes.isDeprecated(validator, reason)`
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
[lnk-prop-types]: https://github.com/facebook/prop-types
