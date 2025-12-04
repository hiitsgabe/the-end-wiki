import React from 'react'
import { BoxesBg, Navbar } from '@/components/ui'
import { Logo } from '@/components/atoms'
import { getHotGames } from '@/services/internal/games'

const getMostPopularGames = async () => {
    const games = await getHotGames()
    console.log(games)
}

const LandingPage = async () => {
    await getMostPopularGames()
    return (
        <div>
            <div className="h-[80vh] relative w-full overflow-hidden">
                <Navbar />
                <BoxesBg />
                <div className="h-full flex items-center justify-center flex-col">
                    <Logo className="text-center z-50 text-6xl!" />
                    <p className="text-center text-gray-200 font-bold z-50 text-2xl! mt-4">Share your game experience with the world!</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
            </div>
            <div className="bg-black z-50 h-[50vh]">
                <div className="h-full flex items-center justify-center flex-col">
                    <p className="text-center z-50 text-2xl! mt-4">Share your game experience with the world!</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage