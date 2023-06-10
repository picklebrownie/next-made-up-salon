import { ServiceCardLeft, ServiceCardRight, ServiceHero, ServicesList } from "../Components/Service"
import { services } from "../utils/services"
import { ContactCallout } from "../Components/Contact";
import { people } from "../utils/people"
import Image from "next/image";

export default function Services(){
    const sortedServices = [...services.slice(8), ...services.slice(0, 5)]
    const featuresServices = [...services.slice(5, 8)]

    return ( 
        <>

        <ServiceHero />

        <Image 
            height={300}
            width={500}
            src="/break-foliage-up.png"
            className='max-h-60 max-w-full px-8 mx-auto'
            alt="A line break in the form of golden foliage pointing upwards"
        />

            <div className="gap-y-8 grid justify-items-center">
                {featuresServices.map(function(service, i) {
                    if(i % 2 === 0) {
                        return <ServiceCardLeft key={service.id} service={service} />
                    }  else {
                        return <ServiceCardRight key={service.id} service={service} />
                    }
                })}
            </div>

            <h2 className="pt-32 text-center text-4xl font-handrawn tracking-wide text-yellow-600 sm:text-5xl drop-shadow-lg">So much more...</h2>

            <ServicesList services={sortedServices} />

            <ContactCallout people={people.slice(0, 2)}/>
        </>
    )
}