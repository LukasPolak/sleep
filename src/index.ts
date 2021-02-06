export function sleep<T>(ms: number): Promise<T> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
