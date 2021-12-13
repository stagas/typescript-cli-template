#!/usr/bin/env node

// this is the entry point for the "bin" aka the cli app
// normally this shouldn't require any changes

import { decarg } from 'decarg'
import { run, Options } from '.'

const options = decarg(new Options())!

run(options)
