import React from 'react'

import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('elementType', () => {
  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = () => React.createElement('div')

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.elementType.isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.elementType.isNotNull, undefined)
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.elementType.isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement type.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.elementType.isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.elementType.isNullable, null)
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
