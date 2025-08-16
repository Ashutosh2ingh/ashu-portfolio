"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+91) 8707 332 099",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "ashutoshsinghh2303@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: "Address",
        description: "B-2/9 21, Metropolis City, Rudrapur",
    },
]

const Contact = () => {

    const ref = useRef();
    const formref = useRef();
    const [selectedService, setSelectedService] = useState("");
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
    
        emailjs.sendForm('service_mhny8xc', 'template_c7dexuf', formref.current, {
            publicKey: 'y4b5wX7grM5IEeGm6',
        })
        .then((result) => {
                toast.success("Message sent successfully 🎉");
                setLoading(false);
                setFormValues({ firstName: "", lastName: "", email: "", phone: "", message: "" });
                setSelectedService("");
            },
            (error) => {
                toast.error("Something went wrong. Please try again.");
                setLoading(false);
            },
        );
    };

    const handleServiceChange = (value) => {
        setSelectedService(value);
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { firstName, lastName, email, phone, message } = formValues;
        if (!firstName || !lastName || !email || !phone || !message || !selectedService) {
            toast.error("Please fill out the entire form");
            return false;
        }
        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return false;
        }
        return true;
    };

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
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <motion.form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={formref} onSubmit={sendEmail}>
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">
                                Let's collaborate and achieve great things together through effective teamwork and shared goals
                            </p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First Name" name="firstName" value={formValues.firstName} onChange={handleChange} />
                                <Input type="lastname" placeholder="Last Name" name="lastName" value={formValues.lastName} onChange={handleChange} />
                                <Input type="email" placeholder="Email Address" name="email" value={formValues.email} onChange={handleChange} />
                                <Input type="phone" placeholder="Phone Number" name="phone" value={formValues.phone} onChange={handleChange} />
                            </div>

                            {/* select */}
                            <Select value={selectedService} onValueChange={handleServiceChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web-Development">Web Development</SelectItem>
                                        <SelectItem value="App-Development">App Development</SelectItem>
                                        <SelectItem value="UI/UX">UI/UX Design</SelectItem>
                                        <SelectItem value="MES">MES</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <input type="hidden" name="service" value={selectedService} />

                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here"
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                            />

                            {/* button */}
                            <div>
                                {loading ? (
                                    <Button disabled className="max-w-40 flex items-center gap-2">
                                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                                    </Button>
                                    ) : (
                                    <Button
                                        size="md"
                                        className="max-w-40"
                                        type="submit"
                                        disabled={
                                            !formValues.firstName ||
                                            !formValues.lastName ||
                                            !formValues.email ||
                                            !formValues.phone ||
                                            !formValues.message ||
                                            !selectedService
                                        }
                                    >
                                        Send Message
                                    </Button>
                                )}
                            </div>
                        </motion.form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {
                                info.map((item,index) => {
                                    return(
                                        <li key={index} className="flex items-center gap-6">
                                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                                <div className="text-[28px]">{item.icon}</div>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-white/60">{item.title}</p>
                                                <h3 className="text-xl">{item.description}</h3>
                                            </div>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact;
