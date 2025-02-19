"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { navData, navDataType } from '../utils/navData';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
    const [currentHighlightedLink, setcurrentHighlightedLink] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const handleMouseEnter = (nav: navDataType) => {
        if (nav.subLinks) {
            setIsDropDownVisible(true);
            setcurrentHighlightedLink(nav.id);
        }
        else {
            setIsDropDownVisible(false);
            setcurrentHighlightedLink(0);
        }

    }

    const handleMouseLeave = () => {
        setIsDropDownVisible(false);
        setcurrentHighlightedLink(0);
    }


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const pathName = usePathname();

    return (
        <nav role='navigation' aria-description='navigation' className={`fixed top-0 left-0 w-full flex flex-row py-5 px-5 md:px-20 justify-between items-center transition-all duration-300 z-10 bg-entrustSubtleWhite ${isScrolled ? " shadow-md" : "shadow-none"}`}>
            <div className='flex flex-row gap-10 w-full'>
                <Link href="/">
                    <Image aria-label='Entrust Shipping Logo' src="/images/entrustlogo.png" width={200} height={65} alt='Entrust Shipping Logo' />
                </Link>

                {/* Desktop Nav Links */}
                <div className='hidden lg:flex flex-row justify-around items-center text-entrustBlue text-lg gap-5'>
                    {navData.map((nav) => (
                        <div
                            key={nav.id}
                            className='relative'
                            onMouseEnter={() => handleMouseEnter(nav)}
                            onMouseLeave={handleMouseLeave}
                            onFocus={() => handleMouseEnter(nav)}

                        >
                            <Link aria-expanded={isDropDownVisible} aria-label={nav.subLinks ? `${nav.pageName} Sub menu` : `Go to ${nav.pageName} page`} href={nav.location} className={nav.location === pathName ? "font-bold" : "font-normal"}>
                                {nav.pageName}
                            </Link>

                            {isDropDownVisible && nav.id === currentHighlightedLink && (
                                <div onMouseEnter={() => handleMouseEnter(nav)}
                                    onMouseLeave={handleMouseLeave} className='absolute top-7 left-0 bg-white shadow-lg p-2 px-5 min-w-max h-[18rem] flex flex-col justify-around'>
                                    {nav.subLinks?.map((sub) => (
                                        <Link aria-label={`Go to ${sub.pageName} page`} key={sub.id} href={sub.location} className={sub.location === pathName ? "font-bold block px-4 py-2 hover:bg-gray-200 border-[1.5px] rounded-md border-cardBordergrey" : "block px-4 py-2 hover:bg-gray-200"}>
                                            {sub.pageName}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Button size='lg' bg='entrustBlue' borderColor='ctaborderColor' textColor='entrustSubtleWhite' className='hidden lg:block  hover:text-entrustBlue hover:bg-entrustSubtleWhite hover:border-entrustBlue'>Contact Us</Button>

            {/* Mobile Menu Toggle */}
            <button aria-label={isMobileMenuOpen ? "Close menu" : "Open Menu"} aria-expanded={isMobileMenuOpen} aria-controls='mobile-menu' className='lg:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={40} color='#004F81' /> : <Menu size={40} color='#004F81' />}
            </button>

            {/* Mobile Navigation with Animation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: "50%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className='absolute top-[110px] right-10 w-[40rem] h-[30em] md:h-[35em] bg-white shadow-md flex flex-col items-start p-5 overflow-y-auto lg:hidden rounded-[60px]'
                    >
                        {navData.map((nav) => (
                            <div key={nav.id} className='w-full'>
                                <div
                                    className='flex justify-between items-center w-[20%] text-3xl text-entrustBlue py-2 px-4 cursor-pointer'
                                    onClick={() => setOpenAccordion(openAccordion === nav.id ? null : nav.id)}
                                    onFocus={() => setOpenAccordion(openAccordion === nav.id ? null : nav.id)}
                                >
                                    <Link aria-label={nav.subLinks ? `${nav.pageName} Sub menu` : `Go to ${nav.pageName} page`} href={nav.location} className={nav.location === pathName ? "flex-1 font-bold" : "flex-1"} onClick={() => setIsMobileMenuOpen(false)}>
                                        {nav.pageName}
                                    </Link>
                                    {nav.subLinks && (
                                        <div className='flex justify-end pt-2.5'>
                                            {openAccordion === nav.id ? <ChevronUp role='button' aria-label='Close Sub Menu' size={30} aria-expanded="true" /> : <ChevronDown role='button' aria-label='Open Sub menu' aria-expanded="false" size={30} />}
                                        </div>
                                    )}
                                </div>

                                {/* Accordion Animation */}
                                <AnimatePresence>
                                    {openAccordion === nav.id && nav.subLinks && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className='flex flex-col mt-2 bg-gray-100 rounded-lg p-2 overflow-hidden'
                                        >
                                            {nav.subLinks.map((sub) => (
                                                <Link aria-label={`Go to ${sub.pageName} page`} key={sub.id} href={sub.location} className={sub.location === pathName ? 'font-bold block text-lg text-gray-600 py-1 pl-5' : "block text-lg text-gray-600 py-1 pl-5"} onClick={() => setIsMobileMenuOpen(false)}>
                                                    {sub.pageName}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}


                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default NavBar;
