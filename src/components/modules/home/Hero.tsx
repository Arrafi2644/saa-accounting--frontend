
import Image from 'next/image';
import AnimatedScrollButton from './AnimatedScrollButton';
import { HeroServer } from './HeroServer';
import heroBg from "../../../../public/assets/saa-hero-bg.jpeg" 
import heroBg2 from "../../../../public/assets/Banner v2.jpg" 
import heroBg3 from "../../../../public/assets/saa-hero-3.jpeg" 
import heroBg4 from "../../../../public/assets/Banner-v4.jpg" 

export default function Hero() {

  return (
  <div className="w-full relative py-12 ">
      <div className="absolute inset-0 z-0">
        <Image
          // src="https://res.cloudinary.com/dog2ins5h/image/upload/v1767932345/closeup-financial-consultant-going-through-paperwork-meeting-with-client_jo1l4k.jpg"
          src={heroBg4}
          alt="Professional Accounting Office"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        {/* <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div> */}
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-0 pb-2 overflow-hidden">
        <HeroServer />
      </div>

      {/* Animated Scroll Button */}
      {/* <AnimatedScrollButton /> */}

    </div>
  );
}