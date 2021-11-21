import React from 'react'

import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

describe('.node', () => {
  const INVALID_VALUE = 42n ** 42n
  const VALID_VALUE = React.createElement('div')

  test('should pass with a valid value', () => {
    expectPropToPass(BetterPropTypes.node, VALID_VALUE)
  })

  test('should fail with an invalid value', () => {
    expectPropToFailWithError(
      BetterPropTypes.node,
      INVALID_VALUE,
      'Invalid prop `testProp` supplied to `TestComponent`, expected a ReactNode.',
    )
  })

  test('should fail with a null value', () => {
    expectPropToPass(BetterPropTypes.node, null)
  })

  test('should pass with an undefined value', () => {
    expectPropToPass(BetterPropTypes.node, undefined)
  })

  describe('.isNotNull', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.node.isNotNull, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isNotNull,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`, expected a ReactNode.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isNotNull,
        null,
        'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
      )
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes.node.isNotNull, undefined)
    })
  })

  describe('.isNullable', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.node.isNullable, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isNullable,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`, expected a ReactNode.',
      )
    })

    test('should pass with an null value', () => {
      expectPropToPass(BetterPropTypes.node.isNullable, null)
    })

    test('should fail with a undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isNullable,
        undefined,
        'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
      )
    })
  })

  describe('.isRequired', () => {
    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes.node.isRequired, VALID_VALUE)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isRequired,
        INVALID_VALUE,
        'Invalid prop `testProp` supplied to `TestComponent`, expected a ReactNode.',
      )
    })

    test('should fail with a null value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isRequired,
        null,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
      )
    })

    test('should fail with an undefined value', () => {
      expectPropToFailWithError(
        BetterPropTypes.node.isRequired,
        undefined,
        'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
      )
    })
  })
})
