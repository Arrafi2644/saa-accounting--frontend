
"use client"
import GlassGlace, { HeroTextAnimation } from "../../home/HeroTextAnimation";
import { DynamicLucideIcon } from "../dynamicIcon/DynamicLucideIcon";
import { motion } from "framer-motion"
export interface CommonHeroProps {
  badgeIcon?: string;
  badgeTitle?: string;
  title?: string;
  description?: string;
  bannerImage?: string;
}

const staggerDelays = {
  badge: 0.3,
  heading: 0.5,
  para: 0.8,
};

const CommonHero = ({ badgeIcon, badgeTitle, title, description }: CommonHeroProps) => {
  return (
    <div>
      {/* 1. Compact Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFFFFF] to-[#CAEEFB] py-20 overflow-hidden">


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 1.3 } },
          }}
          className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center flex items-center flex-col justify-center ">
          <GlassGlace
          color={"#607ABE"}
          >
            {
              badgeTitle &&
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: staggerDelays.badge, ease: "easeOut" }}
                className="flex items-center w-max gap-2 px-4 py-2 rounded-full border bg-[#E9EAF4] border-[#5864B4] backdrop-blur-sm"
              >
                {badgeIcon && <DynamicLucideIcon
                  iconName={badgeIcon}
                  size={16}
                  className="text-[#5864B4] "
                />}

                <span className="text-[#5864B4] font-medium text-sm">
                  {badgeTitle}
                </span>
              </motion.div>
            }
          </GlassGlace>


          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: staggerDelays.heading, ease: "easeOut" }}
            className=" text-[#002047] my-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[45px] md:leading-none">
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: staggerDelays.para, ease: "easeOut" }}
            className="text-lg md:text-xl text-[#65758B] max-w-2xl mx-auto leading-relaxed">
            {description}
          </motion.p>

        </motion.div>
      </section>
    </div>
  );
};

export default CommonHero;