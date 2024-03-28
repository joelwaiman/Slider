import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const socialIcons = [
    <FaInstagram />,
    <FaFacebook />,
    <FaLinkedin />
]

export function Footer() {
    return (
        <footer className="flex justify-between items-center w-[90vw] h-[5vh]">
            <div className="flex justify-between sm:w-[15%] w-[30%] text-xl">
                {socialIcons.map((icon) => {
                    return <a className="hover:scale-[1.175] hover:text-[#708f96] duration-300"
                    key={icon}
                        href="/">{icon}</a>
                })}
            </div>

            <a className="text-xl font-display hover:scale-[1.175] hover:text-[#708f96] duration-300" 
            href="/">About us</a>
        </footer>
    )
}