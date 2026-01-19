"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronRight, Menu, MoveRight, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { IService, ISiteInfo } from '@/types'
import { DynamicLucideIcon } from '../dynamicIcon/DynamicLucideIcon'
import { AnimatedButton } from '../button/AnimatedButton'
import { usePathname } from 'next/navigation'
import GradientButton from '../button/GradiantButton'

interface Props {
    siteInfo: ISiteInfo,
    services: IService[]
}

export function Navbar({ siteInfo, services }: Props) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    // const [siteInfo, setSiteInfo] = useState<ISiteInfo | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const pathname = usePathname();


    return (
        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
            }}
            className={`sticky top-0 z-50 w-full ${isScrolled ? 'bg-white/97 shadow-md py-2' : 'bg-white py-4'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/">
                            <Image
                                src={siteInfo?.mainLogo ? siteInfo?.mainLogo : "https://res.cloudinary.com/dog2ins5h/image/upload/v1766768290/Saa-Logo-Final-v2-c_owooet.png"}

                                alt="SAA Accounting Logo"
                                width={120}
                                height={80}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8 text-base">
                        <Link
                            href="/"
                            className={` hover:text-[#4f5cb0] font-medium transition-all hover:mb-2 duration-500 ${pathname === "/" ? "text-[#4f5cb0]" : "text-[#002047]"}`}     >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={` hover:text-[#4f5cb0] font-medium transition-all hover:mb-2 duration-500 ${pathname === "/about" ? "text-[#4f5cb0]" : "text-[#002047]"}`}
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            {/* <Link href="/services" className="flex items-center gap-1 text-[#002047] group-hover:text-[#4f5cb0] font-medium transition-colors py-2"> */}
                            <Link href="/services" onClick={() => setIsServicesOpen(false)} className={`flex items-center gap-1 hover:text-[#4f5cb0] transition-all hover:mb-2 duration-500 ${pathname === "/services" ? "text-[#4f5cb0]" : "text-[#002047]"} font-medium py-2`}>
                                Services
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''
                                        }`}
                                />
                            </Link>

                            <AnimatePresence>
                                {isServicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute left-0 mt-0 w-[700px] bg-white rounded-2xl  shadow-lg ring-1 ring-gray-200 ring-opacity-5 overflow-hidden"
                                    >
                                        <div className='p-6'>
                                            <div className=" grid grid-cols-2 gap-4 pb-4 border-b mb-4 border-gray-400">
                                                {services.map((service: IService, index) => (
                                                    <Link
                                                        onClick={() => setIsServicesOpen(false)}
                                                        key={index}
                                                        href={`/services/${service.slug}`}
                                                        className={`flex gap-2 hover:rounded-xl px-4 py-3 text-sm transition-all hover:-translate-y-1 duration-500 border-gray-50 last:border-0 group/item`}                       >
                                                        <div className='rounded-xl p-2 bg-gray-300 h-10 w-10 flex items-center justify-center'>
                                                            <DynamicLucideIcon
                                                                iconName={service.serviceIcon}
                                                                size={20}
                                                                className="text-[#4f5cb0]"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className='text-base font-medium group-hover/item:text-[#4f5cb0]'>{service.title}</p>
                                                            <p className='text-xs text-gray-500'>{service.serviceSummary}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className='flex items-center justify-center text-center mt-4 transition-colors duration-300'>
                                                {/* <Link href="/services" className=' text-[#4f5cb0] hover:text-[#5360b7] font-medium flex gap-2'>View All Services <span className='mt-1'><ChevronRight size={18} /></span></Link> */}
                                                <Link href="/services" className='text-[#4f5cb0] hover:text-[#5360b7] font-medium flex gap-2 hover:-translate-y-1 translate-0 duration-500'><span>View All Services</span> <span className='text-[#4f5cb0] hover:text-[#0a1138]'><ChevronRight size={18} className='mt-0.5' /></span></Link>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            href="/join-us"
                            className={` hover:text-[#4f5cb0] font-medium transition-all hover:mb-2 duration-500 ${pathname === "/join-us" ? "text-[#4f5cb0]" : "text-[#002047]"}`}
                        >
                            Join Us
                        </Link>
                        {/* <Link
                            href="/resources"
                            className={` hover:text-[#4f5cb0] font-medium transition-colors ${pathname === "/resources" ? "text-[#4f5cb0]" : "text-[#002047]"}`}
                        >
                            Resources
                        </Link> */}
                        <Link
                            href="/testimonials"
                            className={` hover:text-[#4f5cb0] font-medium transition-all hover:mb-2 duration-500 ${pathname === "/testimonials" ? "text-[#4f5cb0]" : "text-[#002047]"}`}
                        >
                            Testimonials
                        </Link>
                        <Link
                            href="/contact"
                            className={` hover:text-[#4f5cb0] font-medium transition-all hover:mb-2 duration-500 ${pathname === "/contact" ? "text-[#4f5cb0]" : "text-[#002047]"}`}
                        >
                            Contact Us
                        </Link>
                    </nav>

                    {/* Desktop CTAs */}
                    <div className="hidden xl:flex items-center gap-4">

                        <Link href='/contact'>
                            <GradientButton className='text-[#0C2541]! hover:text-white!' variant='outline'>
                                Book a Consultant
                            </GradientButton>
                        </Link>

                        <Link href='/join-us'>
                            <GradientButton>
                                Join as a Client
                            </GradientButton>
                            {/* <AnimatedButton /> */}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="xl:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="cursor-pointer text-[#002047] hover:text-[#4f5cb0] p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">

                            <Link href="/" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                Home
                            </Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/about" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                About
                            </Link>

                            {/* Services Dropdown - Click to Toggle */}
                            <div>
                                <Link href="#"
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className={`flex w-full items-center justify-between text-base font-medium px-4 py-3 ${pathname === "/services" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}
                                >
                                    Services
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </Link>

                                {/* Animated Dropdown Content */}
                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 mt-3 space-y-0 border-l-2 border-gray-200">
                                                {services.map((service: IService, index) => (
                                                    <Link
                                                        key={index}
                                                        href={`/services/${service.slug}`}
                                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                                        className="flex gap-2 text-sm font-medium text-[#65758B] hover:text-[#4f5cb0] px-4 py-3 hover:bg-gray-50 border-b border-gray-50 last:border-0"
                                                    >
                                                        <DynamicLucideIcon
                                                            iconName={service.serviceIcon}
                                                            size={14}
                                                            className="mt-0.5"
                                                        />
                                                        {service.title}
                                                    </Link>
                                                ))}
                                                <Link href="/services" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='pl-4 mt-3 text-sm text-[#4f5cb0] hover:text-[#5360b7] font-medium flex items-center justify-center gap-2'><span>View All Services</span> <span className=''><ChevronRight size={18} /></span></Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <Link href="/join-us" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/join-us" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                Join Us
                            </Link>
                            {/* <Link href="/resources" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/resources" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                Resources
                            </Link> */}
                            <Link href="/testimonials" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/testimonials" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                Testimonials
                            </Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`block text-sm font-medium px-4 py-3 ${pathname === "/contact" ? "text-[#4f5cb0]" : "text-[#002047]"} hover:bg-gray-50 hover:text-[#4f5cb0] transition-colors border-b border-gray-50 last:border-0`}>
                                Contact Us
                            </Link>

                            <div className="pt-4 flex flex-col gap-3">
                                {/* Outline button */}
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    <Button
                                        variant="outline" className="cursor-pointer w-full border-[#4f5cb0] text-[#002047] hover:text-[#4f5cb0] hover:bg-[#EEF5FB]  transition-all duration-200 active:scale-95"
                                    >
                                        Book a Consultant
                                    </Button>
                                </Link>


                                <Link href="/join-us" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    <AnimatedButton />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
