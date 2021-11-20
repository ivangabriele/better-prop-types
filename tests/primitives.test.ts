import BetterPropTypes from '../src'
import expectPropToFailWithError from './helpers/expectPropToFailWithError'
import expectPropToPass from './helpers/expectPropToPass'

const METHODS = [
  {
    name: 'array',
    type: 'array',
    validValue: [],
  },
  {
    name: 'bool',
    type: 'boolean',
    validValue: true,
  },
  {
    name: 'func',
    type: 'function',
    validValue: () => undefined,
  },
  {
    name: 'number',
    type: 'number',
    validValue: 42,
  },
  {
    name: 'object',
    type: 'object',
    validValue: {},
  },
  {
    name: 'string',
    type: 'string',
    validValue: 'A string',
  },
  {
    name: 'symbol',
    type: 'symbol',
    validValue: Symbol('A symbol'),
  },
]

METHODS.forEach(({ name, type, validValue }) => {
  describe(name, () => {
    const INVALID_VALUE = 42n ** 42n

    describe('.isNotNull', () => {
      test('should pass with a valid value', () => {
        expectPropToPass(BetterPropTypes[name].isNotNull, validValue)
      })

      test('should fail with an invalid value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isNotNull,
          INVALID_VALUE,
          `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
        )
      })

      test('should pass with an undefined value', () => {
        expectPropToPass(BetterPropTypes[name].isNotNull, undefined)
      })

      test('should fail with a null value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isNotNull,
          null,
          'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
        )
      })
    })

    describe('.isNullable', () => {
      test('should pass with a valid value', () => {
        expectPropToPass(BetterPropTypes[name].isNullable, validValue)
      })

      test('should fail with an invalid value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isNullable,
          INVALID_VALUE,
          `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
        )
      })

      test('should fail with a null value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isNullable,
          undefined,
          'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
        )
      })

      test('should pass with an undefined value', () => {
        expectPropToPass(BetterPropTypes[name].isNullable, null)
      })
    })

    describe('.isRequired', () => {
      test('should pass with a valid value', () => {
        expectPropToPass(BetterPropTypes[name].isRequired, validValue)
      })

      test('should fail with an invalid value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isRequired,
          INVALID_VALUE,
          `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
        )
      })

      test('should fail with a null value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isRequired,
          null,
          'The prop `testProp` is marked as required in `TestComponent`, but its value is `null`.',
        )
      })

      test('should fail with an undefined value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isRequired,
          undefined,
          'The prop `testProp` is marked as required in `TestComponent`, but its value is `undefined`.',
        )
      })
    })
  })
})
