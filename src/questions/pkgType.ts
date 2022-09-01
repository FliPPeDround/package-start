export default () => {
  return {
    type: 'list',
    name: 'pkgType',
    message: 'Project Type:',
    choices: [
      {
        name: 'vanilla-ts',
        value: 'vanilla-ts',
        checked: true,
      },
      {
        name: 'cli',
        value: 'cli',
      },
      {
        name: 'unplugin',
        value: 'unplugin',
      },
    ],
  }
}
