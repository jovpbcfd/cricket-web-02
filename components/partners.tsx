'use client'

import { useEffect, useRef } from 'react'

const officialPartnerLogos = [
    'official-partners/amul_protein.webp',
    'official-partners/big-ant.webp',
    'official-partners/bisleri.webp',
    'official-partners/boat.webp',
    'official-partners/dream_cricket_25.webp',
    'official-partners/finkeda.webp',
    'official-partners/havmor.webp',
    'official-partners/hurricane.webp',
    'official-partners/instax_fujifilm.webp',
    'official-partners/JioHotstar_Logo.webp',
    'official-partners/lords_med.webp',
    'official-partners/pokemon.webp',
    'official-partners/spinner_sports_drink.webp',
]

export default function Partners() {
    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!marqueeRef.current) return
        const marquee = marqueeRef.current
        let start = Date.now()

        function animate() {
            let elapsed = Date.now() - start
            marquee.style.transform = `translateX(${-elapsed * 0.05}px)`
            if (elapsed * 0.05 > marquee.scrollWidth / 2) {
                start = Date.now()
            }
            requestAnimationFrame(animate)
        }

        animate()
    }, [])

    return (
        <div className="overflow-hidden relative w-full bg-white py-4">
            <div
                ref={marqueeRef}
                className="flex whitespace-nowrap gap-8"
                style={{ willChange: 'transform' }}
            >
                {[...officialPartnerLogos, ...officialPartnerLogos].map((logo, index) => (
                    <img
                        key={index}
                        src={`/img/${logo}`}
                        alt="logo"
                        className="h-12 w-auto opacity-80 filter grayscale contrast-50"
                    />
                ))}
            </div>
        </div>
    )
}
