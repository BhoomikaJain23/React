import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const anotherELement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser =" react";

const ReactElement =React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement}
    <App />
  </StrictMode>,
)
