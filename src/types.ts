// eslint-disable-next-line import/no-extraneous-dependencies
import { Requireable, Validator } from 'prop-types'

export interface Isable<T> extends Requireable<T> {
  /** Can be undefined but NOT null. */
  isNotNull: Validator<NonNullable<T>>
  /** Is required but can be null. */
  isNullable: Validator<NonNullable<T>>
}
