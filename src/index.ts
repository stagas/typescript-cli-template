import { arg } from 'decarg'

export class Options {
  @arg('<file> [<file>, ...]', 'Files to process')
  file?: string[]

  @arg('--', '[...rest]', 'The rest of the arguments')
  passArgs = []

  @arg('-f', '--flag', 'Flag about something')
  flag = false

  @arg('-c', '--count', 'How many times')
  count = 42

  @arg('-C', 'Choose color', ['blue', 'red', 'yellow'])
  color = 'blue'

  @arg('-s', '--string', 'Some string')
  string = 'hmm'

  @arg('--meh', 'Meh')
  meh: string[] = []

  static examples = {
    '-f foo': 'Convert foo by force',
    '-f foo -s': 'Convert foo by force smoothly',
  }
}

/**
 * Runs the cli app.
 *
 * @param options
 * @param options.file Files to process
 * @param options.rest The rest of the arguments
 * @param options.flag Flag about something
 * @param options.count How many times
 * @param options.color Color to use
 * @param options.string Some string
 * @param options.meh Some array of strings
 */
export const run = (options: Options) => {
  console.log('received options:', options)
  return true
}
