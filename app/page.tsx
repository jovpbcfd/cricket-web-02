import Partners from "@/components/partners"

import Image from "next/image"

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto text-center mb-8 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hero Section Title</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptates,
          tempora beatae iusto, doloremque voluptatum dolorum molestiae odio consectetur
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#f3dc8a] text-[#212529] font-bold rounded-lg shadow-md hover:bg-[#E9C235] transition cursor-pointer">
            Download App
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 my-10">
        <Partners />
      </section>

      <section className="max-w-7xl mx-auto">
        <h2 className="font-bold text-2xl mb-4">Players</h2>
        <div className="grid gap-4 w-full max-w-7xl mx-auto grid-cols-1 md:grid-cols-3">
          <div className="flex border p-4 w-[600px] h-[300px]">
            {/* Image Section */}
            <div className="flex-shrink-0 w-[40%] h-full border">
              <Image
                src="/img/players/player-one.webp"
                className="h-full w-full object-contain"
                width={349}
                height={280}
                alt="Player Image"
              />
            </div>

            {/* Player Details Section */}
            <div className="flex flex-col justify-center pl-4 w-[60%] self-end">
              <span className="text-lg font-handwritten">Captain</span>
              <h3 className="font-bold text-2xl font-handwritten">Player Name</h3>

              {/* Stats Section */}
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
        </div>
      </section>
    </>
  )
}
