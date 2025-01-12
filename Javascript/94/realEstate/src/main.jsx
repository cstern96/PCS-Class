import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router';
import Home from './Home';
import Buy from './buy';
import Sell from './sell';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<App />>
          <Route index={true} element=<Home /> />
          <Route path="/buy" element=<Buy /> />
          <Route path="/sell" element=<Sell /> />
        </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)

const router = createBrowserRouter([
  {
  path: "/",
  element: <App />,
  children: [
    {
      index:true,
      element: <Home />
    },
    {
      path: "/buy",
      element: <Buy />
    },
    {
      path: "/sell",
      element: <Sell />
    }
  ]
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
