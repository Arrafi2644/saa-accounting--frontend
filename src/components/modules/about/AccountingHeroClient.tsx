
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import sideImage from "../../../../public/assets/about-us.webp";
import sideImage from "../../../../public/assets/accounting-hero-section.webp";

const staggerDelays = {
  image: 0.2,
  heading: 0.5,
  para1: 0.7,
  para2: 0.9,
  para3: 1.1,
};

const AccountingHeroClient = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left Column – Image */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 2.4, // was 1.5
          delay: staggerDelays.image,
          ease: "easeOut",
        }}
        className="relative h-[300px] lg:h-[500px] z-0 rounded-lg overflow-hidden"
      >
        <Image
          src={sideImage}
          alt="SAA Accounting Services team providing professional bookkeeping and financial advisory support to businesses"
          fill
          className="object-cover hover:scale-105 transition-all duration-500 rounded-xl"
        />
      </motion.div>

      {/* Right Column – Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="space-y-6"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3, // was 0.8
            delay: staggerDelays.heading,
            ease: "easeOut",
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002047] leading-tight"
        >
          We Are the Experts in What We Do
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15, // was 0.7
            delay: staggerDelays.para1,
            ease: "easeOut",
          }}
          className="text-black text-base sm:text-lg leading-relaxed"
        >
          Since 2013, SAA Accounting Business Limited has been helping business
          owners manage their accounting with confidence and ease. We understand
          that not every business owner has the time or expertise to handle
          bookkeeping — and why should you?
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15, // was 0.7
            delay: staggerDelays.para2,
            ease: "easeOut",
          }}
          className="text-black text-base sm:text-lg leading-relaxed"
        >
          Thats where we come in. SAA simplifies the accounting process and
          provides reliable, affordable solutions tailored for small to
          medium-sized businesses. We use the latest technologies, including
          Xero and MYOB, to securely manage your finances.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15, // was 0.7
            delay: staggerDelays.para3,
            ease: "easeOut",
          }}
          className="text-black text-base sm:text-lg leading-relaxed"
        >
          Being a business owner today is no easy task. At SAA, we provide
          practical advice and hands-on assistance that boost productivity and
          help your business flourish.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default AccountingHeroClient;
