import React from 'react'
import ReactDOM from 'react-dom/client'
import {DefaultLayout} from '../components/index'
import GlobalStyled from "../styles/globalStyle";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyled />
    <DefaultLayout />
  </React.StrictMode>
)
