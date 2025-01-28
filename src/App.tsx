import { useState } from 'react'
import ContactMe from './contact_me'
import TechStack from './tech_stack'
import Intro from './intro'
import AboutMe from './about_me'
import Footer from './footer'
import { Link, animateScroll as scroll } from 'react-scroll'
import './App.css'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


import {
  Dialog,
  DialogPanel,

  PopoverGroup,
} from '@headlessui/react'



function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
{/* header*/}

    <header className="" id="header">
    
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Jeric Cariaso</span>
                <img 
                  alt=""
                  src="src\assets\mylogo.svg"
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6 text-orange-200 cursor-pointer" />
              </button>
            </div>
{/* header navigations */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link 
            activeClass="active" 
            to="about-me" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-base/6 font-['Abhaya_Libre-normal'] text-white cursor-pointer hover:text-orange-200"
          >
            About Me
          </Link>
          <Link 
            activeClass="active" 
            to="tech-stack" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-base/6 font-['Abhaya_Libre-normal'] text-white cursor-pointer hover:text-orange-200"
          >
            Tech Stack
          </Link>
          <Link 
            activeClass="active" 
            to="contact-me" 
            spy={true} 
            smooth={true} 
            offset={-70} 
            duration={500}
            className="text-base/6 font-['Abhaya_Libre-normal'] text-white cursor-pointer hover:text-orange-200"
          >
            Contact Me
          </Link>

        </PopoverGroup>
{/* end of header navigations */}
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-cyan-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Jeric Cariaso</span>
              <img
                alt=""
                src="mylogo.svg"
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only ">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6 text-orange-200 cursor-pointer"  />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link 
                activeClass="active" 
                to="about-me" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-['Abhaya_Libre-normal'] text-white hover:bg-gray-50 hover:text-cyan-900"
                >
                  About Me
                </Link>
                <Link 
                activeClass="active" 
                to="tech-stack" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-['Abhaya_Libre-normal'] text-white hover:bg-gray-50 hover:text-cyan-900"
                >
                  Tech Stack
                </Link>
                <Link 
                activeClass="active" 
                to="contact-me" 
                spy={true} 
                smooth={true} 
                offset={-70} 
                duration={500}
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-['Abhaya_Libre-normal'] text-white hover:bg-gray-50 hover:text-cyan-900"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>


{/* end of header  */}

{/* introduction section */}

    <section id ="intro">
    <div className="flex items-center justify-center min-h-screen">
      <Intro />
    </div>
    </section>
{/* end of introduction section   */}

{/* about me section */}
  <section id = "about-me" >
    <div>
      <AboutMe />
    </div>
  </section>
{/* end of about me section */}

{/* Tech Stack section */}
    <section id="tech-stack">
    <div className="font-['Abhaya_Libre-normal']">
      <TechStack />
    </div>
    </section>
{/* end of tech stack section */}


{/* contact me section */}
    <section id="contact-me">
    <div className="font-['Abhaya_Libre-normal']">
      <ContactMe />
    </div>
    </section>
{/* end of contact me section */}

{/* footer section */}
  <footer>
    <Footer />
  </footer>
{/* end of footer section */}
    </>
  )
}

export default App
