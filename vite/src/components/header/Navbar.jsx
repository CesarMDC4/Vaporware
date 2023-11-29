import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false, dropdownItems:[{name: 'HVAC, Plumbing, & Fire Protection', href:'/services/service1'},{name: 'Building Cx& Energy Audits', href:'/services/service2'},{name: 'Industrial Refrigeration', href:'/services/service3'},{name: 'Enviromental Compliance', href:'/services/service4'},{name: 'Regulatory Compliance', href:'/services/service5'},{name: 'Training & Technical Support ', href:'/services/service6'}]},
  { name: 'Training', href: '/training', current: false },
  { name: 'Clients', href: '/clients', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Team', href: '/team', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Login', href: '/login', current: false },  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              {/* Left section for logo */}
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-14 w-auto"
                    src="https://www.cypresseg.com/img/logo/CypressEG.png"
                    alt="Cypress"
                  />
                </a>
              </div>

              {/* Center section for mobile menu button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Right section for user profile*/}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                      />
                    </Menu.Button>
                  </div>
                  {/* ... Menu Items ... */}
                </Menu>
              </div>

              {/* Right section for navigation links */}
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Fragment key={item.name}>
                      {item.dropdownItems ? (
                        <Menu as="div" className="relative">
                          <div>
                            <Menu.Button
                              className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                                'px-5 py-2 rounded-md text-sm font-medium focus:outline-none'
                              )}
                            >
                              {item.name}
                            </Menu.Button>
                          </div>
                          {/* Dropdown items */}
                          <Menu.Items className="absolute z-10 right-0 mt-2 space-y-2 bg-white border border-gray-200 p-2 rounded-md">
                            {item.dropdownItems.map((dropdownItem,index) => (
                              <Menu.Item key={dropdownItem.name}>
                                {({ active }) => (
                                  <>
                                  <a
                                    href={dropdownItem.href}
                                    className={classNames(
                                      active ? 'text-black-900' : 'text-black-500',
                                      'block px-6 py-2 text-sm rounded-md',
                                      index < item.dropdownItems.length-1 && 'border-b border-black rounded-b-none '
                                    )}
                                  >
                                    {dropdownItem.name}
                                  </a>
                                  </>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Menu>
                      ) : (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                            'px-5 py-2 rounded-md text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state. */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
