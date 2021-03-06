/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * Copyright (c) 2021-present, Ivan Gabriele.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
import { Requireable } from 'prop-types'

import type { Isable } from '../types'

/**
 * @see https://github.com/facebook/prop-types/blob/main/factoryWithTypeCheckers.js
 */
export default function createBetterChainableTypeChecker<T>(validate: Requireable<T>): Isable<T> {
  const makeCheckType =
    (is?: 'NULLABLE' | 'REQUIRED' | 'UNNULLABLE') =>
    (
      props: { [key: string]: any },
      propName: string,
      componentName: string,
      location: string,
      propFullName: string | null,
      // https://reactjs.org/warnings/dont-call-proptypes.html#fixing-the-false-positive-in-third-party-proptypes
      ...rest: any[]
    ): Error | null => {
      const finalPropFullName = propFullName !== null ? propFullName : propName
      const propValue = props[propName]

      if (propValue !== undefined && propValue !== null) {
        // https://reactjs.org/warnings/dont-call-proptypes.html#fixing-the-false-positive-in-third-party-proptypes
        return (validate as any)(props, propName, componentName, location, finalPropFullName, ...rest)
      }

      switch (is) {
        case 'NULLABLE':
          if (propValue === null) {
            return null
          }

          return new Error(
            `The ${location} \`${finalPropFullName}\` is marked as nullable in ` +
              `\`${componentName}\`, but its value is \`undefined\`.`,
          )

        case 'REQUIRED':
          if (propValue === null) {
            return new Error(
              `The ${location} \`${finalPropFullName}\` is marked as required ` +
                `in \`${componentName}\`, but its value is \`null\`.`,
            )
          }

          return new Error(
            `The ${location} \`${finalPropFullName}\` is marked as required in ` +
              `\`${componentName}\`, but its value is \`undefined\`.`,
          )

        case 'UNNULLABLE':
          if (propValue === null) {
            return new Error(
              `The ${location} \`${finalPropFullName}\` is marked as NOT null ` +
                `in \`${componentName}\`, but its value is \`null\`.`,
            )
          }

          return null

        default:
          return null
      }
    }

  const chainedCheckType: Isable<T> = Object.assign(makeCheckType(), {
    isOptionalButNotNull: makeCheckType('UNNULLABLE'),
    isRequired: makeCheckType('REQUIRED'),
    isRequiredButNullable: makeCheckType('NULLABLE'),
  })

  return chainedCheckType
}
