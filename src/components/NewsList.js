import axios from 'axios'
import React, { useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import noImg from '../assests/no_image_placeholder.png'


const navigation = [
  { name: 'General',  href: '#', current: false },
  { name: 'Business', href: '#', current: false },
  { name: 'Technology', href: '#', current: false },
  { name: 'Sports', href: '#', current: false },
  { name: 'Entertainment', href: '#', current: false },
  { name: 'Health', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NewsList = () => {
    const [articles, setArticles] = useState([])
    const [query, setQuery] = useState('general')
   


  
    useEffect(() => {
        const getArticles = async () => {

            const response =axios.get('https://newsapi.org/v2/everything?q='+query+'&apiKey=dc0f3bdbe3ac408e83d37ced00052399')
            console.log(response);
            setArticles((await response).data.articles)

        }
        getArticles()
        
    },[query])
  return (

  <div>
 
 <div>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => setQuery(item.name.toLowerCase())}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  

 </div>

      
    {articles.map(article => {
      if(article.title != '[Removed]'){
        return(
          <NewsItem
          title={article.title}
          description={article.description}
          url={article.url}
          urlToImage={article.urlToImage ? article.urlToImage : noImg}/>)
      }
      })}
    </div>
  )
}

export default NewsList
