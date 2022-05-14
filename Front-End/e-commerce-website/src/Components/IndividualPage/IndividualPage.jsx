import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";




export const IndividualPage=()=>{
   const[data,setData]=useState({});
   const {id}=useParams;

   useEffect(()=>{
       datafn();
   },[]);

   const datafn=()=>{
       axios.get("http://localhost:2345/products/id").then(({data})=>{
           setData(data);
       }).catch((err)=>{
           console.log(err.message);
       });
   }


    return(
        <div>

        </div>
    )
}