import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, place, info }) => {
    const ref = useRef(null);
    return ( <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {place}
            </span>
            div
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
    );
};

const Achievements = () => {
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
        Achievements
    </h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
    <motion.div 
    style={{scaleY: scrollYProgress}}
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2' >
            <Details 
            type="COMPETITIVE PROGRAMMING & CS/IT CORE FUNDAMENTALS"
            place="Platforms : GeeksforGeeks | LeetCode | HackerRank"
            info="⦾ 150+ problems solved at geeksforgeeks.com
            ⦾ 183th rank among 1500+ college mates on geeksforgeeks
            ⦾ 100+ problems solved at leetcode.com ⦾ 100+ problems solved at hackerrank.com ⦾ Till 350+ problems solved at different platforms
            ⦾ Good Knowledge of DSA Fundamentals & Core Concepts: Database/Operating System/Networking/Software Testing etc."
            />
             <Details 
            type="CURRICULAR ACTIVITIES"
            place="Place : At School & College Level..."
            info="⦾ In 12th: Got 1st Prize in Innovative IDEA Submission (Online).
            - (LiFi: light fidelity Technology)
            ⦾ In 10th: Got 2nd Prize in Debate/GD Competition."
            />
             <Details 
            type="CO-CURRICULAR ACTIVITIES"
            place="Place : At School & College Level..."
            info="⦾ In 11th: SILVER MEDAL - Regional Volleyball
            ⦾ In 12th: BRONZE MEDAL - In 1600m (6m:45s)"
            />
        
        </ul>
    </div>
    </div>
  );
};

export default Achievements;