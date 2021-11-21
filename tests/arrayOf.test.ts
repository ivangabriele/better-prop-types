import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.arrayOf()', () => {
  const OF_TYPE = BetterPropTypes.string

  const INVALID_VALUE = [42n ** 42n]
  const VALID_VALUE = ['A string']

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.arrayOf(OF_TYPE),
      INVALID_VALUE,
      'Invalid prop `testProp[0]` of type `bigint` supplied to `TestComponent`, expected `string`.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE), undefined)
  })

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE).isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp[0]` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE).isNotNull, undefined)
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE).isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp[0]` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE).isNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.arrayOf(OF_TYPE).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp[0]` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.arrayOf(OF_TYPE).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
