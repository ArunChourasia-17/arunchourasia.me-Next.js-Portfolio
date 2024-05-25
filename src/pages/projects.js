import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/Icons';
import AnimatedText from '@/components/AnimatedText';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/Sorting Visualizer.png";
import project3 from "../../public/images/projects/PizzaResto.png";
import project4 from "../../public/images/projects/fashion-studio-website.jpg";
import project5 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "../../public/images/projects/portfolio-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';
import Slider from '@/components/Slider'; 

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-3xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-1xl'>{summary}</p>
                <div className='mt-2 flex items-center' >
                    <Link href={github} target="_blank" className='w-10' > <GithubIcon /> </Link>
                    <Link href={link} target="_balnk"
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base hover:bg-light hover:text-dark border-2 border-solid border-transparent
                        hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base'
                    >Visit Project</Link>
                </div>
            </div>

        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 relative
        dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2
            md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold hover:underline md:text-base'
                    >Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6' >
                        <GithubIcon />{" "}
                    </Link>
                </div>
            </div>
        </article>

    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>Arun Chourasia | Projects Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />

                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                github="https://github.com/ArunChourasia-17"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Sorting Visualizer"
                                img={project2}
                                summary="Sorting-Visualizer : It provides a visual representation of time complexity & space complexity 
                                of different algorithms. It has multiple features such as generate new array, increase/decrease the 
                                size of array, & speed the sorting process as you want. It is amazing to experience how much 
                                time taken by each algorithms."
                                link="https://sorting-visualizer-121.netlify.app/"
                                github="https://github.com/ArunChourasia-17/Sorting_Visualizer"
                                type="Personal Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Food Delivery Web Page"
                                img={project3}
                                summary="FooD Ordering Web Design : At Pizza Restaurant, we're passionate about serving delicious 
                                pizzas made with fresh, high-quality ingredients. Our menu features offers a variety of traditional 
                                and specialty pizzas, as well as pizza dough/base, sauce, cheese type and you can opt. our veggies."
                                link="https://pizza-restaurant-frontend-design.netlify.app/"
                                github="https://github.com/ArunChourasia-17/PizzaResto.-Frontend-Design"
                                type="Personal Project"
                            />
                        </div>

                        <div className='col-span-12 sm:col-span-12'>
                            <FeaturedProject
                                title="Fashion Studio Website"
                                img={project4}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                github="https://github.com/ArunChourasia-17"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="NFT Collection Website"
                                img={project5}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                github="https://github.com/ArunChourasia-17"
                                type="Personal Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Portfolio Cover Website"
                                img={project6}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                                link="/"
                                github="https://github.com/ArunChourasia-17"
                                type="Personal Project"
                            />
                        </div>
                    </div>
                    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 my-64'>Testimonials</h2>
                    <Slider />
                </Layout>
            </main >
        </>
    );
};

export default projects