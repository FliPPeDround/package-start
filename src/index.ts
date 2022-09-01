import path from 'path'
import { fileURLToPath } from 'url'
import pc from 'picocolors'
import fs from 'fs-extra'
import questions from './questions'
import initCli from './initCac'

// init cac
initCli()

const { readJsonSync } = fs

const __dirname = fileURLToPath(import.meta.url)

const p = path.join(__dirname, '../../package.json')
const pkg = readJsonSync(p)
// eslint-disable-next-line no-console
console.log(pc.green(`Round-Start v-${pkg.version}`))

const answers = await questions()

const cwd = process.cwd()
const targetPath = path.join(cwd, answers.ProjectName)

// eslint-disable-next-line no-console
console.log(targetPath)

