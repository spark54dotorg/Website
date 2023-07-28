import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import './index.css';
import './input.css';
import './output.css';
import Routes from './routes';

export const Router = createBrowserRouter(Routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
