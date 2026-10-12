import Login from "./Login";
import Logout from "./Logout";

function Verify({isLoggedIn})
{

    return isLoggedIn?<Login/>:<Logout/>
    // if(isLoggedIn)
    // {
    //    return <Login/>
    // }
    // else{
    //         return <Logout/>
    // }
}
export default Verify;