import Image from 'next/image'

import Partners from '@/components/partners'
import LatestNews from '@/components/latest-news'
import Standings from '@/components/standings'
import Matches from '@/components/matches'


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

      <section className="max-w-7xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Matches</h2>
        <Matches />
      </section>

      <section className="max-w-7xl mx-auto px-4 my-10">
        <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">About us</h2>
        <div className="text-center mx-auto">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
            <div className="w-full">
              <p>
                Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                nec porttitor erat, vel ullamcorper erat.
              </p>
              <p>
                Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                nec porttitor erat, vel ullamcorper erat.
              </p>
              <p>
                Pellentesque mollis urna vel semper egestas. Duis ac dictum lacus.
                Sed sagittis non nunc ac malesuada. Quisque ut eleifend urna. Etiam
                nec porttitor erat, vel ullamcorper erat.
              </p>
            </div>
            <div className="w-full">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                libero placeat quaerat voluptatum deserunt voluptas itaque beatae
                tempora! Quam ad fugit similique, fugiat ipsum a? Fugiat qui eius
                doloremque omnis architecto illo dolor suscipit quia ab in. Alias
                aliquid quasi molestias quibusdam dolore ipsa, vitae laborum cum est
                ut? Libero?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                consectetur nihil voluptatem eveniet asperiores dolor sint neque
                facilis consequuntur! Ipsam obcaecati vitae delectus accusantium
                earum sunt eveniet cupiditate totam ut minima, quisquam nemo facere,
                molestias labore incidunt ad laboriosam nam?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="/img/about-us.webp"
              alt="Cricket stadium"
              className="w-full rounded-lg shadow-lg"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center">
            </button> */}
            <div className="absolute bottom-4 left-4 bg-white p-2 rounded shadow-md">
              <p className="text-sm font-semibold">"Lorem ipsum, dolor sit"</p>
              <span className="text-xs text-gray-500">Cricket Stadium</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">We empower small business owners</h3>
            <p className="mt-4 text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <blockquote className="mt-6 border-l-4 border-yellow-400 pl-4 italic text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore."
            </blockquote>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Latest News</h2>
        <LatestNews />
      </section>

      <section className="max-w-7xl mx-auto">
        {/* <h2 className="font-bold text-2xl mb-4">Players</h2> */}
        {/* <div className="grid gap-4 w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-3">
          <div className="flex border p-4 w-[600px] h-[300px]">
            <div className="flex-shrink-0 w-[40%] h-full border">
              <Image
                src="/img/players/player-one.webp"
                className="h-full w-full object-contain"
                width={349}
                height={280}
                alt="Player Image"
              />
            </div>

            <div className="flex flex-col justify-center pl-4 w-[60%] self-end">
              <span className="text-lg font-handwritten">Captain</span>
              <h3 className="font-bold text-2xl font-handwritten">Player Name</h3>

              <div className="flex items-center text-lg font-handwritten mt-4">
                <div className="text-center mx-2">
                  <p>Matches</p>
                  <p className="font-bold text-xl">12</p>
                </div>
                <span className="text-2xl mx-1">/</span>
                <div className="text-center mx-2">
                  <p>Runs</p>
                  <p className="font-bold text-xl">12</p>
                </div>
                <span className="text-2xl mx-1">/</span>
                <div className="text-center mx-2">
                  <p>Highscore</p>
                  <p className="font-bold text-xl">12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex border p-4 w-[600px] h-[300px]"></div>
          <div className="bg-gray-200 h-24 border border-black"></div>

          <div className="col-span-3 flex justify-center gap-4">
            <div className="bg-gray-200 h-24 w-1/4 border border-black"></div>
            <div className="bg-gray-200 h-24 w-1/4 border border-black"></div>
          </div>
        </div> */}
      </section>

      <section className="max-w-7xl mx-auto px-4  my-10">
        <h2 className="font-bold text-2xl mb-4 uppercase tracking-tight">Standings</h2>
        <Standings />
      </section>
    </>
  )
}
