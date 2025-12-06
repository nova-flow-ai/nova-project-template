import type {IComponentDebugItem, showComponentConfig} from 'AstroShowCase/ShowCase'
import {lazy} from 'react'

export const componentList: {[key: string]: showComponentConfig} = {
  ComponentDemo: {
    name: 'ComponentDemo',
    path: './ComponentDemo',
    component: lazy(() => import('src/components/ComponentDemo')),
  },
}

export const ComponentDebugMap: Record<string, IComponentDebugItem> = {
  './ComponentDemo': {
    isLocalDebug: true,
  },
}

export const AstroConfig: {env: 'test' | 'prod'; render: 'latest' | 'main'} = {
  render: 'main',
  env: 'prod',
}
