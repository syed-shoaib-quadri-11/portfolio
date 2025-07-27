import React, { useEffect, useRef,useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Navbar = () => {

    const [isScroll,SetIsScroll]=useState(false)

    const sideMenurRef= useRef()
    const openMenu=()=>{
        sideMenurRef.current.style.transform= 'translateX(-16rem)'
    }
    const closeMenu =()=>{
         sideMenurRef.current.style.transform= 'translateX(16rem)'
    }
    useEffect(() => {
    window.addEventListener('scroll', ()=>{
if(scroll>50){
SetIsScroll(true)
}
else{
SetIsScroll(false)
}
    })

    }, [])
    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px[-8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm":""}`}>
                <a href="#top">

                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="Logo" />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 
                    rounded-full px-12 py-3 ${isScroll ? "":" bg-white shadow-sm bg-opacity-50"}`}>
                    <li><a className='font-sans' href="#top" >Home</a></li>
                    <li><a className='font-Ovo' href="#About">About me</a></li>
                    <li><a className='font-Ovo' href="#Project">Project</a></li>
                    <li><a className='font-Ovo' href="#Certification">Certification</a></li>
                    <li><a className='font-Ovo' href="#Contact">Contact me</a></li>
                </ul>



                <div className='flex items-center gap-4'>
                    {/* <button>
                        <Image src={assets.moon_icon} alt="" className='w-6' />
                    </button> */}

                    <a href="#Contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
                        Contact <Image src={assets.arrow_icon} className='w-3' alt="arrow" />
                    </a>

                    <button className='block md:hidden  ml-3'onClick={openMenu}>
                        <Image src={assets.menu_black} alt="" className='w-6' />
                    </button>
                </div>

                {/*mobile menu.....*/}


                <ul ref={sideMenurRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-700'>
                    <div className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt="" className='w-4 cursor-pointer' onClick={closeMenu} />
                    </div>
                    
                    <li><a className='font-sans'onClick={closeMenu} href="#top" >Home</a></li>
                    <li><a className='font-Ovo'onClick={closeMenu} href="#About">About me</a></li>
                    <li><a className='font-Ovo'onClick={closeMenu} href="#Project">Project</a></li>
                    <li><a className='font-Ovo'onClick={closeMenu} href="#Certification">Certification</a></li>
                    <li><a className='font-Ovo'onClick={closeMenu} href="#Contact">Contact me</a></li>

                </ul>

            </nav>
        </>
    )
}

export default Navbar
