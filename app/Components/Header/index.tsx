"use client"

import Link from "next/link";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { socials } from "../../utils/socials";
import Image from 'next/image'


const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
    return (
        <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto px-4">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
            <nav className="flex items-center justify-between lg:justify-start" aria-label="Global">
              <a href="/" className="-m-1.5 p-1.5 pr-6">
                <span className="sr-only">Made Up Salon</span>
                <div className="relative h-20 w-20">
                  <Image
                    fill
                    sizes="100vw"
                    alt="Made Up Salon"
                    className=""
                    src="/logo.svg"
                    priority
                  />
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Made Up Salon</span>
                <div className="relative h-20 w-64">
                  <Image
                    fill
                    sizes="100vw"
                    className="h-16 w-auto"
                    src="/made-up-salon-full-logo.png"
                    alt=""
                    loading='lazy'
                  />
                </div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 px-6 py-6">
                  {navigation.map((item) => (
                    <Link 
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        href={item.href}
                        key={item.name}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-6 pb-2 absolute inset-x-0 bottom-0 bg-pattern">
                    <div className="flex justify-center space-x-6 md:order-2">
                        {socials.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-400 hover:text-yellow-600">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6 transition ease-in-out duration-300 hover:scale-125" aria-hidden="true" />
                        </a>
                        ))}
                    </div>
                    <div className="pt-4">
                        <p className="text-center text-xs leading-5 text-gray-500">
                        Created by Kayla
                        </p>
                    </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    )
}
