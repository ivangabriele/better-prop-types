import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('instanceOf', () => {
  const OF_CLASS = Map

  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = new Map()

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.instanceOf(OF_CLASS),
      INVALID_VALUE,
      'Invalid prop `testProp` of type `BigInt` supplied to `TestComponent`, expected instance of `Map`.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS), undefined)
  })

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS).isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `BigInt` supplied to `TestComponent`, expected instance of `Map`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS).isNotNull, undefined)
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS).isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `BigInt` supplied to `TestComponent`, expected instance of `Map`.',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS).isNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.instanceOf(OF_CLASS).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `BigInt` supplied to `TestComponent`, expected instance of `Map`.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.instanceOf(OF_CLASS).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
