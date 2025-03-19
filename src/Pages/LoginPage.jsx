import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import {Mail, Lock, Loader} from "lucide-react";
import { Link } from 'react-router-dom';
import Input from '../Components/Input';
import { useAuthStore } from '../Store/authStore';
import  toast  from 'react-hot-toast';

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, error, isLoading, message} = useAuthStore();

      
  // handle login
  const handleLogin = async (e) =>{
    e.preventDefault();

    await login(email, password);

  }

  
 
  return (
    <>
      <motion.div 
      initial={{opacity : 0, y : 20}}
      animate={{opacity : 1, y : 0}}
      transition={{duration : 0.5}}
      className="max-w-md m-auto w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

         <div className="p-8">
         <h2 className='text-4xl md:text-3xl sm:text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text m-auto'>
            Wellcome Back
        </h2>

          <form onSubmit={handleLogin}>
             <Input icon={Mail} 
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />

            <Input icon={Lock} 
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             />

              <div className='flex justify-between mb-6'>
                  <Link to="/forgot-password" className='text-sm text-green-400 hover:underline'>Forgot Password</Link>
              </div>

              {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
             

                  <motion.button className='mt-5 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg shadow-lg font-bold hover:from-green-600 hover:to-emerald-700 hover:cursor-pointer focus:outline-none focus-ring-2 focus:ring-green-500 focus-ring-offset-2 focus:ring-offset-gray-900 transition duration-200' whileHover={{scale : 1.05}}
                                    whileTap={{scale : 0.98}}
                                    type="submit" disabled={isLoading}>
                                       {isLoading ? <Loader className='w-6 h-6 animate-spin text-center mx-auto' /> : "Login"}
                                    </motion.button>

          </form>

         </div>

         <div className="px-8 py-4 bg-gray-900  bg-opacity-50 flex justify-center">
                        <p className='tex-sm text-gray-400'>
                           Don't have an account? {''} <Link to={"/signup"} className='text-green-500 hover:underline'>Sign Up</Link>
                        </p>
                    </div>

      </motion.div>
    </>
  )
}

export default LoginPage
