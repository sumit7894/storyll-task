import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
