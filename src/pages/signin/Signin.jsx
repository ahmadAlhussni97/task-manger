import React,{useEffect, useState} from 'react';
import axios from 'axios'
import SigninForm from '../../components/forms/SigninForm';


export default function Signin() {

  let loginUrl='www.example.com'
  const [data,setData]=useState(null)
  const [error, setError] = useState({})
  const [isloading,setIsLoading]=useState(false)

  const handleLoading=(val)=>{
    setIsLoading(val)
  }

  function validPassword(password) {

    var lowerCase = /[a-z]/g
    var upperCase = /[A-Z]/g
    var numbers = /[0-9]/g
    var new_pass = password

    if (!new_pass.match(lowerCase)) {
      return {message:"Password should contains lowercase letters!",valid:false}
    } else if (!new_pass.match(upperCase)) {
      return {message:"Password should contain uppercase letters!",valid:false}
    } else if (!new_pass.match(numbers)) {
       return {message:"Password should contains numbers also!",valid:false}
    } else if (new_pass.length < 10) {
      return {message:"Password length should be more than 10.",valid:false}
    }

    return {message:"",valid:true}
 }


  function isValidEmail(email) {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  const validateValues = (inputValues) => {

    let errors = {valid:false}
  
    if (!isValidEmail(inputValues.email)) {
      errors.valid=true
      errors.email = "Email is Invalid"
    }

    if (!validPassword(inputValues.password).valid) {
      errors.valid=true
      errors.password = validPassword(inputValues.password).message
    }

    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    setError(validateValues({email: data.get('email'), password: data.get('password'),remember:data.get('remember')}))
    setData({email: data.get('email'), password: data.get('password'),remember:data.get('remember')})
}

const storeUserInfo=(data)=>{
  localStorage.setItem("token",data["token"])
  localStorage.setItem("user",data["user"])
}

  useEffect(()=>{

    const sendData=(async()=>{
       
      handleLoading(true)
      setError({}) // remove error

      await axios.post(loginUrl, data)
        .then(function (response) {
          console.log("Result : ")
            // to do here
            storeUserInfo(response.data)
            //  end to do
        })
        .catch(function (error) {
          console.log("Faield")
          setError({catchingError:error.message})
        });

      
    setTimeout(() => {
      handleLoading(false)
      },500); // 500 ms for load data and remove loading

    })
    
    if(error.valid != null && error.valid != undefined && error.valid===false) // not find any error
       sendData() // invocked function

 },[data])
 

  return (
    <SigninForm handleSubmit={handleSubmit}  handleErorr={error} isloading={isloading} />
  )
}