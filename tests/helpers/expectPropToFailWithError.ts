import { Validator } from 'prop-types'

declare const console: {
  error: jest.Mock
}

export default function expectPropToFailWithError<T>(
  declaration: Validator<T>,
  value: any,
  expectedMessage: string,
): void {
  // Reset the module registry - the cache of all required modules to isolate "prop-types" local state
  jest.resetModules()

  // eslint-disable-next-line global-require
  const PropTypes = require('prop-types')

  if (!jest.isMockFunction(console.error)) {
    console.error = jest.fn()
  }

  console.error.mockClear()

  const propTypes = {
    testProp: declaration,
  }

  const props = {
    testProp: value,
  }

  PropTypes.checkPropTypes(propTypes, props, 'prop', 'TestComponent')

  expect(console.error).toHaveBeenCalledTimes(1)
  expect(console.error).toHaveBeenCalledWith(`Warning: Failed prop type: ${expectedMessage}`)
}
