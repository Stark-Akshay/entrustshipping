
import React from 'react'
import { cardDataType } from '../utils/cardData';
import { Ship } from 'lucide-react';
import Link from 'next/link';



const NonLinkCard = ({ Icon, cardTitle, cardDescription }: Omit<cardDataType, "location">) => {

    return (
        <div id="card" className='group bg-white border-2 border-cardBordergrey rounded-[60px] p-5 h-[17rem] transition-all duration-300 hover:bg-entrustBlue flex flex-col justify-between max-w-[24rem] sm:max-w-[40rem] lg:max-w-[25rem] xl:max-w-[30rem]'>
            <div className='icon-container--parent flex'>
                <div className='icon-container p-2 w-fit flex flex-row justify-center items-center bg-entrustSubtleWhite border-2 border-entrustSubtleWhite text-entrustBlue rounded-full transition-all duration-300 group-hover:text-entrustSubtleWhite group-hover:bg-entrustBlue'>
                    {<Icon size={40} />}
                </div>
            </div>

            <div id="card-content" className='text-entrustBlue group-hover:text-white transition-all duration-300 pb-5'>
                <div id="card-header">
                    <h3 className='text-2xl'>{cardTitle}</h3>
                </div>
                <div id='card-description' className='mt-2 text-sm'>
                    <p>{cardDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default NonLinkCard;
