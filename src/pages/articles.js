import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"
import article6 from "../../public/images/articles/todo list app built using react redux and framer motion.png"
import article7 from "../../public/images/articles/What is higher order component in React.jpg"
import article8 from "../../public/images/articles/What is Redux with easy explanation.png"

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' />
        </Link>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
        bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light
        dark:bg-dark dark:text-light sm:flex-col'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return (
        <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light xs:-right-2 
            xs:h-[102%] xs:w-full xs:rounded-[1.5rem] rounded-br-3xl' />
            <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-1xl mb-2'>{summary}</p>
            <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
        </li>
    );
};

const articles = () => {
    return (
        <>
            <Head>
                <title>Arun Chourasia | Articles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words Can Change The World!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticle

                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                            Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="https://retool.com/blog/how-to-build-a-custom-pagination-component-in-react"
                            img={article1} />
                        <FeaturedArticle

                            title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
                            summary="Learn how to create stunning loading screens in React with 3 different methods. 
                            Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
                            Improve the user experience."
                            time="10 min read"
                            link="https://medium.com/@davidarmah2022/creating-stunning-loading-screens-in-react-build-3-types-of-loading-screen-3dbeb1f743f4"
                            img={article2} />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>
                        All Articles
                    </h2>
                    <Article
                        title="Form Validation In Reactjs: Build A Reusable Hook For Inputs And Error Handling"
                        date="Jan 26, 2024"
                        link="https://www.abstractapi.com/guides/react-form-validation"
                        img={article4}
                    />
                    <Article
                        title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
                        date="Feb 14, 2024"
                        link="https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react"
                        img={article5}
                    />
                    <Article
                        title="Creating An Efficient Modal Component In React Using Hooks And Portals"
                        date="Mar 26, 2024"
                        link="https://dev.to/viclafouch/build-a-complete-modal-component-with-react-hooks-2fk8"
                        img={article3}
                    />
                    <Article
                        title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
                        date="Apr 19, 2024"
                        link="https://dev.to/shaifarfan08/a-complete-react-todo-app-using-react-redux-framer-motion-2hk0"
                        img={article6}
                    />
                    <Article
                        title="Redux Simplified: A Beginner's Guide For Web Developers"
                        date="May 20, 2024"
                        link="https://dev.to/med_code/redux-simplified-a-beginners-guide-for-web-developers-55h3"
                        img={article8}
                    />
                    <Article
                        title="What Is Higher Order Component (Hoc) In React?"
                        date="Jun 21, 2024"
                        link="https://legacy.reactjs.org/docs/higher-order-components.html"
                        img={article7}
                    />
                </Layout>
            </main>
        </>
    );
};

export default articles
