import Link from 'next/link';
import Image from 'next/image'

const adText = 'Now offering Bridal consultations!'
const adButtonText = 'Learn More'
const heroButtonText= 'Book Now'
const heroSecondaryButtonText = 'More Services'
const addButtonLink = '/services'
const heroButtonLink = '/contact'
const heroSecondaryButtonLink = '/services'

const HeroText = () => {
    return (
         <>
            Self-care starts here at our <span className='text-yellow-700'>Made Up Salon</span>. Trust our hair care experts to prioritize your satisfaction, from consultation to finish. Book now for a transformative hair experience.
         </>
    )
}
const HeroTitle = () => {
    return (
        <>
            Revamp your look, <br/> renew your routine.
        </>
    )
}

export function MobileHero(){
    return (
        <div className="relative isolate overflow-hidden pt-14 lg:hidden">
        <Image
          height={250}
          width={500}
          src="/hero-home.png"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 blur-sm"
          priority
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        
        <div className="drop-shadow-sm mx-auto max-w-2xl py-32 sm:py-36 lg:py-56 min-w-full">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-slate-400 text-slate-800 ring-1 ring-slate-900/10 hover:ring-slate-900/20">
                {adText} {' '}
                <Link 
                  className="font-semibold text-yellow-600"
                  href={addButtonLink}
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                    {adButtonText} 
                  <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-handrawn tracking-tight text-stone-950 sm:text-6xl">
                <HeroTitle />
            </h1>
            <p className="mt-6 px-8 text-lg leading-8 text-stone-800">
                <HeroText />
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link 
                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                href={heroButtonLink}
              >
                {heroButtonText}
              </Link>
              <Link 
                className="text-sm font-semibold leading-6 text-slate-900"
                href={heroSecondaryButtonLink}
              >
                {heroSecondaryButtonText} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className='absolute bottom-0 w-full h-28 bg-gradient-to-b from-transparent to-white'>

          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    )
}

export function DesktopHero(){
    return (
        <div className="relative hidden lg:block">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 pt-32 pb-20 lg:px-8 lg:py-56">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-500 ring-1 ring-slate-700/10 hover:ring-slate-900/20">
                    {adText} {' '}
                    <Link 
                      className="whitespace-nowrap font-semibold text-yellow-600"
                      href={addButtonLink}
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                        {adButtonText} 
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>
                <h1 className="text-4xl font-handrawn tracking-tight text-gray-900 sm:text-6xl">
                    <HeroTitle />
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    <HeroText />
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link 
                    className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                    href={heroButtonLink}
                  >
                    {heroButtonText}
                  </Link>
                  <Link 
                    className="text-sm font-semibold leading-6 text-slate-800"
                    href={heroSecondaryButtonLink}
                  >
                    {heroSecondaryButtonText} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-gray-50 lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
          height={250}
          width={500}
            className="object-cover aspect-auto h-full w-full"
            src="/hero-home.png"
            alt=""
            priority
          />
        </div>
      </div>
    )
}