import React, { use } from 'react'
import {motion} from "framer-motion"
import { useAuthStore } from '../Store/authStore'
import { formatDate } from '../utils/date.js';

const DashboardPage = () => {

   const {user, logout} = useAuthStore();

   const handleLogout =  () =>{
     logout();
   }

  return (
    <>
      <motion.div 
      initial={{opacity : 0, y : 20}}
      animate={{opacity : 1, y : 0}}
      exit={{opacity : 0, scale : 0.9}}
      transition={{duration : 0.5}}
      className="max-w-md m-auto w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

      <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text'>Dashboard</h2>

           <div className="space-y-6">
                <motion.div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700'
                initial={{opacity : 0, y : 20}}
                animate={{opacity : 1, y : 0}}
                transition={{delay : 0.2}}>

                    <h3 className='text-3xl font-semibold text-green-400 mg-3'>Profile Information</h3>
                    <p className='text-gray-300'>Name : {user.name}</p>
                    <p className='text-gray-300'>Name : {user.email}</p>

                </motion.div>
                <motion.div className='p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 mb-5'
                initial={{opacity : 0, y : 20}}
                animate={{opacity : 1, y : 0}}
                transition={{delay : 0.4}}>
                     
                     <h3 className='text-3xl font-semibold text-green-400 mb-3'>Account Activity</h3>
                      <p className='text-gray-300'>
                        <span className='font-bold'>Joined : </span>
                        {new Date(user.createdAt).toLocaleDateString("en-US", {
                          year : "numeric",
                          month : "long",
                          day : "numeric"
                        })}
                      </p>

                        <p className='text-gray-300'>
                            <span className='font-bold'>
                              Last Login :
                            </span>
                            {formatDate(user.lastLogin)}
                        </p>

                </motion.div>
           </div>

         <motion.div 
         initial={{opacity : 0, y : 20}}
         animate={{opacity : 1, y : 0}}
         transition={{delay : 0.4}}>
            
            <motion.button 
            whileHover={{scale : 1.05}}
            whileTop={{scale : 0.95}}
            onClick={handleLogout}
            className='w-full p-3 mb-5 text-2xl bg-gradient-to-r bg-violet-600 to-pink-600 via-purple-500 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:cursor-pointer hover:to-emerald-700 hover:visible focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800'>
               Logout
            </motion.button>

         </motion.div>

      </motion.div>
    </>
  )
}

export default DashboardPage
