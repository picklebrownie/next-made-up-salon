import { socials } from '../../utils/socials'
  
  export default function Footer() {
    return (
      <footer className="bg-pattern bg-repeat">
        <div className="mx-auto px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 xl:px-12">
          <div className="flex justify-center space-x-6 md:order-2">
            {socials.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-yellow-600">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 transition ease-in-out duration-300 hover:scale-125" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2023 Made Up Salon. Created by Kayla.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  