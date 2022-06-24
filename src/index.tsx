import React from 'react'
import {
  createRoot,
  Root,
} from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

let root: Root | null = null
// @ts-ignore
window['renderRestaurants'] = (containerId: string, history: any = {}) => {
  console.log(containerId, history, 'APP 1')
  root = createRoot(
    document.getElementById(containerId) as HTMLElement,
  )
  root.render(
    <BrowserRouter
      window={ window }
      basename={ history.location.pathname }
    >
      <App />
    </BrowserRouter>,
  )
}

// @ts-ignore
window['unmountRestaurants'] = () => {
  if (root) {
    root.unmount()
  }
  root = null
}
