import axios from "axios";
import { useState } from "react";
import "./LogIn.css";

export const LogIn=()=>{
    
    const[form,setform]=useState({
        email:"",
        password:"",
    });
    
    const handleform=(event)=>{
        const{className,value}=event.target;
        setform({...form,[className]:value});
    }

    const handleformsubmission=async (event)=>{
        event.preventDefault();
       
       const formdata=JSON.stringify(form);    
       const result=await fetch("http://localhost:2345/logIn",{
            method:"POST",
            body:formdata,
            headers:{
                "Content-Type":"application/json"
            }
       });
       const data=await result.json();
       if(data.status===0){
           alert("Please Enter valid Email or Password");
       }
       if(data.user){
          localStorage.setItem('user',JSON.stringify(data.user));
       }
         
        // axios is not working

        // axios.post("http://localhost:2345/logIn",form).then(({data})=>{
        //     console.log(data);
        // })
    };

    return(
        <div className="log-in-main-div">
             <img className="log-in-logo-image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU" 
             alt="" />
             <h1 className="log-in-name">Log-In</h1>
             <form className="log-in-info">
                 <label>Email</label><br />
                 <input type="text" onChange={handleform} className="email" placeholder="Enter your email" /><br />
                 <label>Password</label><br />
                 <input type="text" onChange={handleform} className="password" placeholder="Enter the password" /><br />
                 <input type="submit" onClick={handleformsubmission} id="log-in-submit"/>
             </form>
             <div>
                 <h3>OR</h3>
                 <div className="log-in-with-google">
                   <h2>Continue With</h2>
                   <img src="https://masai-myntra-clone.netlify.app/images/google.png" alt="" />
                 </div>
             </div>
        </div>
    )
}