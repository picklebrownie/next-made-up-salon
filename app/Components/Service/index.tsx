import Image from "next/image"
import type { Service } from "../../utils/services"

/**
 * displays a service card with image on the left
 */
export function ServiceCardLeft({ service }: { service: Service }) {
    return (
        <div className="group relative isolate grid grid-cols-12 grid-rows-4 min-h-full min-w-full">
            <div className="col-start-1 col-span-5 row-span-4 h-80 relative min-h-full">
                <div className="absolute inset-0 rounded-r-xl ring-1 ring-inset ring-gray-900/10">
                    <Image
                        fill
                        sizes="100vw"
                        src={service.imageSrc}
                        alt=""
                        className="rounded-r-xl bg-gray-50 object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="absolute inset-0 rounded-r-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="col-start-6 col-span-6 row-start-1 row-span-1 grid content-end -ml-3 z-10">
                <h3 className="mt-3 text-3xl transition ease-in-out duration-300 group-hover:translate-x-12 group-hover:scale-110 font-handrawn leading-10 tracking-wide text-yellow-600">
                    <span className="absolute inset-0" />
                    {service.name}
                </h3>
            </div>
            <div className='col-start-6 col-span-7 row-start-2 row-span-3 pl-2 pr-3'>
                <div className="group relative max-w-xl">
                    <p className="mt-1 text-sm leading-6 text-gray-600">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

/**
 * displays a service card with image on the right
 */
export function ServiceCardRight({ service }: { service: Service }) {
    return (
        <div className="group relative isolate grid grid-cols-12 grid-rows-4 min-h-full min-w-full">
            <div className="col-start-8 col-span-5 row-start-1 row-span-4 h-80 relative min-h-full">
            <div className="absolute inset-0 rounded-l-xl ring-1 ring-inset ring-gray-900/10">
                    <Image
                        fill
                        sizes="100vw"
                        src={service.imageSrc}
                        alt=""
                        className="rounded-l-xl bg-gray-50 object-cover"
                        loading='lazy'
                    />
                </div>
                <div className="absolute inset-0 rounded-l-xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="col-start-1 col-span-7 row-start-1 row-span-1 grid content-end -mr-3 z-10 text-end">
                <h3 className="mt-3 text-3xl transition ease-in-out duration-300 group-hover:-translate-x-12 group-hover:scale-110 font-handrawn leading-10 tracking-wide text-yellow-600">
                    <span className="absolute inset-0" />
                    {service.name}
                </h3>
            </div>
            <div className='col-start-1 col-span-7 row-start-2 row-span-3 pl-2 pr-3 text-end grid justify-items-end'>
                <div className="group relative max-w-xl">
                    <p className="mt-1 text-sm leading-6 text-gray-600">{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export function ServicesSectionHome({services} : {services: Service[]}) {
    return (
        <div className='pt-8 grid w-full'>
            <div className='bg-gradient-to-b from-transparent to-emerald-50 grid pt-4'>
                <div className="relative h-20 w-40 sm:h-32 sm:w-60 lg:h-44 lg:w-96 mx-auto">
                    <Image 
                        fill
                        sizes="100vw"
                        src="/break-comb.png"
                        className='contain opacity-70'
                        alt=""
                        loading='lazy'
                    />
                </div>
            </div>
            <div className='bg-gradient-to-t from-transparent to-emerald-50 grid pb-12'>
                {/* <h2 className='text-center text-3xl text-yellow-900'>Featured Techniques</h2> */}
                <p className='mt-8 text-lg leading-8 text-gray-600 text-center px-8 lg:pt-8 max-w-2xl justify-self-center drop-shadow-sm'>
                    Made Up Salon is a full-service salon, offering a wide range of services to meet your hair care needs. Here are some featured <a href="/services" className='text-yellow-600' >services</a> we offer!
                </p>
            </div>
            <div className="mt-4 gap-y-8 lg:mt-20 grid justify-items-center">
                {services.map(function(service, i) {
                    if(i % 2 === 0) {
                        return <ServiceCardLeft key={service.id}  service={service} />
                    }  else {
                        return <ServiceCardRight key={service.id} service={service} />
                    }
                })}
            </div>
        </div>
    )
}

export function ServicesList({services}: {services: Service[]}) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">More Services</h2>
  
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md"
              >
                <div className="aspect-h-3 aspect-w-4 bg-gray-200 sm:aspect-none sm:h-52">
                  <Image
                    height={200}
                    width={200}
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                    loading='lazy'
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4 text-center bg-pattern">
                  <h3 className="text-2xl transition ease-in-out duration-300 group-hover:scale-110 tracking-wide font-handrawn text-yellow-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  export function ServiceHero() {
    return (
        <div className="relative isolate overflow-visible px-6 pt-40 pb-8 md:pt-60 lg:px-8">
            <Image
            height={800}
            width={420}
            src="/hero-services.png"
            alt=""
            className="absolute top-4 -right-32 md:top-24 lg:right-8 xl:right-32 -z-10 h-full object-scale-down opacity-10"
            priority
            />
            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-4xl font-handrawn tracking-wide text-yellow-600 sm:text-5xl drop-shadow-lg">Treat yourself</h2>
                <div className="text-lg tracking-wide italic text-gray-700">and your bridal party!</div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                We&apos;re excited to announce that our salon now offers <span className="font-bold text-gray-800">bridal hair and makeup services</span> for the entire bridal party! Whether you&apos;re looking for a classic updo or beachy waves, we&apos;ve got you covered. And for your bridesmaids, we offer a range of styles to suit any hair type or preference. Our makeup artists will ensure that everyone looks and feels their best, with a look that complements your wedding theme and personal style.
                </p>
            </div>
        </div>      
    )
  }