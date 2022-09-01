import cac from 'cac'

const cli = cac()
cli.version('0.1.0')
cli.help()

export default () => {
  cli.parse()
}
