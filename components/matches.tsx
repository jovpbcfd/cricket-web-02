'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Roboto } from "next/font/google"
import { liveMatches } from "@/data/matches"

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ['latin'],
})

export default function Matches() {
    const router = useRouter();
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5'>
            {liveMatches.map((match) => (
                <div key={match.matchNumber} className='bg-[url(/img/BACKGROUND-SAMPLE.webp)] shadow-sm shadow-[#FFFBB9]/50 bg-cover bg-center flex flex-col rounded-md gap-5 p-4 md:px-4 md:justify-between w-full h-full md:h-[256px] md:gap-0 md:flex-row'>
                    <div className='self-center flex flex-col items-center gap-2 md:gap-6 md:ml-10'>
                        <div className='flex items-center justify-center gap-3 text-white'>
                            <div>
                                <Image src={`${match.teams[0].banner}`} width={40} height={40} alt='Team one' className='mx-auto' />
                                <p className='text-center leading-5 md:text-md md:uppercase'>
                                    <span className='block'>{match.teams[0].name.split(' ')[0]}</span>
                                    <span>{match.teams[0].name.split(' ')[1]}</span>
                                </p>
                            </div>
                            <div>
                                <Image src="/img/vs-gold.webp" width={50} height={50} alt='vs' />
                            </div>
                            <div>
                                <Image src={`${match.teams[1].banner}`} width={40} height={40} alt='Team two' className='mx-auto' />
                                <p className='text-center leading-5 md:text-md md:uppercase'>
                                    <span className='block'>{match.teams[1].name.split(' ')[0]}</span>
                                    <span>{match.teams[1].name.split(' ')[1]}</span>
                                </p>
                            </div>
                        </div>
                        <div className="inline-flex items-center justify-center gap-2 mx-auto text-[#D4AF6A] font-bold text-md border-y-1 boder-[#f3dc8a] md:py-2">
                            <div className="flex flex-col items-center">
                                <span>05</span>
                                <span className="text-xs font-normal tracking-wide">DAYS</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>05</span>
                                <span className="text-xs font-normal tracking-wide">HRS</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>31</span>
                                <span className="text-xs font-normal tracking-wide">MNS</span>
                            </div>
                            <span>:</span>
                            <div className="flex flex-col items-center">
                                <span>00</span>
                                <span className="text-xs font-normal tracking-wide">SECS</span>
                            </div>
                        </div>
                        <div>
                            <p className='uppercase text-xs text-white'>{match.venue}</p>
                        </div>
                    </div>
                    <div className='self-center font-bold text-[#0F172A]'>
                        <div className="hidden uppercase border-b-2 border-[#0F172A] pb-2 text-center md:block">
                            <h3 className={`${roboto.variable} uppercase font-bold tracking-tight md:text-2xl md:italic`}>Match <span>{match.matchNumber}</span></h3>
                            <p className="tracking-tight"><span>{match.date}</span> | <span>{match.time}</span></p>
                        </div>
                        <div className="mt-2 text-center hidden md:block">
                            <p className={`${roboto.variable} uppercase tracking-tight text-[#0F172A] italic fonb-bold`}>Match begins at</p>
                            <p>{match.startTime}</p>
                        </div>
                        <button className="mx-auto bg-gradient-to-r from-[#0D1B2F] via-[#295695] to-[#0D1B2F] text-white text-sm text-center py-2 px-4 cursor-pointer rounded-full w-full
                            transition-all duration-300 hover:from-[#295695] hover:via-[#0D1B2F] hover:to-[#295695] 
                        md:py-3 md:px-0 md:mt-3"
                            onClick={() => router.push(`/matches/${match.id}`)}
                        >
                            Match center
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}