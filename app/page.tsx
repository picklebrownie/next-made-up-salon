// "use client" 

import React from 'react'
import { services } from './utils/services';
import { people } from './utils/people';
import { ServicesSectionHome } from './Components/Service';
import { AboutTeamSectionHome } from './Components/About';
import { ContactCallout } from './Components/Contact';
import { DesktopHero, MobileHero } from './Components/Hero';
// import { useState, useCallback, useEffect } from 'react';

// const useMediaQuery = (width: number) => {
//   const [targetReached, setTargetReached] = useState(false);

//   const updateTarget = useCallback((e: { matches: any; }) => {
//     if (e.matches) {
//       setTargetReached(true);
//     } else {
//       setTargetReached(false);
//     }
//   }, []);

//   useEffect(() => {
//     const media = window.matchMedia(`(max-width: ${width}px)`);
//     media.addEventListener("change", updateTarget);

//     // Check on mount (callback is not called until a change occurs)
//     if (media.matches) {
//       setTargetReached(true);
//     }

//     return () => media.removeEventListener("change", updateTarget);
//   }, []);

//   return targetReached;
// };

export default function Home() {
  // const isDesktop = useMediaQuery(1024)
  return (
    <>
      {/* { isDesktop ? ( */}
          <DesktopHero />
      {/* ) : ( */}
           <MobileHero />
      {/* )} */}
      <AboutTeamSectionHome people={people} />
      <ServicesSectionHome services={services.slice(0, 5)} />
      <ContactCallout people={people.slice(0, 2)}/>
      </>
  )
}

  