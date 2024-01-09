import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, MobilePayment } from './Pages';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "mobilePayment/:deepLink",
      element: <MobilePayment />
    }
  ]);
  return (
    <div className='align'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;