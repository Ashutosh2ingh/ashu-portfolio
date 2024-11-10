import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials =[
    { icon: <FaGithub />, path: "https://github.com/Ashutosh2ingh/" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/ashutosh-singh-939679230/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/ashutosh__singh__03" }
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {
                socials.map((item, index) => {
                    return (
                        <Link key={index} href={item.path} className={iconStyles}>
                            {item.icon}
                        </Link>   
                    );
                })
            }
        </div>
    )
}

export default Social;
