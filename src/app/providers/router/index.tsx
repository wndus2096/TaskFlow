import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@app/providers/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: []
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
