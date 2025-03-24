import Image from 'next/image'

import Partners from '@/components/partners'
import LatestNews from '@/components/latest-news'
import Standings from '@/components/standings'
import Matches from '@/components/matches'
import AboutUs from '@/components/about-us'
import Players from '@/components/players'


export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto text-center mb-8 px-4 my-5 md:my-10 ">
        <div className="flex flex-col-reverse gap-5 md:flex-row md:gap-10">
          <div className="self-center md:w-[50%]">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hero Section Title
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              voluptates, tempora beatae iusto, doloremque voluptatum dolorum
              molestiae odio consectetur
            </p>
            <div className="mt-6">
              <button className="px-6 py-3 bg-[#f3dc8a] text-[#212529] font-bold rounded-lg shadow-md hover:bg-[#E9C235] transition cursor-pointer">
                Download App
              </button>
            </div>
          </div>
          <div className="relative hidden rounded-md text-gray-500 md:w-[500px] md:h-[500px] md:flex md:items-center md:justify-center">
            <Image
              src="/img/hero-banner-500x500.webp"
              alt="Hero"
              width={342}
              height={297}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 my-10">
        <Partners />
      </section>

      <section className="bg-[url(/bg-h&f.svg)] bg-center border-y-4 border-[#f3dc8a] py-1 md:py-5">
        <div className='max-w-7xl mx-auto px-4 my-10'>
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight text-white">Matches</h2>
          <Matches />
        </div>
      </section>

      <section className='bg-[#F5F5F5]  py-1 md:py-5'>
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">About us</h2>
          <AboutUs />
        </div>
      </section>

      <section className="py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight text-center">Players</h2>
          <Players />
        </div>
      </section >

      <section className="bg-[url(/bg-h&f.svg)] bg-center border-y-4 border-[#f3dc8a] py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl text-white mb-4 uppercase tracking-tight">Latest News</h2>
          <LatestNews />
        </div>
      </section>

      <section className="py-1 md:py-5">
        <div className="max-w-7xl mx-auto px-4 my-10">
          <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Standings</h2>
          <Standings />
        </div>
      </section>
    </>
  )
}
