
import {Routes,Route} from "react-router-dom"
import { Home } from "./Home/Home"
import { IndividualPage } from "./IndividualPage/IndividualPage";
import { Products } from "./Products/Products";
import { SignIN } from "./SignUp/SignUp";
import { SignUp } from "./SignUp/SignUp";
import { LogIn } from "./LogIn/LogIn";

export const AllRoutes=()=>{


    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<IndividualPage/>}/> 
                <Route path="/signUp" element={<SignUp/>} />
                <Route path="/logIn" element={<LogIn/>}/>
            </Routes>
        </div>
    )
}