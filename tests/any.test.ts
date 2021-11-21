import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.any', () => {
  const VALID_VALUE = 'anything'

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.any, VALID_VALUE)
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.any, null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.any, undefined)
  })

  describe('.isOptionalButNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.any.isOptionalButNotNull, VALID_VALUE)
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.any.isOptionalButNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.any.isOptionalButNotNull, undefined)
    })
  })

  describe('.isRequiredButNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.any.isRequiredButNullable, VALID_VALUE)
    })

    test('should pass with an null value', () => {
      expectPropToPass(BetterPropTypes.any.isRequiredButNullable, null)
    })

    test('should fail with a undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.any.isRequiredButNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.any.isRequired, VALID_VALUE)
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.any.isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.any.isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
