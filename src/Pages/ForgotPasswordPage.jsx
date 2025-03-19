import React, { useState } from 'react';
import {motion} from "framer-motion";
import { useAuthStore } from '../Store/authStore';
import Input from '../Components/Input';
import { ArrowLeft, Loader, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const ForgotPasswordPage = () => {

   const [email, setEmail] = useState("");
   const [isSubmitted, setIsSubmitted] = useState(false);

   const {isLoading, forgotPassword} = useAuthStore();

  const handleSubmit = async (e) =>{
        e.preventDefault();

        await forgotPassword(email);
        setIsSubmitted(true)


  }

  return (
    <>
      
      <motion.div
      initial={{opacity : 0, y : 20}}
      animate={{opacity : 1, y : 0}}
      transition={{delay : 0.4}}
      className='max-w-md w-full mx-auto bg-gray-800 bg-opacity-500 backdrop-filter backdrop-blur-xl rounded-lg shadow-xl overflow-hidden'>
        
        <div className='pt-5'>
        <h2 className='text-3xl text-center font-semibold text-green-400 mb-3'>Forgot Password</h2>    
        </div>
    
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
               <p className='text-gray-300 mb-2 text-center p-3'>Enter your email address and we'll send you a link to reset your password</p>
               <Input
               icon={Mail}
               type="email"
               placeholder="Enter your email"
               onChange={(e) => setEmail(e.target.value)}
               required/>

                     <motion.button className='mt-5 w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg font-bold hover:from-green-600 hover:to-emerald-700 hover:cursor-pointer focus:outline-none focus-ring-2 focus:ring-green-500 focus-ring-offset-2 focus:ring-offset-gray-900 transition duration-200' whileHover={{scale : 1.05}}
                        whileTap={{scale : 0.98}}
                        type="submit" disabled={isLoading}>
                        {isLoading ? <Loader className='w-6 h-6 animate-spin text-center mx-auto' /> : "Send Reset Link"}
                    </motion.button>

            </form>
          ) : (
              <div className="text-center">
                  <motion.div
                  initial={{opacity : 0}}
                  animate={{scale : 1}}
                  transition={{type : "spring", stiffness : 500, damping : 30}}
                  className='w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4'>
                    
                    <Mail className='bg-green-500'/>
                  </motion.div>
                  <p className='text-gray-300 mb-6'>
                    If and account exists for {email}, you will receive an email with a link to reset your link shortly
                  </p>
              </div>
          )}
      
           <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
              <Link to={"/login"} className="text-sm text-green-400 hover:underline flex items-center">
                 <ArrowLeft className='h-4 w-4 mr-2'/> Back to Login
              </Link>
           </div>
         
      </motion.div>

    </>
  )
}

export default ForgotPasswordPage
   