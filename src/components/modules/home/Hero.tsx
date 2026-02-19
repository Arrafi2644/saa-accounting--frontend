
// import Image from 'next/image';
// import { HeroServer } from './HeroServer';
// import heroBg4 from "../../../../public/assets/Banner-v4.jpg" 

// export default function Hero() {

//   return (
//   <div className="w-full relative py-12 ">
//       <div className="absolute inset-0 z-0">
//         <Image
//           // src="https://res.cloudinary.com/dog2ins5h/image/upload/v1767932345/closeup-financial-consultant-going-through-paperwork-meeting-with-client_jo1l4k.jpg"
//           src={heroBg4}
//           alt="Professional Accounting Office"
//           fill
//           sizes="100vw"
//           priority
//           className="object-cover"
//         />

//         {/* <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div> */}
//       </div>

//       {/* Hero Section */}
//       <div className="container mx-auto px-4 pt-0 pb-2 overflow-hidden">
//         <HeroServer />
//       </div>

//       {/* Animated Scroll Button */}
//       {/* <AnimatedScrollButton /> */}

//     </div>
//   );
// }



import Image from 'next/image';
import { HeroServer } from './HeroServer';
import heroBg4 from "../../../../public/assets/Banner-v4.jpg" 

export default function Hero() {

  return (
  <div className="w-full relative py-6 md:py-8 lg:py-12">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBg4}
          alt="Professional Accounting Office"
          fill
          sizes="100vw"
          priority
          className="object-right object-cover lg:object-center "
        />

        {/* <div className="absolute inset-0 bg-linear-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div> */}
      </div>
      <div className="absolute inset-0 z-10 bg-[#0C2541]/80 lg:hidden"></div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-0 pb-2 overflow-hidden">
        <HeroServer />
      </div>

      {/* Animated Scroll Button */}
      {/* <AnimatedScrollButton /> */}

    </div>
  );
}