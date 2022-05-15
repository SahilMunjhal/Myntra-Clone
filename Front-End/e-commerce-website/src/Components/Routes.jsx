
import {Routes,Route} from "react-router-dom"
import { Home } from "./Home/Home"
import { IndividualPage } from "./IndividualPage/IndividualPage";
import { Products } from "./Products/Products";


export const AllRoutes=()=>{


    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products/:id" element={<IndividualPage/>}/> 
            </Routes>
        </div>
    )
}