import { HeroTextAnimationFromScale } from "./HeroTextAnimation"
import TrustStripCard from "./TrustStripCard"

const partners: string[] = ["XERO", "MYOB", "QuickBooks", "IRD"]

export function TrustStrip() {
  return (
    <section className="bg-linear-to- border-b py-10 w-full "
      style={{
        background: "linear-gradient(to right, #0c2541, #2c5985f2, #0c2541)",
      }}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-6">

          <HeroTextAnimationFromScale>

            <h3 className="text-[29px] font-extrabold bg-linear-to-r tracking-[2px] from-white to-[#68ff2a] bg-clip-text text-transparent text-center">
              TRUSTED PARTNER & CERTIFIED PROVIDER
            </h3>
          </HeroTextAnimationFromScale>

          <div className="flex items-center flex-wrap  justify-center transition-all duration-300">
            {
              partners?.map((partner, index) => <TrustStripCard key={index} partner={partner} index={index} partners={partners} />)
            }

          </div>
        </div>
      </div>
    </section >
  )
}
