export type Awaitable<T> = T | PromiseLike<T>
export type Nullable<T> = T | null | undefined
export type Arrayable<T> = T | Array<T>
export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

export type MutableArray<T extends readonly any[]> = {
  -readonly [k in keyof T]: T[k];
}

export interface Constructable {
  new(...args: any[]): any
}
