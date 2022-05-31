import axios from "axios";
import { useState } from "react";
import "./SignUp.css";



export const SignUp=()=>{
   const [form,setForm]=useState({
       first_name:"",
       last_name:"",
       email:"",
       password:"",
   });

   const handleform=(event)=>{
        const{className,value}=event.target;
        setForm({...form,[className]:value});
   };

   const handleformsubmission=async (event)=>{
       event.preventDefault();
       const formdata=JSON.stringify(form);


       let result=await fetch('http://localhost:2345/signUp',{
        method: "POST",
        body: formdata,
        headers: {
          "Content-Type": "application/json",
        },
       });
       let data=await result.json();
       console.log(data)

       if(data.status==0){
           alert('You are Already Registered');
       }else if (data.status==1){
           alert('You are successfully Registered');
       }
       
    //    "Axios" is not working

    //    axios.post("http://localhost:2345/signUp",form).then(({data})=>{
    //        console.log(data);
    //    })
   }
   
   console.log(form);


    return(
        <div className="sign-up-main-div">
             <img className="sign-up-logo-image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU" 
             alt="" />
             <h1 className="sign-up-name">Sign-Up</h1>
             <form onSubmit={handleformsubmission} className="sign-up-info">
                 <label>First-Name</label><br />
                 <input type="text" onChange={handleform} className="first_name" placeholder="Enter the first name" required /><br />
                 <label>Last-Name</label><br />
                 <input type="text" onChange={handleform} className="last_name" placeholder="Enter the last name" required /><br />
                 <label>Email</label><br />
                 <input type="text" onChange={handleform} className="email" placeholder="Enter the your email" required/><br />
                 <label>Password</label><br />
                 <input type="text" onChange={handleform} className="password" placeholder="Enter the password" required/><br />
                 <input type="submit" id="sign-up-submit"/>
             </form>
        </div>
    )
}