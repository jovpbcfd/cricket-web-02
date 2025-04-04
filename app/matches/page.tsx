import Matches from "@/components/matches"

export default function Page() {
    return (
        <>
            <section>
                <div className="bg-[url(/bg-h&f.svg)] px-4 py-8 rounded-lg flex items-center m-2 md:mx-2 justify-center border-4 border-[#f3dc8a] md:max-w-7xl md:mx-auto">
                    <h1 className="text-[#f3dc8a] md:text-4xl md:font-bold">Live Match</h1>
                </div>
            </section>
            <section>
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Matches />
                </div>
            </section>
        </>
    )
}