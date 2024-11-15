"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiDjango, SiGit, SiFlask } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"; 
import { motion } from "framer-motion";

// About Data
const about = {
  title: "About me",
  description: "I am a Full stack developer skilled in Python, Django, React, framer-motion, and SQL databases.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashutosh Singh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 8707 332 099",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "ashutosh-singh",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "ashutoshsinghh2303@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Hindi, English",
    },
  ]
};

// Experience Data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have designed various websites and apps like ecommerce, Misslaundry, PMT, GYM, Contact Management.',
  items:[
    {
      company: "Tata Technologies Limited",
      position: "MES FTPC Support",
      duration: "Apr 2024 - Present",
    },
    {
      company: "Techpath",
      position: "Full Stack Developer",
      duration: "Jul 2023 - Feb 2024",
    },
    {
      company: "LearQoch",
      position: "Full Stack Developer Intern",
      duration: "Mar 2023 - Jun 2023",
    },
    {
      company: "Techpath",
      position: "Full Stack Developer Intern",
      duration: "Dec 2022 - Feb 2023",
    },
  ]
};

// Experience Data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'I have completed my graduation in BCA in 2023 and now I am pursuing my post-graduation in MCA from 2023 onwards.',
  items:[
    {
      institution: "Manipal University",
      degree: "Master in Computer Applicaiton",
      duration: "Sep 2023 - Present",
    },
    {
      institution: "HCPG",
      degree: "Bachelor in Computer Applicaiton",
      duration: "NOv 2020 - Sep 2023",
    },
    {
      institution: "Global Technologies",
      degree: "CCC",
      duration: "Dec 2019 - Mar 2020",
    },
    {
      institution: "S.G. Public School",
      degree: "Intermediate",
      duration: "Apr 2017 - Apr 2019",
    },
    {
      institution: "S.G. Public School",
      degree: "High-School",
      duration: "Apr 2015 - Apr 2017",
    },
  ]
};

// Skills Data
const skills = {
  title: 'My skills',
  description: 'While working in my previous jobs or during my intership and during my graduation period I have mastered various programming technologies.',
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "HTML5",
    },
    {
      icon: <FaCss3/>,
      name: "CSS3",
    },
    {
      icon: <FaJs/>,
      name: "Javascript",
    },
    {
      icon: <FaBootstrap/>,
      name: "Bootstrap",
    },
    {
      icon: <FaReact/>,
      name: "ReactJS",
    },
    {
      icon: <FaPython/>,
      name: "Python",
    },
    {
      icon: <SiDjango/>,
      name: "Django",
    },
    {
      icon: <TbBrandReactNative/>,
      name: "React Native",
    },
    {
      icon: <SiGit/>,
      name: "GIT",
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.JS",
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind CSS",
    },
    {
      icon: <SiFlask/>,
      name: "Flask",
    },
  ]
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div classname="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      experience.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">

                            <span className="text-accent">
                              {item.duration}
                            </span>

                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>

                            <div className="flex items-center gap-3">
                              {/* dots */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" classname="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {
                      education.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">

                            <span className="text-accent">
                              {item.duration}
                            </span>

                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>

                            <div className="flex items-center gap-3">
                              {/* dots */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Skills */}
            <TabsContent value="skills" classname="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <h3 className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</h3>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {
                    skills.skillList.map((skill, index) => {
                      return(
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </TabsContent>
            
            {/* About */}
            <TabsContent value="about" classname="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item,index) => {
                      return(
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </TabsContent>
            
          </div>

        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;