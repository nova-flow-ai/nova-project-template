import AstroConfig, {type EMPConfigExport} from '@astro/cli/config'

const exposes = {}

const remotes = {}

export default AstroConfig.biz({
  exposes,
  remotes,
  useRem: true,
  mode: 'reactCDN',
  useTailwindcss: true,
}).config((): EMPConfigExport => {
  return {
    debug: {
      showRsconfig: '.rs.json',
    },
  }
})
