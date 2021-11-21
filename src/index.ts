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

// —————————————————————————————————————————————————————————————————————————————
// Primitive validators

const array: Isable<any[]> = createBetterChainableTypeChecker(PropTypes.array)
const bool: Isable<boolean> = createBetterChainableTypeChecker(PropTypes.bool)
const func: Isable<(...args: any[]) => any> = createBetterChainableTypeChecker(PropTypes.func)
const number: Isable<number> = createBetterChainableTypeChecker(PropTypes.number)
const object: Isable<object> = createBetterChainableTypeChecker(PropTypes.object)
const string: Isable<string> = createBetterChainableTypeChecker(PropTypes.string)
const symbol: Isable<symbol> = createBetterChainableTypeChecker(PropTypes.symbol)

// —————————————————————————————————————————————————————————————————————————————
// Functional validators

const any: Isable<any> = createBetterChainableTypeChecker(PropTypes.any)

export type ArrayOfValidator = <T>(type: Validator<T>) => Isable<T[]>
const arrayOf: ArrayOfValidator = type => createBetterChainableTypeChecker(PropTypes.arrayOf(type))

const element: Isable<ReactElementLike> = createBetterChainableTypeChecker(PropTypes.element)

const elementType: Isable<ReactComponentLike> = createBetterChainableTypeChecker(PropTypes.elementType)

export type InstanceOfValidator = <T>(expectedClass: new (...args: any[]) => T) => Isable<T>
const instanceOf: InstanceOfValidator = expectedClass =>
  createBetterChainableTypeChecker(PropTypes.instanceOf(expectedClass))

const node: Isable<ReactNodeLike> = createBetterChainableTypeChecker(PropTypes.node)

export type ObjectOfValidator = <T>(type: Validator<T>) => Isable<{ [K in keyof any]: T }>
const objectOf: ObjectOfValidator = type => createBetterChainableTypeChecker(PropTypes.objectOf(type))

export type OneOfValidator = <T>(types: ReadonlyArray<T>) => Isable<T>
const oneOf: OneOfValidator = types => createBetterChainableTypeChecker(PropTypes.oneOf(types))

export type OneOfTypeValidator = <T extends Validator<any>>(types: T[]) => Requireable<NonNullable<InferType<T>>>
const oneOfType: OneOfTypeValidator = Object.assign(PropTypes.oneOfType)

export type ShapeValidator = <P extends ValidationMap<any>>(type: P) => Isable<InferProps<P>>
const shape: ShapeValidator = type => createBetterChainableTypeChecker(PropTypes.shape(type))

export type ExactValidator = <P extends ValidationMap<any>>(type: P) => Isable<Required<InferProps<P>>>
const exact: ExactValidator = type => createBetterChainableTypeChecker(PropTypes.exact(type))

// —————————————————————————————————————————————————————————————————————————————
// Named default export

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
