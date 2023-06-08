import React from 'react'
import { services } from '../utils/services';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { people } from '../utils/people';
import { ServiceCardLeft, ServiceCardRight, ServicesSectionHome } from '../Components/Service';
import { AboutPersonListItemCard, AboutTeamSectionHome } from '../Components/About';
import { ContactCallout } from '../Components/Contact';
import { DesktopHero, MobileHero } from '../Components/Hero';

export default function Home() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
      <AboutTeamSectionHome people={people} />
      <ServicesSectionHome services={services.slice(0, 5)} />
      <ContactCallout people={people.slice(0, 2)}/>
      </>
  )
}

  