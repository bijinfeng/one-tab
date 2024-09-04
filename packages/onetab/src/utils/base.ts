import type { Arrayable, Nullable } from '../types/general'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array
 */

export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  if (array === null || array === undefined) {
    array = []
  }

  if (Array.isArray(array)) {
    return array
  }

  return [array]
}
