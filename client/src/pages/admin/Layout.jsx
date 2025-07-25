import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/Appcontext'

const Layout = () => {

   

    const {axios,setToken,navigate}=useAppContext()
    const logout=()=>{
      localStorage.removeItem('token');
        axios.defaults.headers.common['Authorization']=null;
        setToken(null)
      
        navigate('/')
    }
  return (
    <>

        <div className='flex justify-between items-center  py-5 mx-8 sm:mx-20 xl:mx-32'>
            <img src={assets.logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={()=>navigate('/')} />
            <button onClick={logout} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Logout</button>
        </div>

        <div className='flex h-[clac(100vh-70px]'>
          <Sidebar/>
          <Outlet/>
        </div>

    </>
  )
}

export default Layout