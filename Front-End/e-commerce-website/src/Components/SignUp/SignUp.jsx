



import "./SignUp.css";



export const SignUp=()=>{




    return(
        <div className="sign-up-main-div">
             <img className="sign-up-logo-image"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCFBaj928OdJ7RTEi8gJFPvHphBLxZv0fpA&usqp=CAU" 
             alt="" />
             <h1 className="sign-up-name">Sign-Up</h1>
             <form className="sign-up-info">
                 <label>First-Name</label><br />
                 <input type="text" className="sign-up-first-name" placeholder="Enter the first name" /><br />
                 <label>Last-Name</label><br />
                 <input type="text" className="sign-up-last-name" placeholder="Enter the last name" /><br />
                 <label>Email</label><br />
                 <input type="text" className="sign-up-email" placeholder="Enter the your email" /><br />
                 <label>Password</label><br />
                 <input type="text" className="sign-up-password" placeholder="Enter the password" /><br />
                 <input type="submit" id="sign-up-submit"/>
             </form>
        </div>
    )
}