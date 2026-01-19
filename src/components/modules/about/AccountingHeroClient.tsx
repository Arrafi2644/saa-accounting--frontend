"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

const AccountingHeroClient = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}

                    className="relative h-[300px] lg:h-[500px] z-0"
                >
                    <Image
                        src="https://res.cloudinary.com/dog2ins5h/image/upload/v1766567178/about-team-BQFTuygE_ncmuj1.jpg"
                        alt="SAA Accounting Services team providing professional bookkeeping and financial advisory support to businesses"
                        fill
                        className="object-cover rounded-xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Content Section */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002047] leading-tight">
                            We Are the Experts in What We Do
                        </h1>

                        <div className="space-y-4 text-[#65758B] text-base sm:text-lg leading-relaxed">
                            <p>
                                Since 2013, SAA Accounting Business Limited has been helping
                                business owners manage their accounting with confidence and
                                ease. We understand that not every business owner has the time or
                                expertise to handle bookkeeping — and why should you? You are
                                focused on running your business, not managing the books.
                            </p>

                            <p>
                                Thats where we come in. SAA simplifies the accounting process
                                and provides reliable, affordable solutions tailored for small to
                                medium-sized businesses. We use the latest technologies,
                                including Xero and MYOB, to securely track and manage your
                                business finances, streamlining and automating data collection for
                                maximum efficiency.
                            </p>

                            <p>
                                Being a business owner today is no easy task. Many businesses
                                are pulled in multiple directions trying to meet their obligations. At
                                SAA, we provide practical advice and hands-on assistance that
                                boost productivity and help your business flourish.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AccountingHeroClient;