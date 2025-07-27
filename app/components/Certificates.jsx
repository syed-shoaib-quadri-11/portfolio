import { Certification, CertificationImages, assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion, scale } from "motion/react"


const Certificates = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}



            id='Certification' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}

                className='text-center mb-2 text-lg font-mono'>Upskilling Milestones</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}

                className='text-center text-5xl font-sans'>Courses & Certifications</motion.h2>


            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}


                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-mono'>These certifications reflect my continuous learning and expertise in various domains like AI, cloud computing, and software development.</motion.p>

            <motion.div

                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}

                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-10 w-[100%]'>
                {CertificationImages.map((certificates, index) => (
                    <motion.div
                        key={index}
                        className='w-full aspect-[2/3] sm:aspect-square bg-white rounded-xl relative overflow-hidden'
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}



                    // style={{ backgroundImage: `url(${certificates.bgImage})` }}
                    >
                        <img
                            src={certificates.bgImage}
                            alt={`Certificate ${index + 1}`}
                            className='w-full h-full object-contain'
                        />


                        {/* <div>
                            <div>
                                <h2>{certificates.title}</h2>
                                <p>{certificates.description}</p>
                            </div>
                            <div>
                                <Image src={assets.send_icon} alt='send icon ' className='w-5' />
                            </div>
                        </div> */}

                    </motion.div>
                ))}
            </motion.div>

        </motion.div>
    )
}

export default Certificates