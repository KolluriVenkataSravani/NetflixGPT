import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setSignInForm]=useState(true);
    const [errorMesssage, setErrorMessage]=useState(null);

    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" 
                alt="logo" />
        </div>
        <form onSubmit={(e)=>(e.preventDefault())} className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
            <h1 className="ont-bold text-3xl py-4">
                {isSignInForm? "Sign In":"Sign Up"}
            </h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" />}
            <input  type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
            <p className="text-red-500 font-bold text-lg py-2">{errorMesssage}</p>
            <button className="p-4 my-6 bg-red-700 w-full rounded-lg" >
                {isSignInForm? "Sign In":"Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                {isSignInForm? "New to Netflix? Sign Up Now":"Already Registered? Sign In"}
            </p>
        </form>
    </div>
  )
}

export default Login;