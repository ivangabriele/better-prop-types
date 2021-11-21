// eslint-disable-next-line import/no-extraneous-dependencies
import { Requireable, Validator } from 'prop-types'

export interface Isable<T> extends Requireable<T | undefined | null> {
  /** Can be undefined but NOT null. */
  isOptionalButNotNull: Validator<T | undefined>
  /** Is required but can be null. */
  isRequiredButNullable: Validator<T | null>
}
