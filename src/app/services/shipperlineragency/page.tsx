import Banner from '@/app/(components)/Banner'
import NonLinkCard from '@/app/(components)/NonLinkCard'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { agencyServicesData } from '@/app/utils/cardData'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: "Shipper Liner Agency"
}

const shipperlineragency = (props: Props) => {
    return (
        <>
            <Banner titleOne='Shipper Liner Agency' description='Your Trusted Parter for Global Shipping Solutions' bgImage='bg-shipperlineragencyBanner' />
            <section className='py-5 px-5 flex flex-col w-full gap-5 lg:flex-row md:px-20 md:justify-between items-center'>
                <div id='detailsToTheLeft' className='w-[100%] lg:w-[70%] flex flex-col justify-center lg:justify-self-auto'>
                    <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Comprehensive Liner Agency Services</h3>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Entrust Shipping has built a reputation as a trustworthy and reputed shipping liner agency. We represent some of the most renowned container lines providing services in various cities across the world.</p>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Our experienced team ensures smooth operations and excellent service delivery, making us the preferred choice for shipping lines looking for reliable representation in key ports.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <SecondaryCTA location='/branches'>Contact Our Team</SecondaryCTA>
                    </div>
                </div>
                <div className='rounded-[60px] w-full lg:w-auto'>
                    <Image src="/images/shipperlineragencyimageOne.webp" className='rounded-[40px]' height={1000} width={1000} alt={`Container ship at port representing Entrust Shipping's liner agency services`} />
                </div>
            </section>

            <section className='py-5 px-5 flex flex-col w-full gap-5 md:px-20 md:justify-between items-center'>
                <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Our Agency Services</h3>
                <div id="servicesCards" className="flex flex-col pb-5 gap-5 md:flex-row md:justify-center lg:justify-around flex-wrap flex-1 w-full h-max items-center">
                    {agencyServicesData.map((card) => (
                        <NonLinkCard key={card.id} {...card} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default shipperlineragency