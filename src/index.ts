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

type ArrayOf = <T>(type: Validator<T>) => Isable<T[]>
const arrayOf: ArrayOf = type => createBetterChainableTypeChecker(PropTypes.arrayOf(type))

const element: Isable<ReactElementLike> = createBetterChainableTypeChecker(PropTypes.element)

const elementType: Isable<ReactComponentLike> = createBetterChainableTypeChecker(PropTypes.elementType)

type InstanceOf = <T>(expectedClass: new (...args: any[]) => T) => Isable<T>
const instanceOf: InstanceOf = expectedClass => createBetterChainableTypeChecker(PropTypes.instanceOf(expectedClass))

const node: Isable<ReactNodeLike> = createBetterChainableTypeChecker(PropTypes.node)

type ObjectOf = <T>(type: Validator<T>) => Isable<{ [K in keyof any]: T }>
const objectOf: ObjectOf = type => createBetterChainableTypeChecker(PropTypes.objectOf(type))

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
