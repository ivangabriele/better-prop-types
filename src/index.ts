// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes, {
  InferProps,
  InferType,
  ReactComponentLike,
  ReactElementLike,
  ReactNodeLike,
  Requireable,
  ValidationMap,
  Validator,
} from 'prop-types'

import createBetterChainableTypeChecker from './helpers/createChainableTypeChecker'
import { Isable } from './types'

const array: Isable<any[]> = createBetterChainableTypeChecker(PropTypes.array)
const bool: Isable<boolean> = createBetterChainableTypeChecker(PropTypes.bool)
const func: Isable<(...args: any[]) => any> = createBetterChainableTypeChecker(PropTypes.func)
const number: Isable<number> = createBetterChainableTypeChecker(PropTypes.number)
const object: Isable<object> = createBetterChainableTypeChecker(PropTypes.object)
const string: Isable<string> = createBetterChainableTypeChecker(PropTypes.string)
const symbol: Isable<symbol> = createBetterChainableTypeChecker(PropTypes.symbol)

const any: Requireable<any> = Object.assign(PropTypes.any)

const arrayOf: <T>(type: Validator<T>) => Requireable<T[]> = Object.assign(PropTypes.arrayOf)

const element: Requireable<ReactElementLike> = Object.assign(PropTypes.element)

const elementType: Requireable<ReactComponentLike> = Object.assign(PropTypes.elementType)

type InstanceOf = <T>(expectedClass: new (...args: any[]) => T) => Requireable<T>
const instanceOf: InstanceOf = Object.assign(PropTypes.instanceOf)

const node: Requireable<ReactNodeLike> = Object.assign(PropTypes.node)

type ObjectOf = <T>(type: Validator<T>) => Requireable<{ [K in keyof any]: T }>
const objectOf: ObjectOf = Object.assign(PropTypes.objectOf)

type OneOf = <T>(types: ReadonlyArray<T>) => Isable<T>
const oneOf: OneOf = types => createBetterChainableTypeChecker(PropTypes.oneOf(types))

type OneOfType = <T extends Validator<any>>(types: T[]) => Requireable<NonNullable<InferType<T>>>
const oneOfType: OneOfType = Object.assign(PropTypes.oneOfType)

type Shape = <P extends ValidationMap<any>>(type: P) => Requireable<InferProps<P>>
const shape: Shape = Object.assign(PropTypes.shape)

type Exact = <P extends ValidationMap<any>>(type: P) => Requireable<Required<InferProps<P>>>
const exact: Exact = Object.assign(PropTypes.exact)

const BetterPropTypes = {
  any,
  array,
  arrayOf,
  bool,
  element,
  elementType,
  exact,
  func,
  instanceOf,
  node,
  number,
  object,
  objectOf,
  oneOf,
  oneOfType,
  shape,
  string,
  symbol,
}

export default BetterPropTypes
