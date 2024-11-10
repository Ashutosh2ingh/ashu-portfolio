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
        category: 'frontend',
        title: "Gym Website",
        description: "I have created the complete frontend for a gym website which contain various pages.",
        stack:[
            { name: "NEXT.JS" }, { name: "framer-motion" }, { name: "Javascript" }, { name: "SCSS"}
        ],
        image: '/assets/work/gym.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/fitphysique"
    },
    {
        num: '02',
        category: 'backend',
        title: "Gym Website",
        description: "I have created the backend of the gym website using django, Django Rest Framework (DRF).",
        stack:[
            { name: "Django" }, { name: "DRF" }, { name: "Javascript" }
        ],
        image: '/assets/work/gym.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/fitphysique-backend"
    },
    {
        num: '03',
        category: 'frontend',
        title: "Weather App",
        description: "In this project I have designed a frontend for weather and also integrated operweathermap api.",
        stack:[
            { name: "ReactJs" }, { name: "CSS 3" }, { name: "Bootstrap" }, {name: 'openweathermapapi'}
        ],
        image: '/assets/work/weatherapp.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/Weather-app"
    },
    {
        num: '04',
        category: 'full stack',
        title: "Contact Management",
        description: "In this project I have design a frontend for contact managment and also created json-server and integrated.",
        stack:[
            { name: "ReactJS" }, { name: "CSS 3" }, { name: "Bootstrap" }, { name: "JSON Server" }, 
        ],
        image: '/assets/work/contact.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/contact-manager"
    },
    {
        num: '05',
        category: 'frontend',
        title: "Ecommerce Website",
        description: "In this project I have developed the complete frontend for this project using Next.js, Framer-motion, bootstrap and css.",
        stack:[
            { name: "NEXT.JS" }, { name: "Framer-motion" }, { name: "SCSS" }, { name: 'css' }
        ],
        image: '/assets/work/thumb1.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/ecommerce"
    },
    {
        num: '06',
        category: 'backend',
        title: "Ecommerce Website",
        description: "In this project I have created the complete backend for this and provided the api to frontend team and also integrated razorpay in it.",
        stack:[
            { name: "NEXT.JS" }, { name: "Django" }, { name: "Bootstrap" }, { name: 'DRF' }
        ],
        image: '/assets/work/thumb1.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/ecom-backend"
    },
    {
        num: '07',
        category: 'backend',
        title: "PMT",
        description: "In this project I have created the complete backend for this and also integrated in the backend into it and also add validation through backend.",
        stack:[
            { name: "HTML 5" }, { name: 'CSS 3' }, { name: "Django" }, { name: "Bootstrap" }
        ],
        image: '/assets/work/pmt.png',
        live: "",
        github: "https://github.com/Ashutosh2ingh/pmt"
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
