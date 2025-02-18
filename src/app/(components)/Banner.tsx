import React from 'react'
import Button from './Button'

type Props = {
    titleOne: string,
    titleTwo?: string,
    description?: string,
    bgImage: string,
}

const Banner = ({ titleOne, titleTwo, description, bgImage }: Props) => {
    return (
        <section id="welcomeSection" className="scroll-smooth pt-[7rem]">
            <div className="flex flex-col justify-center items-center w-full">
                <div role="img" aria-label="Entrust Home Page Image Banner" className={`${bgImage} bg-entrustBannerFadeBlue bg-blend-soft-light bg-cover w-[90%] h-fit rounded-[60px] flex flex-row justify-center items-center px-10 md:justify-start`}>
                    <div className="flex flex-col h-[30em] md:h-[35em] justify-center">
                        <h1 className="text-entrustSubtleWhite text-4xl md:text-7xl font-bold drop-shadow-titleShadow pb-2">{titleOne}</h1>
                        {titleTwo && <h1 className="text-entrustSubtleWhite text-3xl md:text-6xl font-bold drop-shadow-titleShadow pb-2">{titleTwo}</h1>}
                        {description && <h2 className="text-entrustSubtleWhite text-xl md:text-2xl font-bold drop-shadow-titleShadow pb-2">{description}</h2>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner