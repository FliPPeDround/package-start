import inquirer from 'inquirer'
import pkgName from './pkgName'
import pkgType from './pkgType'

export default () => {
  return inquirer.prompt([
    pkgName(),
    pkgType(),
  ])
}

