import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-[110vh] flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt="" className='rounded-full w-32' />

            </motion.div>

            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className=' flex items-end gap-2 text-xl md:text-2xl mb-3 font-mono'>Hi! I'm Syed Shoaib <Image src={assets.hand_icon} alt="" className='w-6' /></motion.h3>




            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className='text-3xl sm:text-6xl lg:text[-66px] font-mono '> DevOps Enthusiast | AI/ML | Full Stack Developer </motion.h1>
            <motion.p
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='max-w-2xl mx-auto font-mono'>DevOps enthusiast with a strong foundation in AI/ML and full stack development. Experienced in building, deploying, and managing scalable web applications using modern DevOps practices and cloud technologies. Certified by IBM, AWS, and SAP, with hands-on expertise in intelligent systems and full stack solutions.</motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                href="#Contact" className='px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2'>Contact me  <Image src={assets.right_arrow_white} alt="" className=' w-4' /></motion.a>
                <motion.a 
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>My Resume  <Image src={assets.download_icon} alt="" className=' w-4' /></motion.a>
            </div>

        </div>
    )
}

export default header