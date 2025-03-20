import Image from "next/image";

export default function Standings() {
    const teams = [
        { pos: 1, name: "Kolkata Knight Riders", logo: "/img/teams/knight-riders.webp", mp: 14, won: 9, lost: 3, nr: 2, nrr: "+1.428", pts: 20 },
        { pos: 2, name: "Sunrisers Hyderabad", logo: "/img/teams/sun-risers.webp", mp: 14, won: 8, lost: 5, nr: 1, nrr: "+0.414", pts: 17 },
        { pos: 3, name: "Rajasthan Royals", logo: "/img/teams/rajasthan-royals.webp", mp: 14, won: 8, lost: 5, nr: 1, nrr: "+0.273", pts: 17 },
        { pos: 4, name: "Royal Challengers Bengaluru", logo: "/img/teams/rcb.webp", mp: 14, won: 7, lost: 7, nr: 0, nrr: "+0.459", pts: 14 },
        { pos: 5, name: "Chennai Super Kings", logo: "/img/teams/chennai-super-kings.webp", mp: 14, won: 7, lost: 7, nr: 0, nrr: "+0.392", pts: 14 },
        { pos: 6, name: "Delhi Capitals", logo: "/img/teams/delhi-capitals.webp", mp: 14, won: 7, lost: 7, nr: 0, nrr: "-0.377", pts: 14 },
        { pos: 7, name: "Lucknow Super Giants", logo: "/img/teams/lucknow-super-giants.webp", mp: 14, won: 7, lost: 7, nr: 0, nrr: "-0.667", pts: 14 },
        { pos: 8, name: "Gujarat Titans", logo: "/img/teams/gujarat-titans.webp", mp: 14, won: 5, lost: 7, nr: 2, nrr: "-1.063", pts: 12 },
        { pos: 9, name: "Punjab Kings", logo: "/img/teams/punjab-kings.webp", mp: 14, won: 5, lost: 9, nr: 0, nrr: "-0.353", pts: 10 },
        { pos: 10, name: "Mumbai Indians", logo: "/img/teams/mumbai-indians.webp", mp: 14, won: 4, lost: 10, nr: 0, nrr: "-0.318", pts: 8 }
    ];

    return (
        <div className="overflow-x-auto md:p-4">
            <table className="w-full border border-[#f5f5f5] shadow-lg">
                <thead className="bg-gray-800 text-white border-b-4 border-[#f3dc8a]">
                    <tr>
                        <th className="p-3">Pos</th>
                        <th className="p-3 text-left">Teams</th>
                        <th className="p-3 hidden md:table-cell">MP</th>
                        <th className="p-3 hidden md:table-cell">Won</th>
                        <th className="p-3 hidden md:table-cell">Lost</th>
                        <th className="p-3 hidden md:table-cell">N/R</th>
                        <th className="p-3 hidden md:table-cell">NRR</th>
                        <th className="p-3">PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.pos} className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="p-3 text-center">{team.pos}</td>
                            <td className="p-3 flex items-center space-x-2">
                                <Image src={team.logo} alt={team.name} width={30} height={30} className="w-auto h-auto" />
                                <span>{team.name}</span>
                            </td>
                            <td className="p-3 text-center hidden md:table-cell">{team.mp}</td>
                            <td className="p-3 text-center hidden md:table-cell">{team.won}</td>
                            <td className="p-3 text-center hidden md:table-cell">{team.lost}</td>
                            <td className="p-3 text-center hidden md:table-cell">{team.nr}</td>
                            <td className="p-3 text-center hidden md:table-cell">{team.nrr}</td>
                            <td className="p-3 text-center font-bold">{team.pts}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}