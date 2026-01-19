

import { HeroTextAnimation } from "../../home/HeroTextAnimation";
import { DynamicLucideIcon } from "../dynamicIcon/DynamicLucideIcon";
export interface CommonHeroProps {
  badgeIcon?: string;
  badgeTitle?: string;
  title?: string;
  description?: string;
  bannerImage?: string;
}
const CommonHero = ({ badgeIcon, badgeTitle, title, description }: CommonHeroProps) => {
  return (
    <div>
      {/* 1. Compact Hero Section */}
      <section className="relative bg-linear-to-b from-[#FFFFFF] to-[#CAEEFB] py-20 overflow-hidden">

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center flex items-center flex-col justify-center">
          <HeroTextAnimation delay={0.2}>
            {
              badgeTitle && <div className="flex items-center w-max gap-2 px-4 py-2 rounded-full border bg-[#E9EAF4] border-gray-300 backdrop-blur-sm">
                {badgeIcon && <DynamicLucideIcon
                  iconName={badgeIcon}
                  size={16}
                  className="text-[#5864B4] "
                /> }

                <span className="text-[#5864B4] font-medium text-sm">
                  {badgeTitle}
                </span>
              </div>
            }
          </HeroTextAnimation>
          {/* <HeroTextAnimation delay={0}> */}
            <h1 className=" text-[#002047] my-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[45px] md:leading-none">
              {title}
            </h1>
          {/* </HeroTextAnimation> */}
          <HeroTextAnimation delay={0.2}>
            <p className="text-lg md:text-xl text-[#65758B] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </HeroTextAnimation>

        </div>
      </section>
    </div>
  );
};

export default CommonHero;