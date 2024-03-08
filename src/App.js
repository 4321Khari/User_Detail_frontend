import './App.css';
import NavigationBar from './components/Navbar.js';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from './components/dashboard.js';
import Form from './components/form.js';
import DataContext from './components/context.js';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <NavigationBar />, children: [
        { path: "/", element: <Dashboard /> },
        { path: "add", element: <Form /> }
      ]
    }

  ])
  return (
    <>
      <DataContext>
        <div>

          <RouterProvider router={router}>
          </RouterProvider>
        </div>
      </DataContext>
    </>
  );
}

export default App;
