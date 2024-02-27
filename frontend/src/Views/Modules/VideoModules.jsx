import React from 'react'
import VideoCard from '../../Components/VideoCard'
import Navbar from '../../Components/Navbar'

const VideoModules = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto p-10 mt-10">
                <h1 className="mb-20 font-bold text-3xl md:text-4xl lg:text-5xl font-[Poppins]">Watch our tutorials!</h1>
                <div className="grid justify-items-center items-center justify-center gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                    <VideoCard link="https://www.youtube.com/embed/Nbp93_Tz50A?si=n9UzZTGMumX5ECHE" title="EASY - LE SSERAFIM" shortDesc="'EASY' - LE SSERAFIM M/V"  />
                   

                </div>

            </div>

        </>
    )
}

export default VideoModules