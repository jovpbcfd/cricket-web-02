import { playerStats } from '@/data/player'
import Image from 'next/image'


type PlayerStats = {
    icon: string;
    no: number;
    name: string;
    role: string;
    matches: number;
    runs: number;
    highestScore: string;
}

export default function Players() {
    return (
        <>
            {
                playerStats.map((player: PlayerStats) => (
                    <div key={player.no} className='relative flex flex-col mt-2 items-center mx-auto max-w-[990px] h-[130px] md:flex-row md:mt-10'>
                        <div className='absolute hidden -left-20 -top-11.5 w-full h-full md:block'>
                            <Image src={player.icon} width={176} height={176} alt='Shubman Gill' className='object-cover' />
                        </div>
                        <div className='bg-[url(/img/BG1.1.webp)] bg-cover bg-no-repeat text-white flex items-center justify-center p-2 items-center w-full h-full'>
                            <p className='font-bold text-xl px-2 md:text-5xl md:px-5'>{player.no}</p>
                            <div className='relative uppercase px-2 after:absolute after:content-[""] after:bg-[#F3DC8A] after:left-0 after:top-0 after:w-[2px] after:h-full md:px-5'>
                                <p className='text-md md:text-2xl'>{player.name}</p>
                                <p className='font-bold text-[#F3DC8A]'>{player.role}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-around bg-gradient-to-r from-[#BD9E5E] via-[#F3DC8A] to-[#BD9E5E] w-full h-full'>
                            <div className='leading-[30px] text-center'>
                                <p className='text-xl font-[500] md:text-[32px] md:font-[900]'>{player.matches}</p>
                                <p className='uppercase text-sm md:text-md'>matches</p>
                            </div>
                            <div className='leading-[30px] text-center'>
                                <p className='text-xl font-[500] md:text-[32px] md:font-[900]'>{player.runs}</p>
                                <p className='uppercase text-sm md:text-md'>runs</p>
                            </div>
                            <div className='leading-[30px] text-center'>
                                <p className='text-xl font-[500] md:text-[32px] md:font-[900]'>{player.highestScore}</p>
                                <p className='uppercase text-sm md:text-md'>wickets</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}