import React from 'react'

import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.element', () => {
  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = React.createElement('div')

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.element, VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.element,
      INVALID_VALUE,
      'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.element, null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.element, undefined)
  })

  describe('.isOptionalButNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.element.isOptionalButNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isOptionalButNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isOptionalButNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.element.isOptionalButNotNull, undefined)
    })
  })

  describe('.isRequiredButNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.element.isRequiredButNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isRequiredButNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` of type `bigint` supplied to `TestComponent`, expected a single ReactElement.',
      )
    })

    test('should pass with an null value', () => {
      expectPropToPass(BetterPropTypes.element.isRequiredButNullable, null)
    })

    test('should fail with a undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.element.isRequiredButNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
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
