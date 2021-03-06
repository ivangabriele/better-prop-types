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
  describe(`.${name}`, () => {
    const INVALID_VALUE = 42n ** 42n

    test('should pass with a valid value', () => {
      expectPropToPass(BetterPropTypes[name], validValue)
    })

    test('should fail with an invalid value', () => {
      expectPropToFailWithError(
        BetterPropTypes[name].isOptionalButNotNull,
        INVALID_VALUE,
        `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
      )
    })

    test('should fail with a null value', () => {
      expectPropToPass(BetterPropTypes[name], null)
    })

    test('should pass with an undefined value', () => {
      expectPropToPass(BetterPropTypes[name], undefined)
    })

    describe('.isOptionalButNotNull', () => {
      test('should pass with a valid value', () => {
        expectPropToPass(BetterPropTypes[name], validValue)
      })

      test('should fail with an invalid value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isOptionalButNotNull,
          INVALID_VALUE,
          `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
        )
      })

      test('should fail with a null value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isOptionalButNotNull,
          null,
          'The prop `testProp` is marked as NOT null in `TestComponent`, but its value is `null`.',
        )
      })

      test('should pass with an undefined value', () => {
        expectPropToPass(BetterPropTypes[name].isOptionalButNotNull, undefined)
      })
    })

    describe('.isRequiredButNullable', () => {
      test('should pass with a valid value', () => {
        expectPropToPass(BetterPropTypes[name].isRequiredButNullable, validValue)
      })

      test('should fail with an invalid value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isRequiredButNullable,
          INVALID_VALUE,
          `Invalid prop \`testProp\` of type \`bigint\` supplied to \`TestComponent\`, expected \`${type}\`.`,
        )
      })

      test('should pass with a null value', () => {
        expectPropToPass(BetterPropTypes[name].isRequiredButNullable, null)
      })

      test('should fail with an undefined value', () => {
        expectPropToFailWithError(
          BetterPropTypes[name].isRequiredButNullable,
          undefined,
          'The prop `testProp` is marked as nullable in `TestComponent`, but its value is `undefined`.',
        )
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
