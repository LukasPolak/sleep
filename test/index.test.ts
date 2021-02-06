import { sleep } from '../src'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('sleep', () => {
  it('should be called once, after 500ms', () => {
    sleep(500)

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 500)
  })
})
