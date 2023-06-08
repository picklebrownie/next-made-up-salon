import type { People } from '../../utils/people'
import type { Person } from '../../utils/people'

export function AboutPersonListItemCard({person}: {person:Person}) {
    return (
        <li key={person.name} className="flex flex-col sm:flex-row gap-6 p-3 bg-pattern border rounded-2xl shadow-lg shadow-slate-200">
            <img className="aspect-[4/3] w-fit p-2 sm:p-0 sm:w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
            <div className="flex-auto">
                    <h3 className="text-lg font-bold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base leading-7 text-yellow-600">{person.role}</p>
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
            </div>
        </li>
    )
}

export function AboutTeamSectionHome({ people }: { people: Array<Person> }) {
    return (
      <div className='grid justify-items-center'>
        <div className='mt-8 min-w-full px-8 justify-self-center xl:bg-gradient-to-b xl:from-transparent xl:to-orange-50'>
            <img
                className="max-h-40 max-w-full mx-auto"
                src="https://res.cloudinary.com/dpybiqjss/image/upload/v1680825408/ade_Up_Salon_os92kw.png"
                alt=""
            />
        </div>
        <div className='min-w-full px-8 grid justify-items-center xl:bg-gradient-to-t xl:from-transparent xl:to-orange-50'>
            <p className=' max-w-7xl mt-6 text-lg leading-8 text-gray-600 text-center justify-self-center'>
            With years of training and hands-on experience, Lily's expertise lies in precision cuts, while Rose's specialty is in creating stunning color transformations. Together, they make a dynamic duo, complementing each other's strengths to bring out the best in every client's hair. With unparalleled skills and dedication to our craft, Lily and Rose are committed to making every client look and feel their absolute best.
            </p>
        </div>

        <div className="bg-white pt-0 pb-8">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-2 lg:max-w-4xl lg:gap-x-10 xl:max-w-none"
                >
                {people.map((person) => (
                    <AboutPersonListItemCard key={person.id} person={person} />
                ))}
                </ul>
            </div>
        </div>
      </div>
    )
}