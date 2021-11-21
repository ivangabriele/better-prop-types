import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.oneOf()', () => {
  const INVALID_VALUE = 'An invalid string'
  const VALID_VALUES = ['A string', 42]
  const VALID_VALUE = 'A string'

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.oneOf(VALID_VALUES),
      INVALID_VALUE,
      'Invalid prop `testProp` of value `An invalid string` supplied to `TestComponent`, ' +
        'expected one of ["A string",42].',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES), undefined)
  })

  describe('.isOptionalButNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES).isOptionalButNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isOptionalButNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of value `An invalid string` supplied to `TestComponent`, ' +
          'expected one of ["A string",42].',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isOptionalButNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES).isOptionalButNotNull, undefined)
    })
  })

  describe('.isRequiredButNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES).isRequiredButNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isRequiredButNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of value `An invalid string` supplied to `TestComponent`, ' +
          'expected one of ["A string",42].',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES).isRequiredButNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isRequiredButNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOf(VALID_VALUES).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` of value `An invalid string` supplied to `TestComponent`, ' +
          'expected one of ["A string",42].',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOf(VALID_VALUES).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
