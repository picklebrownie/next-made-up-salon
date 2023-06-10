import { people } from "../utils/people"
import { AboutPersonListItemCard } from "../Components/About"
import { ContactCallout } from "../Components/Contact"
import Image from "next/image"

export default function About(){
    return ( 
        <>
        <div className="relative isolate pt-14 ">
          <div className="absolute inset-0 -z-10 h-full w-full">
            <Image
              fill
              sizes="100vw"
              src="/hero-about.png"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          </div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-yellow-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-10">
          <div className="text-center">
            <h1 className="text-4xl font-handrawn text-gray-900 sm:text-5xl drop-shadow-md tracking-wide">
                Where Beauty Blossoms
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700 drop-shadow-sm px-8">
                Lily and Rose started their salon with a vision to create a welcoming and inclusive space for women. Their mission is to bring out the unique beauty in every woman who walks through their doors.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 w-full h-52 bg-gradient-to-b -z-10 from-transparent to-white'></div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-300 to-emerald-200 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <div className='min-w-full px-8 grid justify-items-center'>

            <h3 className="text-3xl font-handrawn text-yellow-700 sm:text-4xl drop-shadow-md tracking-wide">
                Our Story
            </h3>
            <p className='max-w-5xl mt-6 text-lg px-4 sm:px-8 leading-8 text-gray-600 indent-12 justify-self-center'>
            Our story began in the heart of a small town where two sisters, Lily and Rose, had a vision to create a welcoming and inclusive space for women to feel beautiful and confident. Armed with a passion for hair and a love for their community, they set out to make their dream a reality. </p>
            <p className='max-w-5xl mt-6 text-lg px-4 sm:px-8 leading-8 text-gray-600 indent-12 justify-self-center'>
            As young girls, Lily and Rose had always been fascinated by hair styling. They would often spend hours experimenting with different hairstyles on each other and their friends. They would create elaborate updos, braids, and curls, and take pride in the compliments they received on their work. As they grew older, their passion for hair only intensified, and they began to take classes and attend workshops to perfect their craft. It was during this time that they realized they wanted to make a career out of their love for hair styling and open their own salon. Through hard work and dedication, Lily and Rose opened their salon doors, and it wasn&apos;t long before the word spread about their exceptional styling and personalized attention to every client. </p>
            <p className='max-w-5xl mt-6 text-lg px-4 sm:px-8 leading-8 text-gray-600 indent-12 justify-self-center'>
            Today, their salon is a beloved fixture in the town, where women come to be pampered, feel uplifted, and leave with a renewed sense of confidence. From the beginning, our mission has been to bring out the unique beauty in every woman, and we&apos;re proud to continue that tradition with every client who walks through our doors.
            </p>
        </div>

      <div className="bg-white pb-8 grid justify-items-center pt-20">
            <h3 className="text-3xl font-handrawn text-yellow-700 sm:text-4xl drop-shadow-md tracking-wide">
                Meet our Experts
            </h3>
            <p className='max-w-3xl mt-6 text-lg px-4 sm:px-8 leading-8 text-gray-600 text-center justify-self-center'>
                Lily and Rose make a dynamic duo, complementing each other&apos;s strengths to bring out the best in every client&apos;s hair. With unparalleled skills and dedication to our craft, Lily and Rose are committed to making every client look and feel their absolute best. </p>
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

        <ContactCallout people={people.slice(0, 2)}/>

        </>
    )
}