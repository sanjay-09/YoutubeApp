import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import appStore from "./Redux/navStore";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Watcher from "./Components/Watcher";
import Main from "./Components/Main";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Main/>
      },
      {
        path:"/watch",
        element:<Watcher/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={appStore}>
   
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
