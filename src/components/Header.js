import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux"
import {addUser,removeUser} from "../utils/userSlice"

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const user=useSelector((store)=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
        }
      });
      //unsubscrie when component unmounts
      return () => unsubscribe();
  },[]);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo" />
        {user && <div className="flex">
            <div className="w-10 h-15 py-4">
              <img alt="usericon" src={user?.photoURL}/>
            </div>
            <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
          </div>
        }
    </div>
  )
}

export default Header;