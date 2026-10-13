import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
//npm install react-router-dom
function Main()
{
    return(
        <>
        <h2>Main Page</h2>
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            
        </BrowserRouter>
        </>
    );
}
export default Main;