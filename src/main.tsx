import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import './index.css';
import './input.css';
import './output.css';
import Routes from './routes';
import Navbar from './components/navbar/index.tsx';


export const Router = createBrowserRouter(Routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
    <RouterProvider router={Router}/>
  </React.StrictMode>,
)
