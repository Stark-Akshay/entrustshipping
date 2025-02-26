import Banner from '@/app/(components)/Banner'
import NonLinkCard from '@/app/(components)/NonLinkCard'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { agencyServicesData } from '@/app/utils/cardData'
import { Card, CardContent } from '@/components/ui/card'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: "Liner Agency",
    description: "Entrust Shipping is a trusted liner agency representing top container lines worldwide. We ensure smooth port operations and efficient global shipping solutions.",
    keywords: "Liner Agency, shipping agency, global shipping solutions, container line representation, port operations, maritime logistics, shipping services, Entrust Shipping",
    openGraph: {
        title: "Liner Agency | Entrust Shipping",
        description: "Entrust Shipping provides expert liner agency services, representing leading container lines globally. Reliable port operations and seamless logistics solutions.",
        url: "https://www.entrustshipping.com/services/lineragency",
        siteName: "Entrust Shipping",
        type: "article",
    },
    robots: "index, follow",
};
const lineragency = (props: Props) => {
    return (
        <>
            <Banner titleOne='Liner Agency' description='Your Trusted Parter for Global Shipping Solutions' bgImage='bg-shipperlineragencyBanner' />
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

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-entrustBlue">Why Choose Our Freight Forwarding</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {agencyServicesData.map((feature) => (
                            <Card key={feature.id} className="border-none shadow-lg rounded-[30px] flex flex-col items-center text-center w-80 ">
                                <CardContent className="pt-6">
                                    <div className="rounded-full bg-entrustBlue p-3 w-12 h-12 flex items-center justify-center mb-4">
                                        {<feature.Icon className='text-white' />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-entrustBlue">{feature.cardTitle}</h3>
                                    <p className="text-entrustBlue">{feature.cardDescription}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default lineragency