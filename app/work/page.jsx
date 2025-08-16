"use client";
import { easeIn, motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: 'full stack',
        title: "Gym Website",
        description: "Developed a responsive Gym Management Website using Next.js, SCSS, Flask, and Framer Motion, featuring Razorpay integration and role-based Employee/Admin panels for efficient operations.",
        stack:[
            { name: "NEXT.JS" }, { name: "framer-motion" }, { name: "SCSS"}, { name: "Django"}, { name: "DRF"}
        ],
        image: '/assets/work/gym.png',
        live: "https://fitphysique-omega.vercel.app/",
        github: "https://github.com/Ashutosh2ingh/fitphysique"
    },
    {
        num: '02',
        category: 'frontend',
        title: "Weather App",
        description: "In this project I have designed a frontend for weather and also integrated operweathermap api.",
        stack:[
            { name: "ReactJs" }, { name: "CSS 3" }, { name: "Bootstrap" }, {name: 'openweathermapapi'}
        ],
        image: '/assets/work/weatherapp.png',
        live: "https://weather-app-pi-nine-52.vercel.app/",
        github: "https://github.com/Ashutosh2ingh/Weather-app"
    },
    {
        num: '03',
        category: 'frontend',
        title: "MissLaundry App",
        description: "Developed a React Native MissLaundry app with a clean UI, smooth navigation, image slider, and optimized components for seamless cross-device performance.",
        stack:[
            { name: "React Native" }, { name: "Bootstrap" }
        ],
        image: '/assets/work/Laundry.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/misslaundry-App"
    },
    {
        num: '04',
        category: 'full stack',
        title: "Vantage Report",
        description: "Developed at Tata Technologies, this MES report web app for Tata Motors uses React, Express.js, and MS SQL with dynamic visualizations, role-based access, secure APIs, and responsive UI for streamlined data insights.",
        stack:[
            { name: "React.js" }, { name: "Framer-motion" }, { name: "Bootstrap" }, { name: 'Express.js' }, { name: 'MSSQL' }
        ],
        image: '/assets/work/vantage.jpeg',
        live: "",
        github: ""
    },
    {
        num: '05',
        category: 'full stack',
        title: "MES Dashboard",
        description: "Developed a React.js real-time production monitoring dashboard sourcing PLC data via Campware APIs, featuring live status indicators, voice alerts, and proactive event tracking for efficient shop-floor management and rapid issue resolution.",
        stack:[
            { name: "React.js" }, { name: "Framer-motion" }, { name: "Bootstrap" }, { name: 'Express.js' }, { name: 'MSSQL' }
        ],
        image: '/assets/work/dashboard.jpeg',
        live: "",
        github: ""
    },
    {
        num: '06',
        category: 'full stack',
        title: "AshMart",
        description: "Developed a React Native e-commerce app with Django REST backend, featuring OTP verification, Razorpay payments, product variations, order tracking, and a secure, user-friendly shopping experience with robust API integration.",
        stack:[
            { name: "React Native" }, { name: "Django" }, { name: "Bootstrap" }, { name: "Twillio" }
        ],
        image: '/assets/work/ashmart.jpeg',
        live: "",
        github: "https://github.com/Ashutosh2ingh/AshMart"
    },
    {
        num: '07',
        category: 'full stack',
        title: "RUBeats",
        description: "Developed a React Native music app with a user-friendly interface, smooth navigation, and optimized performance for seamless audio streaming and playback.",
        stack:[
            { name: "React Native" }, { name: "Bootstrap" }
        ],
        image: '/assets/work/RuBeats.jpeg',
        live: "",
        github: "https://github.com/Ashutosh2ingh/RUBeats"
    },
]

const Work = () => {

    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) =>{
        
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {
                                    project.stack.map((item,index) => {
                                        return(
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {/* remove the last comma */}
                                                {index !== project.stack.length -1 && ","}
                                            </li>
                                        );
                                    })
                                }
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live Project Button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* Github Project Button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project,index) => {
                                    return(
                                        <SwiperSlide key={index} className="w-full">
                                            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                                {/* overlay */}
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                                {/* Image */}
                                                <div className="relative w-full h-full">
                                                    <Image 
                                                        src={project.image} 
                                                        fill
                                                        className="object-fill" 
                                                        alt="Project Image" 
                                                    />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }

                            {/* Slider buttons */}
                            <WorkSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;
