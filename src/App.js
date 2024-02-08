
import { useCallback,useState,useEffect } from "react"
import BaseSignin from "./pages/BaseSignin"
import BasePages from './pages/BasePages'

export default function App() {

  const [isSingIn,setIsSingIn]=useState(false)
  const checkUserSignIn = useCallback (() => {
   
    if(!localStorage.getItem('token')) 
      logout()  // go to login route
     else
       setIsSingIn(true)  // login now OR already is login
      
},[])

const logout= useCallback (()=>{
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  setIsSingIn(false)
})

useEffect(() => {
    checkUserSignIn()
  }, []); 

  return (
    // <>
    //   {(isSingIn)? 
       <BasePages/> 
  //        :
  //     <BaseSignin/>}
  //  </>
  )

}


