import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
