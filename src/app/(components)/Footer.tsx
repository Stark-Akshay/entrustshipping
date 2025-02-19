import { Facebook, Instagram, Linkedin, MapPin } from "lucide-react"
import { navData } from "../utils/navData"
import Link from "next/link";


const Footer = () => {
    const servicesNav = navData.find((item) => item.pageName === "Services")?.subLinks || [];
    return (
        <footer className='w-full bg-entrustBlue flex flex-col  md:flex-row md: flex-wrap md:justify-between px-5 md:px-20 pt-5 text-entrustSubtleWhite gap-5 pb-5 md:pb-1'>
            <div id="company-details">
                <div id="company-title-moto" className="font-semibold">
                    <p className="text-xl">ENTRUST SHIPPING LLP</p>
                    <p className="text-lg">Sailing on Trust</p>
                </div>
                <div className="flex flex-row items-center">
                    <a
                        href="https://maps.app.goo.gl/5SDF9L4i9XxBScUi8"
                        aria-label="View Entrust Shipping location on Google Maps"
                        id="company-address"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md hover:underline"
                    >                        <p className="text-md">39/5109, 2nd Floor,</p>
                        <p className="text-md">Church Landing Road,</p>
                        <p className="text-md">Pallimukkku -682016</p>
                    </a>
                </div>
            </div>

            <div id="quick-links" className="flex flex-col">
                <p className="text-xl font-semibold">Services</p>
                <div className="flex flex-col ">
                    {servicesNav.map((subLink) => (
                        <Link className="hover:underline" key={subLink.id} href={subLink.location}>{subLink.pageName}</Link>
                    ))}
                </div>
            </div>

            <div id="contact-us" className="flex flex-col">
                <p className="text-xl font-semibold">Contact</p>
                <div className="flex flex-col">
                    <div className="flex flex-col pb-3">
                        <a aria-label="Call Entrust Shipping at +91 94465 86714" href="tel:+919446586714" className="hover:underline">+919446586714</a>
                        <a aria-label="Email Entrust Shipping at info@entrustshipping.com" href="mailto:info@entrustshipping.com" className="hover:underline">info@entrustshipping.com</a>
                    </div>

                    <div id="social-contacts" className="flex flex-row w-full gap-2">
                        {/* Facebook */}
                        <div className="rounded-full group border-2 bg-white text-entrustBlue w-fit flex items-center justify-center hover:text-white hover:bg-entrustBlue p-1">
                            <a
                                aria-label="Visit Entrust Shipping Facebook Page"
                                href="https://www.facebook.com/p/Entrust-Shipping-100083473865977/?utm_source=entrustshipping&utm_medium=social&utm_campaign=cta-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={30} />
                            </a>
                        </div>

                        {/* Instagram */}
                        <div className="rounded-full group border-2 bg-white text-entrustBlue w-fit flex items-center justify-center hover:text-white hover:bg-entrustBlue p-1">
                            <a
                                aria-label="Visit Entrust Shipping Instagram Page"
                                href="https://www.instagram.com/entrustshipping/?utm_source=entrustshipping&utm_medium=social&utm_campaign=cta-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={30} />
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="rounded-full group border-2 bg-white text-entrustBlue w-fit flex items-center justify-center hover:text-white hover:bg-entrustBlue p-1">
                            <a
                                aria-label="Visit Entrust Shipping LinkedIn Page"
                                href="https://www.linkedin.com/company/entrust-shipping/?utm_source=entrustshipping&utm_medium=social&utm_campaign=cta-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={30} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </footer>
    )
}

export default Footer