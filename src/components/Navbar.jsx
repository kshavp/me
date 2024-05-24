// import React from 'react';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
    initial={{y:-100, opacity:0}}
    // whileInView={{y:0, opacity:1}}
    animate={{y:0, opacity:1}}
    transition={{duration:1, delay:0.5}}
    viewport={{ once: true }}
    className='md:flex justify-between text-neutral-200 m-8 mb-10 md:mb-30'>
        <div><p className='text-3xl font-bold text-center'>keshavpriyam</p></div>

        <div className='hidden md:flex items-center gap-x-12 text-lg font-thin'>
            <p className='hover:-translate-y-1 transition'>About</p>
            <p className='hover:-translate-y-1 transition'>Skills</p>
            <p className='hover:-translate-y-1 transition'>Experience</p>
            <p className='hover:-translate-y-1 transition'>Projects</p>
            <p className='hover:-translate-y-1 transition'>Acheivements</p>
            <p className='hover:-translate-y-1 transition'>Contact</p>
        </div>

        <div className='flex items-center justify-center mt-6 md:mt-0'>
            <ul className='flex items-center gap-x-4 text-3xl'>
                <li className='hover:bg-neutral-500 transition duration-200'><a href="https://www.linkedin.com/in/keshavpriyam/" target='_blank'>
                    <FaLinkedinIn />
                    </a></li>
                <li className='hover:bg-neutral-500 transition duration-200'><a href="https://github.com/kshavp" target='_blank'>
                    <FaGithub />
                    </a></li>
                <li className='hover:bg-neutral-500 transition duration-200'><a href="https://twitter.com/keshavpriyam" target='_blank'>
                    <FaSquareXTwitter />
                    </a></li>
            </ul>
        </div>

    </motion.nav>
  )
}

export default Navbar