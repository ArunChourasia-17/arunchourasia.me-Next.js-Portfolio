import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return ( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
    </h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            <Details 
            position="Celebal Summer Intern" company="Celebal Technologies"
            companyLink="https://celebaltech.com/"
            time="20/05/2024 - Present" address="Asansol, (WB) India | [Remote]"
            work="⦾ Worked on a task responsible for developing new features for our KanBan website.
            Make responsive & user friendly features for our KanBan customers. Implemented drag-and-drop 
            functionality for easy movement of cards between different lists or stages of workflow. 
            Include features for users to assign tasks, set due dates, add descriptions, and attach files to cards.
            Tech Used : HTML,CSS,Javascript,React.js."
            />  
            <Details 
            position="Web Development & Designing Intern" company="Oasis Infobyte"
            companyLink="https://oasisinfobyte.com/"
            time="24/01/2023 - 05/03/2023" address="Asansol, (WB) India | [Remote]"
            work="⦾ Worked on a task responsible for developing new features for Food Delivery Web App.
            Make responsive & user friendly features for customers as well as for admin panel,
            added multiple payment options via online using debit cards, RazorPay & UPI with the help of stripe payment tools.
            Tech Used : HTML,CSS,Javascript,MongoDB,Express.js,React.js,Node.js."
            />
        </ul>
    </div>
    </div>
  );
};

export default Experience