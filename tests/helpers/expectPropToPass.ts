import PropTypes from 'prop-types'

declare const console: {
  error: jest.Mock
}

export default function expectPropToPass(declaration, value) {
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

  expect(console.error).not.toHaveBeenCalled()
}
