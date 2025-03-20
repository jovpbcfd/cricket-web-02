import Image from "next/image"

export default function Matches() {
    const teamMatches = [
        {
            id: 1,
            matchNumber: 1,
            teams: [
                { name: 'Sunrisers Hyderabad', banner: '/img/teams/sun-risers.webp' },
                { name: 'Gunjarat Titans', banner: '/img/teams/gujarat-titans.webp' },
            ],
            date: "23 Mar 2025",
            time: "22:00 IST",
            startTime: "19:30 IST (14:00 GMT)",
            venue: "Narendar Modi Stadium, Ahmedabad"
        },
        {
            id: 2,
            matchNumber: 2,
            teams: [
                { name: 'Gujarat Titans', banner: '/img/teams/gujarat-titans.webp' },
                { name: 'Rajasthan Royals', banner: '/img/teams/rajasthan-royals.webp' },
            ],
            date: "25 Mar 2025",
            time: "22:00 IST",
            startTime: "19:30 IST (14:00 GMT)",
            venue: "Narendar Modi Stadium, Ahmedabad"
        },
        {
            id: 3,
            matchNumber: 3,
            teams: [
                { name: 'Lucknow Giants', banner: '/img/teams/lucknow-super-giants.webp' },
                { name: 'Rajasthan Royals', banner: '/img/teams/rajasthan-royals.webp' },
            ],
            date: "25 Mar 2025",
            time: "22:00 IST",
            startTime: "19:30 IST (14:00 GMT)",
            venue: "Narendar Modi Stadium, Ahmedabad"
        },
        {
            id: 4,
            matchNumber: 4,
            teams: [
                { name: 'Gujarat Titans', banner: '/img/teams/gujarat-titans.webp' },
                { name: 'Punjab Kings', banner: '/img/teams/punjab-kings.webp' },
            ],
            date: "22 Mar 2025",
            time: "22:00 IST",
            startTime: "19:30 IST (14:00 GMT)",
            venue: "Narendar Modi Stadium, Ahmedabad"
        },
    ]


    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5'>
            {teamMatches.map((match) => (
                <div key={match.matchNumber} className='bg-[url(/img/BACKGROUND-SAMPLE.webp)] bg-cover bg-center flex flex-row rounded-md p-4 md:px-4 md:justify-between w-full h-full md:h-[256px]'>
                    <div className='self-center flex flex-col items-center gap-2 md:gap-6 md:ml-10'>
                        <div className='flex items-center justify-center gap-3 text-white'>
                            <div>
                                <Image src={`${match.teams[0].banner}`} width={40} height={40} alt='Team one' className='mx-auto' />
                                <p className='text-center leading-5 md:text-xl'>
                                    <span className='block'>{match.teams[0].name.split(' ')[0]}</span>
                                    <span>{match.teams[0].name.split(' ')[1]}</span>
                                </p>
                            </div>
                            <div>
                                <Image src="/img/vs-gold.webp" width={40} height={40} alt='vs' />
                            </div>
                            <div>
                                <Image src={`${match.teams[1].banner}`} width={40} height={40} alt='Team two' className='mx-auto' />
                                <p className='text-center leading-5 md:text-xl'>
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
                    <div className='self-center hidden font-bold text-[#0F172A] md:block'>
                        <div className="border-b-2 border-[#0F172A] pb-2">
                            <h3 className="md:text-2xl md:italic">Match <span>{match.matchNumber}</span></h3>
                            <p><span>{match.date}</span> | <span>{match.time}</span></p>
                        </div>
                        <div className="mt-2">
                            <p className="text-[#0F172A] italic fonb-bold">Match begins at</p>
                            <p>{match.startTime}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}