



import "./LogIn.css";



export const LogIn=()=>{




    return(
        <div className="log-in-main-div">
             <img className="log-in-logo-image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU" 
             alt="" />
             <h1 className="log-in-name">Log-In</h1>
             <form className="log-in-info">
                 <label>Email</label><br />
                 <input type="text" className="log-in-email" placeholder="Enter your email" /><br />
                 <label>Password</label><br />
                 <input type="text" className="log-in-password" placeholder="Enter the password" /><br />
                 <input type="submit" id="log-in-submit"/>
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