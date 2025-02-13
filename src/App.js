
 import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Store from './utils/Store';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import MainContainer from './Components/mainContainer';
import Watch from './Components/Watch';

function App() {
  const appRouter=createBrowserRouter([{
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:"/watch",
        element:<Watch/>
      }
    ]
 }])
  return (
    
    
    <div>
      <Provider store={Store}>
       
      <Head/>
      <RouterProvider router={appRouter}/>
      </Provider> 
     
    </div>
  );
}

export default App;
