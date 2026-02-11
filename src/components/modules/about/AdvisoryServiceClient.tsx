// "use client"
// import { motion } from "framer-motion"

// const AdvisoryServiceClient = () => {
//     return (<motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//     >
//         <div className="max-w-6xl mx-auto text-center">
//             {/* Main Heading */}
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002065] mb-8 sm:mb-10 lg:mb-12 leading-tight px-4">
//                 Comprehensive Accounting and Advisory Services
//             </h2>

//             {/* Description Paragraphs */}
//             <div className="space-y-6 sm:space-y-8">
//                 <p className="text-base sm:text-lg lg:text-xl text-[#65758B] leading-relaxed max-w-5xl mx-auto px-4">
//                     We are more than just accountants — we are your trusted partners in business growth. Our dedicated team
//                     takes care of everything related to accounting, tax, and more. From setting up new businesses and
//                     planning structures to company incorporations, tax registrations, tax planning, and growth analysis —
//                     we ave got you covered.
//                 </p>

//                 <p className="text-base sm:text-lg lg:text-xl text-[#65758B] leading-relaxed max-w-5xl mx-auto px-4">
//                     Our advisory services go beyond simply educating clients about their obligations. We focus on
//                     sustainability, accountability, and growth — helping you build a business thats strong, compliant, and
//                     future-ready. Simply put — we{`'`}re a great team, eager to help your business grow.
//                 </p>
//             </div>
//         </div>
//     </motion.div>
//     );
// };

// export default AdvisoryServiceClient;

"use client";

import { motion } from "framer-motion";

const staggerDelays = {
  heading: 0.4,
  para1: 0.7,
  para2: 0.95,
};

const AdvisoryServiceClient = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.12 },
        },
      }}
      className="max-w-6xl mx-auto text-center"
    >
      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.3,
          delay: staggerDelays.heading,
          ease: "easeOut",
        }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002065] mb-8 sm:mb-10 lg:mb-12 leading-tight px-4"
      >
        Comprehensive Accounting and Advisory Services
      </motion.h2>

      {/* Description Paragraphs */}
      <div className="space-y-6 sm:space-y-8">
        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15,
            delay: staggerDelays.para1,
            ease: "easeOut",
          }}
          className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-5xl mx-auto px-4"
        >
          We are more than just accountants — we are your trusted partners in
          business growth. Our dedicated team takes care of everything related to
          accounting, tax, and more. From setting up new businesses and planning
          structures to company incorporations, tax registrations, tax planning,
          and growth analysis — we ave got you covered.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.15,
            delay: staggerDelays.para2,
            ease: "easeOut",
          }}
          className="text-base sm:text-lg lg:text-xl text-black leading-relaxed max-w-5xl mx-auto px-4"
        >
          Our advisory services go beyond simply educating clients about their
          obligations. We focus on sustainability, accountability, and growth —
          helping you build a business thats strong, compliant, and
          future-ready. Simply put — we{`'`}re a great team, eager to help your
          business grow.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AdvisoryServiceClient;
