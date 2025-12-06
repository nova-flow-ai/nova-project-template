import ShowCase from 'AstroShowCase/ShowCase'
import {createRoot} from 'react-dom/client'
import {AstroConfig, ComponentDebugMap, componentList} from './showCaseConfig'

const root = createRoot(document.getElementById('emp-root')!)
root.render(
  <ShowCase
    componentList={componentList}
    ComponentDebugMap={ComponentDebugMap}
    AstroConfig={AstroConfig}
    localScope={process.env.shareName}
  />,
)
