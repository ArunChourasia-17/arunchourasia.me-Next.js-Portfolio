import React from 'react';
import Layout from './Layout';
import Link from 'next/link';
import { TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from './Icons';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by&nbsp;
                    <Link href="https://www.linkedin.com/in/arun-kumar-chourasia-a2580221a?" className='underline underline-offset-2' target={'_blank'}>Arun Chourasia</Link>
                </div>
                <Link href="mailto:arunchourasia2020@gmail.com" className='underline underline-offset-2' target={'_blank'}>Say hello</Link>

            </Layout>
            <nav className="flex items-center justify-center flex-wrap mt-2 mb-1">
                <motion.a href="https://twitter.com/ArunChourasia17" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-8 mx-3 bg-light mb-4 rounded-full sm:mx-2 hidden lg:block"
                >
                    <TwitterIcon />
                </motion.a>

                <motion.a href="https://github.com/ArunChourasia-17" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-light mb-4 rounded-full dark:bg-dark sm:mx-2 hidden lg:block"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/arun-kumar-chourasia-a2580221a/" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 sm:mx-2 mb-4 hidden lg:block"
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a href="https://in.pinterest.com/arunchourasia17/" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 mx-3 bg-light mb-4 rounded-full sm:mx-2 hidden lg:block"
                >
                    <PinterestIcon />
                </motion.a>
                <motion.a href="https://dribbble.com/arunchourasia17" target={'_blank'}
                whileHover={{y:-2}}
                whileTap={{scale:0.9}}
                className="w-6 ml-3 sm:mx-2 mb-4 hidden lg:block"
                >
                    <DribbbleIcon />
                </motion.a>
            </nav>

        </footer>
    );
};

export default Footer