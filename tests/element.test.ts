import React from 'react'

import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('element', () => {
  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = React.createElement('div')

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.element.isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.element.isNotNull, undefined)
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.element.isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.element.isNullable, null)
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.element.isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
