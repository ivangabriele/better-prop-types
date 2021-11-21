import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.shape()', () => {
  const SHAPE = {
    testKey: BetterPropTypes.string,
  }

  const INVALID_VALUE = { testKey: 42n ** 42n }
  const VALID_VALUE = { testKey: 'A string' }

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.shape(SHAPE), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.shape(SHAPE),
      INVALID_VALUE,
      'Invalid prop `testProp.testKey` of type `bigint` supplied to `TestComponent`, expected `string`.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.shape(SHAPE), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.shape(SHAPE), undefined)
  })

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.shape(SHAPE).isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp.testKey` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.shape(SHAPE).isNotNull, undefined)
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.shape(SHAPE).isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp.testKey` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.shape(SHAPE).isNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.shape(SHAPE).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp.testKey` of type `bigint` supplied to `TestComponent`, expected `string`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.shape(SHAPE).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
