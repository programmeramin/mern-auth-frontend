import React, { useState } from 'react'
import {motion} from "framer-motion"
import { useAuthStore } from '../Store/authStore';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../Components/Input';
import { Lock } from 'lucide-react';
import toast from "react-hot-toast";

const ResetPasswordPage = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {resetPassword, error, isLoading, message} = useAuthStore();

    const {token} = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
      e.preventDefault();

      if(password !== confirmPassword){
       alert("Password did't match")
       return
      }
  
      try {
        await resetPassword(token, password)

      toast.success(`Password reset successfully, redirecting to login page.....`);

      setTimeout(() =>{

        navigate("/login");

      }, 2000);
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Error resetting password")
        
      }

    }

  return (
    <>
      
      <motion.div
      initial={{opacity : 0, y : 20}}
      animate={{opacity : 1, y : 0}}
      transition={{duration : 0.5}}
      className="max-w-md m-auto w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
            
            <div className="p-8">
            <h2 className='text-3xl text-center font-semibold text-green-400 mb-3'>Reset Password</h2> 
            </div>

            {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
            {message && <p className='text-green-500 text-sm mb-4'>{message}</p>}

            <form onSubmit={handleSubmit}>
               <Input
               icon={Lock}
               type="password"
               placeholder="New Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required/>

              <Input
               icon={Lock}
               type="password"
               placeholder="Confirm New Password"
               value={confirmPassword}
               onChange={(e) => setConfirmPassword(e.target.value)}
               required/>
 
              <motion.button
              whileHover={{scale : 1.05}}
              whileTap={{scale : 0.98}}
              className='w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg font-bold hover:from-green-600 hover:to-emerald-700 hover:cursor-pointer focus:outline-none focus-ring-2 focus:ring-green-500 focus-ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
              type="submit"
              disabled={isLoading}>
                 {isLoading ? "Resetting..." : "Set New Password"}
              </motion.button>

            </form>

      </motion.div>

    </>
  )
}

export default ResetPasswordPage
