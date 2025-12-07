import AstroConfig, { EMPConfigExport, EMPConfigExportWithoutChain } from '@nova-flow/cli/config'

const exposes = {
  './ComponentDemo': './src/components/ComponentDemo',
}

const remotes = {}

export default AstroConfig.biz({
  exposes,
  remotes,
  useRem: true,
}).config((): EMPConfigExport => {
  return {
    debug: {
      showRsconfig: '.rs.json',
    },
  }
})
