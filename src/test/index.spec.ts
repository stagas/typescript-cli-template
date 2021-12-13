import { run, Options } from '../'

describe('run', () => {
  it('works', () => {
    expect(run(new Options())).toEqual(true)
  })
})
