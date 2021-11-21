import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.exact()', () => {
  const SHAPE = {
    testKey: BetterPropTypes.string,
  }

  const INVALID_VALUE = { extraKey: 'A string' }
  const VALID_VALUE = { testKey: 'A string' }

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.exact(SHAPE), VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.exact(SHAPE),
      INVALID_VALUE,
      [
        'Invalid prop `testProp` key `extraKey` supplied to `TestComponent`.',
        'Bad object: {',
        '  "extraKey": "A string"',
        '}',
        'Valid keys: [',
        '  "testKey"',
        ']',
      ].join('\n'),
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.exact(SHAPE), null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.exact(SHAPE), undefined)
  })

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.exact(SHAPE).isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isNotNull,
        INVALID_VALUE,
        [
          'Invalid prop `testProp` key `extraKey` supplied to `TestComponent`.',
          'Bad object: {',
          '  "extraKey": "A string"',
          '}',
          'Valid keys: [',
          '  "testKey"',
          ']',
        ].join('\n'),
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.exact(SHAPE).isNotNull, undefined)
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.exact(SHAPE).isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isNullable,
        INVALID_VALUE,
        [
          'Invalid prop `testProp` key `extraKey` supplied to `TestComponent`.',
          'Bad object: {',
          '  "extraKey": "A string"',
          '}',
          'Valid keys: [',
          '  "testKey"',
          ']',
        ].join('\n'),
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.exact(SHAPE).isNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.exact(SHAPE).isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isRequired,
        INVALID_VALUE,
        [
          'Invalid prop `testProp` key `extraKey` supplied to `TestComponent`.',
          'Bad object: {',
          '  "extraKey": "A string"',
          '}',
          'Valid keys: [',
          '  "testKey"',
          ']',
        ].join('\n'),
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.exact(SHAPE).isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
