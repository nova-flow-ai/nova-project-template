import {useEffect} from 'react'
import AStore from 'src/components/ComponentDemo/Store'


import classNames from 'classnames'
import sm from './index.module.scss'

interface IComponentDemoProps {
  listCount?: number
}

let propsDefault: IComponentDemoProps = {}


const ComponentDemo = (originProps: IComponentDemoProps) => {
  const props = {...propsDefault, ...originProps}
  console.log('ComponentDemo props', props)
  const AState = AStore.state
  useEffect(() => {
    AStore.setLoveWall()
  }, [])
  return <div className={classNames(sm.wrap)}>hello23</div>
}

export default ComponentDemo
