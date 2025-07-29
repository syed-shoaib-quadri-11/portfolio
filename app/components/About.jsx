import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const About = () => {
    return (
        <motion.div id='About' className='w-full px-[12%] py-10 
    scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}

                className='text-center mb-2 text-lg font-mono'>Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}

                className='text-center text-5xl font-sans'>About me</motion.h2>

            < motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}

                className='flex w-full flex-col lg:flex-row items-center gap-20 mt-10 mb-20'>

                <motion.div

                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    < Image src={assets.user_image} alt='user' className='w-full rounded-3xl' /></ motion.div>

                <motion.div
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 0.6, delay: 0.8 }}

                    className='flex-1'>
                    <p className='mb-10 max-w-2xl text-sm'> I’m Syed Shoaib, a Bachelor of Computer Applications student with a strong passion for DevOps, cloud infrastructure, and intelligent systems. My journey in tech revolves around automating workflows, deploying scalable applications, and exploring AI/ML to solve real-world problems. <br /> 

I’ve gained hands-on experience in using tools like Docker, Kubernetes, and Jenkins to build CI/CD pipelines, along with working on full stack web development using React, Node.js, and MongoDB. I am also certified by IBM, AWS, and SAP, which has strengthened my understanding of cloud platforms and enterprise technologies.
<br /><br />I believe in continuous learning and love turning ideas into solutions through clean code, smart automation, and collaborative development.</p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}

                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li
                                whileHover={{scale:1.05}}
                            
                            key={index}
                                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
             hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-2xl
             transition-all duration-500"
                            >

                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold text-gray-700' >{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.h4 
                    initial={{ opacity: 0, y:20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ duration: 1.3, delay: 0.5 }}
                    
                    className='my-6 text-gray-700 font-mono'>Tools i use</motion.h4>

                    < motion.ul 
                    initial={{ opacity: 0, }}
                    whileInView={{ opacity: 1, }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    
                    className=' flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <motion.li 
                            whileHover={{scale1:1}}
                            
                            
                            key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duratiion-500'>
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </motion.li>

                        ))}




                    </motion.ul>

                </motion.div>
            </motion.div>
        </ motion.div >
    )
}

export default About