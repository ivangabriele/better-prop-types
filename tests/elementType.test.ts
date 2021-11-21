import React from 'react'

import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.elementType', () => {
  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = () => React.createElement('div')

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.elementType, VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.elementType,
      INVALID_VALUE,
      'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.elementType, null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.elementType, undefined)
  })

  describe('.isOptionalButNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.elementType.isOptionalButNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isOptionalButNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isOptionalButNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.elementType.isOptionalButNotNull, undefined)
    })
  })

  describe('.isRequiredButNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.elementType.isRequiredButNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isRequiredButNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
      )
    })

    test('should pass with a null value', () => {
      expectPropToPass(BetterPropTypes.elementType.isRequiredButNullable, null)
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isRequiredButNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.elementType.isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
