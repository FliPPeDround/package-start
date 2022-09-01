import path from 'path'
import fs from 'fs'

export default () => {
  return {
    type: 'input',
    name: 'ProjectName',
    default: 'statet-template',
    message: 'Project name:',
    validate(value: string) {
      const cwd = process.cwd()
      const targetPath = path.join(cwd, value)
      const isTemplateExit = fs.existsSync(targetPath)
      if (!isTemplateExit)
        return true
      return `Target directory "${value}" is exist. please enter again and continue`
    },
  }
}
