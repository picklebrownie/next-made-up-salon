import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export function ContactCardSimple({ person }) {
    return (
        <div className={`backdrop-blur-lg shadow-slate/60 shadow-lg rounded-2xl bg-gradient-to-br from-${person.color}-200 to-${person.color}-400 p-10 max-w-md transform transition duration-500 hover:scale-110 hover:from-${person.color}-200 hover:to-${person.color}-500`}>
          <div className="flex flex-row justify-between items-center">
            <h3 className={`text-base font-bold h-fit tracking-wide leading-7 text-${person.color}-950`}>
              {person.name} 
            </h3>
            <span className={`font-thin text-xs h-fit text-${person.color}-900`}>{person.role}</span>
          </div>
            <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
            <div className="mt-1">
                <dt className="sr-only">Phone number</dt>
                <dd className={`font-semibold text-${person.color}-950`}>
                  <a href={`tel:${person.phone}`}>
                    {person.phone}
                  </a>
                </dd>
            </div>
            <div>
                <dt className="sr-only">Email</dt>
                <dd>
                <a className={`tracking-wide text-${person.color}-900`} href="mailto:collaborate@example.com">
                    {person.email}
                </a>
                </dd>
            </div>
            </dl>
        </div>
    );
}

export function ContactCallout({ people }) {
    return (
        <div className="bg-white py-8 bg-gradient-to-b from-white to-slate-200">
            <img 
                src="
                https://res.cloudinary.com/dpybiqjss/image/upload/v1680846477/Hair%20Salon/Untitled_design_32_ro8tgd.png"
                className='max-h-60 max-w-full px-8 mx-auto'
            />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl mb-12 lg:mb-20 font-semibold tracking-tight text-slate-900 text-center drop-shadow-md">Revitalize your hair - book your appointment today!</h2>
          <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 ">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                {people.map((person) => (
                    <ContactCardSimple key={person.id} person={person} />
                ))}
              </div>
              <div>
                <p className="leading-7 text-gray-400 text-center">
                  Please call ahead to ensure we have time to give you the attention you deserve.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img 
                src="https://res.cloudinary.com/dpybiqjss/image/upload/v1680846556/Hair%20Salon/Untitled_design_33_yyldgd.png"
                className='max-h-60 mt-4 px-8 max-w-full mx-auto'
            />
      </div>
    )
}

export function ContactSection({ people }) {
  return (
    <div className="relative isolate bg-pattern pt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-8 sm:pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            
            <h2 className="text-3xl font-handrawn tracking-wide text-emerald-700">Book an appointment</h2>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              From precision cuts to vibrant color and everything in between, we specialize in creating custom looks that reflect your unique personality and style. Schedule your appointment today and let us show you the difference our expert team can make!
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-white" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        
        <div className="relative px-6 pb-20 pt-12 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg flex flex-col gap-8'>
            {people.map((person) => (
                <ContactCardSimple key={person.id} person={person} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
