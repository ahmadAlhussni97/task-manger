import React,{useEffect, useState} from 'react';
import axios from 'axios'
import ForgetPasswordForm from '../../components/forms/ForgetPasswordForm';

export default function ForgotPassword() {

  let forgetPasswordUrl='www.example.com'
  const [data,setData]=useState(null)
  const [error, setError] = useState({})
  const [isloading,setIsLoading]=useState(false)

  const handleLoading=(val)=>{
    setIsLoading(val)
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

    return errors;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget)
    setError(validateValues({email: data.get('email')}))
    setData({email: data.get('email')})
}


  useEffect(()=>{

    const sendData=(async()=>{
       
      handleLoading(true)
      setError({}) // remove error

      await axios.post(forgetPasswordUrl, data)
        .then(function (response) {
          console.log("Result : ")
        
        })
        .catch(function (error) {
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
    <ForgetPasswordForm handleSubmit={handleSubmit}  handleErorr={error} isloading={isloading} />
  )
}