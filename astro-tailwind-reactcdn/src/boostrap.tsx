import {createRoot} from 'react-dom/client'
import 'src/css/tw_base.css'
import ComponentDemo from 'src/components/ComponentDemo'

const root = createRoot(document.getElementById('emp-root')!)
root.render(
  <div className="tailwindcss_cope_wrap">
    <ComponentDemo />
  </div>,
)
