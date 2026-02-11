
import {
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
} from 'lucide-react'
import GlassGlace, { HeroTextAnimation, HeroTextAnimationFromLeft, HeroTextAnimationFromRight, HeroTextAnimationFromTop, HoverGlass } from './HeroTextAnimation'
import Link from 'next/link'
import GradientButton from '../shared/button/GradiantButton'

export function HeroServer() {
  return (
    <div className="relative flex items-center w-full font-sans">
      {/* Main Content Container */}
      <div className="container mx-auto overflow-hidden px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-16">
        <div >
          {/* Badge */}
          {/* <HeroTextAnimationFromTop delay={0.2}>
            <div className="inline-flex max-w-3xl items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-blue-100 text-sm font-medium tracking-wide">
                Trusted Since 2013
              </span>
            </div>
          </HeroTextAnimationFromTop> */}
          <HeroTextAnimationFromTop delay={0.2}>
            <GlassGlace>
              <div
                className="inline-flex max-w-3xl items-center gap-2
        px-4 py-2 rounded-full
        bg-blue-500/10 border border-blue-400/20
        backdrop-blur-sm overflow-hidden
      "
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-blue-100 text-sm font-medium tracking-wide">
                  Trusted Since 2013
                </span>
              </div>
            </GlassGlace>
          </HeroTextAnimationFromTop>

          {/* Heading */}
          <HeroTextAnimationFromLeft delay={0.4}>
            <h1 className="text-4xl md:text-5xl xl:text-7xl max-w-2xl xl:max-w-3xl font-bold text-white leading-tight mb-6 mt-8">
              Strategic Accounting for{' '}
              <span className=" text-[#53C9F4]">
                Business Owners Who Want More
              </span>
            </h1>
          </HeroTextAnimationFromLeft>

          {/* Subheading */}
          <HeroTextAnimationFromRight delay={0.6}>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              We simplify your accounting, tax, and advisory needs so you can
              focus on growth. Since 2013.
            </p>
          </HeroTextAnimationFromRight>

          {/* CTA Buttons */}
          <HeroTextAnimationFromLeft delay={0.8}>
            <div className="flex flex-col max-w-3xl sm:flex-row gap-4 mb-8">
              <Link href='/join-us'>
                {/* <button className="group cursor-pointer w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-[#53C9F4] rounded-lg hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40">
                  Start Your Registration
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button> */}
                <GradientButton>
                  Start Your Registration
                </GradientButton>
              </Link>
              <Link href='/services'>
                {/* <button className="inline-flex w-full sm:w-auto cursor-pointer items-center justify-center px-8 py-4 text-base font-semibold text-white border border-slate-600 rounded-lg hover:bg-white/5 hover:border-slate-500 transition-all duration-200">
                  Explore Our Services
                </button> */}
                <GradientButton className='' variant="outline">
                  Explore Our Services
                </GradientButton>
              </Link>
            </div>
          </HeroTextAnimationFromLeft>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 max-w-4xl md:grid-cols-3 gap-6 border-slate-400/60">
            {/* Indicator 1 */}
            <HeroTextAnimation delay={0.10}>
              <HoverGlass>
                <div className="flex items-start gap-4 group border border-slate-400/60 p-4 rounded-md hover:border-slate-300/80 transition-colors duration-300">
                  <div className="p-3 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-500 flex items-center justify-center border-gradient">
                    <Shield className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Secure & Compliant
                    </h3>
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-500 text-sm">IRD Certified</p>
                  </div>
                </div>
              </HoverGlass>
            </HeroTextAnimation>
            {/* Indicator 2 */}
            <HeroTextAnimation delay={0.12}>
              <HoverGlass>
                <div className="flex items-start gap-4 group border border-slate-400/60 p-4 rounded-md hover:border-slate-300/80 transition-colors duration-300">
                  <div className="p-3 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-500  flex items-center justify-center border-gradient">
                    <TrendingUp className="h-6 w-6  " />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      500+ Businesses
                    </h3>
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-500 text-sm">Served Successfully</p>
                  </div>
                </div>
              </HoverGlass>
            </HeroTextAnimation>
            {/* Indicator 3 */}
            <HeroTextAnimation delay={0.14}>
              <HoverGlass>
                <div className="flex items-start gap-4 group border border-slate-400/60 p-4 rounded-md hover:border-slate-300/80 transition-colors duration-300">
                  <div className="p-3 text-blue-400 group-hover:scale-110 group-hover:text-white transition-all duration-500 flex items-center justify-center border-gradient">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">12+ Years</h3>
                    <p className="text-slate-400 group-hover:text-white transition-colors duration-500 text-sm">Industry Experience</p>
                  </div>
                </div>
              </HoverGlass>
            </HeroTextAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
