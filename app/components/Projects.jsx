import { projectData, assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}

      id="Project" className='w-full px-[12%] py-10 
    scroll-mt-20'>
      <motion.h4 
       initial={{ opacity: 0, y:-20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ duration: 0.3, delay: 0.5 }}
      
      className='text-center mb-2 text-lg font-mono'>Turning Ideas into Code</motion.h4>
      <motion.h2 
       initial={{ opacity: 0, y:-20}}
                    whileInView={{ opacity: 1, y:0}}
                    transition={{ duration: 0.5, delay: 0.5 }}
      
      
      className='text-center text-5xl font-sans'>Hands-On Work</motion.h2>


      <motion.p 
       initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.7, delay: 0.5 }}
      
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-mono'>I design, develop, deploy, and even think like a machine. My projects reflect a well-rounded journey—from crafting sleek interfaces and APIs to managing DevOps pipelines and exploring AI-powered solutions.</motion.p>

      <motion.div 
      initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{ duration: 0.9, delay: 0.6 }}
      
      
      
      className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]'>
        {projectData.map(({ icon, title, bgImage, description,link}, index) => (
          <motion.div 
          whileHover={{scale:1.05}}
          
          
          
          key={index} className='border border-gray-400 rounded-lg text-white px-6 py-12 hover:bg-[#fcf4ff] hover:-translate-y-1 hover:shadow-2xl
             transition-all duration-500' style={{ backgroundImage: `url(${bgImage})` }} >
            <Image src={icon} alt='' className='w-10 ' />
            <h3 className='text-lg my-4  text-white '>{title}</h3>
            <p className='text-sm leading-5 text-white '>
              {description}
            </p>

            <a href={link} className='flex items-center gap-2  text-white  text-sm mt-5'>
              Read mode <Image src={assets.right_arrow} alt='' className='w-4 ' />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Projects