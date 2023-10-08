import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Form from "./Componets/LoginForm/LoginForm";

const App = () => {

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Form/>}></Route>
    )
)
    return (  
        <RouterProvider router={router}/>
    );
}
 
export default App;