import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.oneOfType()', () => {
  const OF_TYPE = [BetterPropTypes.string]

  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = 'A string'

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.oneOfType(OF_TYPE),
      INVALID_VALUE,
      'Invalid prop `testProp` supplied to `TestComponent`.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE), undefined)
  })

  describe('.isOptionalButNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE).isOptionalButNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isOptionalButNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isOptionalButNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE).isOptionalButNotNull, undefined)
    })
  })

  describe('.isRequiredButNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE).isRequiredButNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isRequiredButNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`.',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE).isRequiredButNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isRequiredButNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.oneOfType(OF_TYPE).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.oneOfType(OF_TYPE).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
